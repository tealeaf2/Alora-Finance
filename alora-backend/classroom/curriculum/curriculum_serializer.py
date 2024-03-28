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

class ProgressSerializer(serializers.ModelSerializer):
    lessons_total = serializers.SerializerMethodField()
    lessons_completed = serializers.SerializerMethodField()
    tree_name = serializers.SerializerMethodField()

    class Meta:
        model = Topic
        fields = '__all__'

    def get_lessons_total(self, topic):
        return topic.unit_set.aggregate(total_lessons=models.Sum('number_of_lessons'))['total_lessons'] or 0
    def get_lessons_completed(self, topic):
        user = self.context['request'].user
        if user.is_authenticated:
            # Get the number of completed lessons for the topic
            completed_lessons = user.lessons_completed.filter(unit_id__topic_id=topic.id).count()
            return completed_lessons
        return 0
    def get_tree_name(self, topic):
        # Get the user from the context
        user = self.context['request'].user
        if user.is_authenticated:
            # Get the tree name for the topic related to that user
            topic_tree = Topic_Tree.objects.filter(user_id=user, topic_id=topic).first()
            if topic_tree:
                return topic_tree.tree_name
        return None