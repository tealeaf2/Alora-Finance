from rest_framework import serializers

from .models import Unit, Lesson, Progress, Topic, Classroom

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
        
class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classroom
        fields = '__all__'
        

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'
        
# class ProgressSerialzier(serializers.ModelSerializer):
#     class Meta:
#         model = Progress
#         fields = [unit, lessons_done]
