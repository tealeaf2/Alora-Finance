from rest_framework import serializers
from .models import Unit, Lesson, Name

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
        
class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = '__all__'