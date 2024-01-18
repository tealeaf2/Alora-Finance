from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status


#models
from classroom.models import Unit, Lesson

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
def getUnit(request, uk):
    unit = Unit.objects.get(id=uk)
    serializer = UnitSerializer(unit, many=False)
    return Response(serializer.data)

#############################   LESSONS   #############################   


@api_view(['GET'])
def getAllLessons(request):
    lessons = Lesson.objects.all()
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLesson(request, uk, lk):
    lesson = Lesson.objects.get(unit=uk, lesson_num=lk)
    serializer = LessonSerializer(lesson, many=False)
    return Response(serializer.data)


#############################   NAME   #############################   


# RETURNS NAME OF TREE FROM UNIT OR UPDATE THE UNIT TREE_NAME
@api_view(['GET', 'PUT'])
def name_list(request, uk):

    #TO GET THE UNIT TREE NAME
    if request.method == 'GET':
        unit = Unit.objects.get(id=uk)
        name = unit.tree_name
        response_data = {'name': name}
        return Response(response_data)
    
    #TO UPDATE THE VALUE OF THE TREE NAME
    elif request.method == 'PUT':
        try:
            unit = Unit.objects.get(id=uk)
            data = request.data

            unit.tree_name = data['name']
            unit.save()

            response_data = {'success': True}
            return Response(response_data)

        except Unit.DoesNotExist:
            response_data = {'error': 'Unit not found'}
            return Response(response_data)
        
    