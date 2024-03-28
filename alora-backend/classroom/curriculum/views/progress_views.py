from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404

from ..curriculum_serializer import *

@api_view(['GET'])
def getProgressOfStudent(request):
    # Retrieve all topics
    topics = Topic.objects.all()
    
    # Serialize progress for each topic
    serializer = ProgressSerializer(topics, many=True, context={'request': request})
    
    # Return serialized data as response
    return Response(serializer.data)