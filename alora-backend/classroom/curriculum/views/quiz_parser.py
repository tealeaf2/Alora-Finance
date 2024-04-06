from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404
from ..curriculum_serializer import *
from django.db.models.signals import pre_save
from django.dispatch import receiver
import os
from django.conf import settings

import csv
import re

BASE_DIR = settings.BASE_DIR
file_name = os.path.join(BASE_DIR, 'classroom', "Alora_Finance.csv")

def get_correct_option(correct_answer):
    """Helper function to map correct_answer to correct_option (1-4)."""
    if correct_answer in ['A', 'T']:
        return 1
    elif correct_answer in ['B', 'F']:
        return 2
    elif correct_answer == 'C':
        return 3
    elif correct_answer == 'D':
        return 4
    return None  # Default if correct_answer is invalid

@receiver(pre_save, sender=Topic)
def set_topic_number(sender, instance, **kwargs):
    if instance.pk is None:  # Only set topic_number for new instances
        last_topic = Topic.objects.order_by('-topic_number').first()
        if last_topic:
            instance.topic_number = last_topic.topic_number + 1
        else:
            instance.topic_number = 1

@api_view(['POST'])
def parseCurriculum(request):
    print(file_name)
    quiz = [{"question_answer": []}]
    try:
        with open(file_name, 'r') as csv_file:
            csv_reader = csv.reader(csv_file)
            pattern = r'src="([^"]+)"'
            count = 0

            next(csv_reader)
            for line in csv_reader:
                count += 1

                if line[8] == '6':
                    count -= 1
                    continue

                quiz[0]['question_answer'].append({
                    "id": line[8], 
                    "type": "TF" if line[9] == "TRUE" else "MC", 
                    "question": line[9], 
                    "choices": [line[10], line[11], line[12], line[13]], 
                    "correct_answer": line[14], 
                    "correct_option": get_correct_option(line[14]),
                })

                if (count % 5 == 0):
                    #Topic
                    topic_name = line[2].title()
                    topic, created = Topic.objects.get_or_create(topic_name=topic_name)

                    #Unit from parse
                    unit_name = line[3].title()
                    # Create or retrieve Unit under Topic
                    last_unit = Unit.objects.all().order_by('-unit_number').first()
                    unit_number = last_unit.unit_number + 1

                    unit, created = Unit.objects.get_or_create(
                        unit_name=unit_name,
                        topic_id=topic,
                        defaults={'number_of_lessons': 1, 'unit_number': unit_number}  # Initial number of lessons
                    )

                    #Lesson
                    lesson_name = line[4].title()
                    youtube_link = re.search(pattern, line[6])
                    video_link = youtube_link.group(1) if youtube_link else None
                    # Create Lesson under Unit
                    lesson, created = Lesson.objects.get_or_create(
                        lesson_name=lesson_name,
                        unit_id=unit,
                        defaults={'video_link': video_link, 'lesson_num': unit.number_of_lessons}
                    )
                    if created:
                        unit.number_of_lessons += 1
                        unit.save()

                    # Create Quiz for the Lesson
                    if not Quiz.objects.filter(lesson_id=lesson).exists():
                        Quiz.objects.create(
                            lesson_id=lesson,
                            content=quiz
                        )
                    quiz = [{"question_answer": []}]

        return Response({'message': 'Curriculum refreshed successfully'}, status=status.HTTP_200_OK)

    except FileNotFoundError:
        return Response({'error': 'CSV file not found'}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
