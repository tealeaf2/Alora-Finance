from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404

from ..curriculum_serializer import *

@api_view(['GET'])
def getAllTopics(request):
    topics = Topic.objects.all().order_by('topic_number')
    serializer = TopicSerializer(topics, many=True)
    return Response(serializer.data)