from rest_framework import serializers

from ..models import *

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    number_of_lessons = serializers.SerializerMethodField()
    class Meta:
        model = Lesson
        fields = '__all__'
    def get_number_of_lessons(self, lesson):
        if lesson.unit_id:
            return lesson.unit_id.number_of_lessons
        return 0

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'