from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.utils.timezone import now as tz_now

from ..curriculum_serializer import *

#global variables for later views in Quiz as max
max_grade = 5
max_attempts = 3

#Gets a specific quiz from a specifc lesson
@api_view(['GET'])
def getQuiz(request, lk, user_id):
    try:
        # Check if the lesson completed record exists
        lesson_completed = Lessons_Completed.objects.get(lesson_id=lk, user_id=user_id)

        if lesson_completed.attempts >= max_attempts:
            lesson_completed.lesson_completed = True
        if lesson_completed.lesson_grade == max_grade:
            lesson_completed.lesson_completed = True
        lesson_completed.save()

        serializer = QuizSerializer(lesson_completed)
        return Response(serializer.data)
    except Lessons_Completed.DoesNotExist:
        return Response({'error': 'Lessons_Completed record not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def updateQuizProgress(request, lk, user_id):
    try:
        lesson_completed = Lessons_Completed.objects.get(lesson_id=lk, user_id=user_id)
        # lesson_assignment = Lesson_Assignment.objects.get(lesson_id=lk, user_id=user_id)
        data = request.data

        if lesson_completed.lesson_completed or lesson_completed.attempts > max_attempts:
            return Response({'message': 'max number of attempts reached or lesson already completed'})

        lesson_completed.attempts += 1
        lesson_completed.date_attempted = tz_now()
        lesson_grade = int(data['lesson_grade'])
        print(lesson_grade)

        if lesson_grade > lesson_completed.lesson_grade:
            if lesson_grade == max_grade:
                lesson_completed.lesson_completed = True
            lesson_completed.lesson_grade = lesson_grade

        if lesson_completed.attempts > max_attempts:
            lesson_completed.lesson_completed = True

        lesson_completed.save()

        return Response({'message': f'grade update success, attempts: {lesson_completed.attempts}',
                        'grade': f'{lesson_completed.lesson_grade}'})    
    except Lessons_Completed.DoesNotExist:
        return Response({'error': 'Lessons_Completed record not found'}, status=status.HTTP_404_NOT_FOUND)

