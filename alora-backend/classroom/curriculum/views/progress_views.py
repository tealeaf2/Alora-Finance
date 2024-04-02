from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.exceptions import ObjectDoesNotExist

from ..curriculum_serializer import *

@api_view(['GET'])
def getProgressOfStudent(request):
    # Retrieve all topics
    topics = Topic.objects.all()
    
    # Serialize progress for each topic
    serializer = ProgressSerializer(topics, many=True, context={'request': request})
    
    # Return serialized data as response
    return Response(serializer.data)

@api_view(['PUT'])
def updateTreeOfTopicTree(request, topic_id, user_id):
    try:
    # Retrieve the specific tree of the topic
        data = request.data
        topic_tree = Topic_Tree.objects.get(user_id=user_id, topic_id=topic_id)
        topic_tree.tree_name = data['name']
        topic_tree.save()

        response_data = {'success': True}
        return Response(response_data)
    except ObjectDoesNotExist:
        # If either the topic or the topic tree is not found
        topic_exists = Topic.objects.filter(id=topic_id).exists()
        if not topic_exists:
            error_msg = f'Topic with id {topic_id} does not exist.'
        else:
            error_msg = f'Topic_Tree for user {request.user} and topic {topic_id} does not exist.'
        
        response_data = {'error': error_msg}
        return Response(response_data, status=status.HTTP_404_NOT_FOUND)