from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404

from ..curriculum_serializer import *

#Gets all units for one topic
@api_view(['GET'])
def getUnitsForTopic(request, topic_id):
    try:
        topic = Topic.objects.get(id=topic_id)
        units = topic.unit_set.all()
        serializer = UnitSerializer(units, many=True)
        return Response(serializer.data)
    except Topic.DoesNotExist:
        # If topic with the provided ID does not exist
        return Response({'error': 'Topic not found'}, status=status.HTTP_404_NOT_FOUND)