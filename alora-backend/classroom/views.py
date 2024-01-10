from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

#models
from classroom.models import (Unit, Lesson)

#serializers
from classroom.serializer import *

# Create your views here.

#Units
@api_view(['GET'])
def getAllUnits(request):
    units = Unit.objects.all()
    serializer = UnitSerializer(units, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUnit(request, pk):
    unit = Unit.objects.get(id=pk)
    serializer = UnitSerializer(unit, many=False)
    return Response(serializer.data)

#Lessons
@api_view(['GET'])
def getAllLessons(request):
    lessons = Lesson.objects.all()
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLesson(request, pk):
    lesson = Lesson.objects.get(unit=pk)
    serializer = LessonSerializer(lesson, many=False)
    return Response(serializer.data)
