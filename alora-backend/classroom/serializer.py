from rest_framework import serializers
from .models import Unit, Lesson, Progress

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
        
# class ProgressSerialzier(serializers.ModelSerializers):
#     class Meta:
#         model = Progress
#         fields = [unit, lessons_done]
    