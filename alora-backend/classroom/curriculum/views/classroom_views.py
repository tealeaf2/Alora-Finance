from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404
import random

from ..curriculum_serializer import *
from ...models import *

@api_view(['DELETE'])
def deleteClassRoom(request):
    try:
        data = request.data
        class_id = data.get('class_id')

        if not class_id:
            return Response({'message': 'class_id parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        classroom = get_object_or_404(ClassRoom, class_id=class_id)
        classroom.delete()

        return Response({'Message': 'classroom deleted successfully'})
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def makeClassRoom(request):
    try:
        data = request.data
        if 'class_name' not in data or 'id' not in data:
            raise ValueError("Required fields 'class_name' and 'id' not provided")
        
        name = data['class_name']
        teacher_id = data['user_id']

        user = get_object_or_404(Account, id=teacher_id)
        class_id = str(random.randint(10**9, 10**10 - 1))

        class_created = ClassRoom.objects.create(
            class_name=name,
            class_id=class_id,
        )
        User_To_Class.objects.create(
            class_id=class_created,
            user_id=user,
        )

        return Response({'Message': 'Classroom created success'})
    except ValueError as ve:
        return Response({'message': str(ve)}, status=status.HTTP_400_BAD_REQUEST)
    except Account.DoesNotExist:
        return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)