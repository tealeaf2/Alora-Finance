from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404

from ..curriculum_serializer import *

#Gets all of the lessons of a unit
@api_view(['GET'])
def getAllLessons(request, uk):
    unit_instance = get_object_or_404(Unit, id=uk)
    lessons = Lesson.objects.filter(unit_id=unit_instance).order_by('lesson_num')
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

#Gets a specific lesson from a unit
@api_view(['GET'])
def getLesson(request, uk, lk):
    lesson = get_object_or_404(Lesson, unit_id=uk, lesson_num=lk)
    serializer = LessonSerializer(lesson, many=False)
    return Response(serializer.data)