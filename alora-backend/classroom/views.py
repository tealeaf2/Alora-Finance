from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status


#models
from classroom.models import Unit, Lesson, Name

#serializers
from classroom.serializer import *

#############################   UNITS   #############################   

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

#############################   LESSONS   #############################   


@api_view(['GET'])
def getAllLessons(request):
    lessons = Lesson.objects.all()
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLesson(request, pk):
    lesson = Lesson.objects.get(id=pk)
    serializer = LessonSerializer(lesson, many=False)
    return Response(serializer.data)


#############################   NAME   #############################   


# RETURNS ALL NAMES IN DB
@api_view(['GET', 'POST'])
def name_list(request,format=None):
    
    if request.method == 'GET':
        names = Name.objects.all()
        serializer = NameSerializer(names, many=True)
        return Response(serializer.data)
    
    if request.method =='POST':
        serializer = NameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
# RETURNS NAME BASED ON ID
@api_view(['GET', 'PUT', 'DELETE'])
def name_detail(request,id,format=None):
    
    try:
        name = Name.objects.get(pk=id) 
    except Name.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = NameSerializer(name)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = NameSerializer(name, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        name.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    