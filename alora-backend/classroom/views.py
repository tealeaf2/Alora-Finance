from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404

#models
from classroom.models import Unit, Lesson, Quiz

#serializers
from classroom.serializer import *

#############################   UNITS   #############################   

#Units
@api_view(['GET'])
def getAllUnits(request):
    units = Unit.objects.all().order_by('number')
    serializer = UnitSerializer(units, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUnit(request, uk):
    unit = Unit.objects.get(id=uk)
    serializer = UnitSerializer(unit, many=False)
    return Response(serializer.data)

#############################   LESSONS   #############################   

#TODO
#Gets a specific lesson from a unit
@api_view(['GET'])
def getUnitsFromTopic(request):
    return Response({'template': 'template'})

#Gets all of the lessons of a unit
@api_view(['GET'])
def getAllLessons(request, uk):
    unit_instance = get_object_or_404(Unit, number=uk)
    lessons = Lesson.objects.filter(unit=unit_instance).order_by('lesson_num')
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

#Gets a specific lesson from a unit
@api_view(['GET'])
def getFromUnitLesson(request, uk, lk):
    unit_instance = get_object_or_404(Unit, number=uk)
    lesson = get_object_or_404(Lesson, unit=unit_instance, lesson_num=lk)
    serializer = LessonSerializer(lesson, many=False)
    return Response(serializer.data)

#Gets a specfic quiz from lesson
@api_view(['GET'])
def getQuiz(request, lk):
    lesson = get_object_or_404(Lesson, id=lk)
    quiz = Quiz.objects.filter(lesson=lesson).first()
    if quiz:
        return Response(quiz.content)
    else:
        return Response({'message': 'Quiz not found for this lesson'}, status=404)

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
        
#############################   PROGRESS   #############################   
#TODO
@api_view(['GET'])
def getProgress(request):

    return Response({'template': 'template'})
        
    