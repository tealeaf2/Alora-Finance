from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404

from ..curriculum_serializer import *
from ...models import *

#Gets all of the lessons of a unit
@api_view(['GET'])
def getAllLessons(request, uk):
    unit_instance = get_object_or_404(Unit, id=uk)
    lessons = Lesson.objects.filter(unit_id=unit_instance).order_by('lesson_num')
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)


#Gets a specific lesson from a unit
@api_view(['GET'])
def getLesson(request, uk, lk):
    lesson = get_object_or_404(Lesson, unit_id__unit_number=uk, lesson_num=lk)
    serializer = LessonSerializer(lesson, many=False)
    return Response(serializer.data)

#################### For all teacher functions ####################

@api_view(['GET'])
def getAllTeacherClasses(request, user_id):
    try:
        # Retrieve all classes associated with the teacher
        teacher_classes = ClassRoom.objects.filter(user_to_class__user_id=user_id)

        # Serialize the classes
        class_serializer = ClassRoomSerializer(teacher_classes, many=True)

        return Response(class_serializer.data)

    except ClassRoom.DoesNotExist:
        return Response({'message': 'Classes not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteLesson(request, lk):
    try:
        lesson = Lesson.objects.get(id=lk)
        data = request.data
        class_id = data.get('class_id')

        if class_id is None:
            return Response({'message': 'Class ID not provided'}, status=status.HTTP_400_BAD_REQUEST)
        existing_assignments = Lesson_Assignment.objects.filter(
            lesson_id=lesson,
            user_id__user_to_class__class_id__class_id=class_id,
        )
        existing_assignments.delete()
        return Response({'message': 'All existing assignments deleted'})

    except Lesson.DoesNotExist:
        return Response({'message': 'Lesson not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def assignLesson(request, lk):
    try:
        lesson = Lesson.objects.get(id=lk)
        data = request.data

        class_id = data['class_id']
        available_date = data['available_date']
        due_date = data['due_date']

        # Check if all required data is present
        missing_data = []
        if not class_id:
            missing_data.append('class_id')
        if not available_date:
            missing_data.append('available_date')
        if not due_date:
            missing_data.append('due_date')

        if len(missing_data) != 0:
            return Response({'message': 'Missing required data', 'missing_fields': missing_data}, status=status.HTTP_400_BAD_REQUEST)

        if not Lesson_Assignment.objects.filter(lesson_id=lesson, user_id__user_to_class__class_id__class_id=class_id).exists():
            students = Account.objects.filter(
                user_to_class__class_id__class_id=class_id,
                account_type=Account.STUDENT
            )

            for student in students:
                Lesson_Assignment.objects.create(
                    user_id = student,
                    lesson_id = lesson,
                    assigned = True,
                    date_due = due_date,
                    date_available = available_date,
                    attempts_max = 3,
                )

            return Response({'message': 'Lesson successfully assigned'})
        else:
            return updateLessonAssignment(request, lesson, class_id, available_date, due_date)
        
    except Lesson.DoesNotExist:
        return Response({'message': 'Lesson not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

def updateLessonAssignment(request, lesson, class_id, available_date, due_date):
    try:
        existing_assignments = Lesson_Assignment.objects.filter(
            lesson_id=lesson,
            user_id__user_to_class__class_id__class_id=class_id
        )

        for assignment in existing_assignments:
            assignment.date_due = due_date
            assignment.date_available = available_date
            assignment.save()

        return Response({'message': 'Lesson successfully updated'})

    except Lesson.DoesNotExist:
        return Response({'message': 'Lesson not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)