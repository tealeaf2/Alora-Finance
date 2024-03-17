# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework import status
# from django.shortcuts import get_object_or_404

# #models
# from classroom.models import *

# #serializers
# from classroom.serializer import *

# #############################   UNITS   #############################   

# #Units
# @api_view(['GET'])
# def getAllUnits(request):
#     units = Unit.objects.all().order_by('number')
#     serializer = UnitSerializer(units, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def getUnit(request, uk):
#     unit = Unit.objects.get(id=uk)
#     serializer = UnitSerializer(unit, many=False)
#     return Response(serializer.data)

# #############################   LESSONS   #############################   

# #TODO
# #Gets a specific lesson from a unit
# @api_view(['GET'])
# def getUnitsFromTopic(request):
#     return Response({'template': 'template'})

# #Gets all of the lessons of a unit
# @api_view(['GET'])
# def getAllLessons(request, uk):
#     unit_instance = get_object_or_404(Unit, number=uk)
#     lessons = Lesson.objects.filter(unit=unit_instance).order_by('lesson_num')
#     serializer = LessonSerializer(lessons, many=True)
#     return Response(serializer.data)

# #Gets a specific lesson from a unit
# @api_view(['GET'])
# def getFromUnitLesson(request, uk, lk):
#     unit_instance = get_object_or_404(Unit, number=uk)
#     lesson = get_object_or_404(Lesson, unit=unit_instance, lesson_num=lk)
#     serializer = LessonSerializer(lesson, many=False)
#     return Response(serializer.data)

# #Gets a specfic quiz from lesson
# @api_view(['GET'])
# def getQuiz(request, lk):
#     lesson = get_object_or_404(Lesson, id=lk)
#     quiz = Quiz.objects.filter(lesson=lesson).first()
#     if quiz:
#         return Response(quiz.content)
#     else:
#         return Response({'message': 'Quiz not found for this lesson'}, status=404)
    
# #Mark Lesson as Done
# @api_view(['POST'])
# def markLessonDone(request, lk):
#     try:
#         lesson = Lesson.objects.get(id=lk)
#     except Lesson.DoesNotExist:
#         return Response({'error': 'Lesson not found'}, status=status.HTTP_404_NOT_FOUND)
#     lesson.done = True
#     lesson.save()
#     return Response({'success': True})

# #############################   NAME   #############################   


# # # RETURNS NAME OF TREE FROM UNIT OR UPDATE THE UNIT TREE_NAME
# # @api_view(['GET', 'PUT'])
# # def name_list(request, uk):

# #     #TO GET THE UNIT TREE NAME
# #     if request.method == 'GET':
# #         unit = Unit.objects.get(id=uk)
# #         name = unit.tree_name
# #         response_data = {'name': name}
# #         return Response(response_data)
    
# #     #TO UPDATE THE VALUE OF THE TREE NAME
# #     elif request.method == 'PUT':
# #         try:
# #             unit = Unit.objects.get(id=uk)
# #             data = request.data

# #             unit.tree_name = data['name']
# #             unit.save()

# #             response_data = {'success': True}
# #             return Response(response_data)

# #         except Unit.DoesNotExist:
# #             response_data = {'error': 'Unit not found'}
# #             return Response(response_data)
        
# # #############################   MEMBERS    #############################
# # @api_view(['GET'])
# # def getMembers(request, ck):
# #     try:
# #         classroom = Classroom.objects.get(id=ck)
# #         members_all = classroom.members.all()  
# #         serializer = ClassroomSerializer(members_all, many=True)
# #         return Response(serializer.data)
# #     except Classroom.DoesNotExist:
# #         return Response({'error': 'Classroom not found'})
# # #############################   PROGRESS   #############################   
# # #TODO
# # @api_view(['GET'])
# # def getProgress(request):

# #     return Response({'template': 'template'})

# # @api_view(['PUT'])
# # def updateLessonsDone(request, topic_id, progress_id):
# #     try:
# #         topic = Topic.objects.get(id=topic_id)
# #         progress = Progress.objects.get(id=progress_id)
# #     except Topic.DoesNotExist:
# #         response_data = {'error': 'Topic not found'}
# #         return Response(response_data)
# #     except Progress.DoesNotExist:
# #         response_data = {'error': 'Progress not found'}
# #         return Response(response_data)
    
# #     lessonsDoneSum = 0
# #     for unit in topic.unit_set.all():
# #         for lesson in unit.lesson_set.all():
# #             if lesson.done:
# #                 lessonsDoneSum += 1
                
# #     progress.lessons_done = lessonsDoneSum

# #     response_data = {'success': True}
# #     return Response(response_data)
    
    
            


# #############################   TOPICS   #############################  

# # get all topics
# @api_view(['GET'])
# def getAllTopics(request):
#     topics = Topic.objects.all().order_by('topic_num')
#     serializer = TopicSerializer(topics, many=True)
#     return Response(serializer.data)

# # get all units from one topic
# @api_view(['GET'])
# def getUnitsForTopic(request, topic_id):
#     try:
#         topic = Topic.objects.get(id=topic_id)
#         units = topic.unit_set.all()
#         serializer = UnitSerializer(units, many=True)
#         return Response(serializer.data)
#     except Topic.DoesNotExist:
#         # If topic with the provided ID does not exist
#         return Response({'error': 'Topic not found'}, status=status.HTTP_404_NOT_FOUND)