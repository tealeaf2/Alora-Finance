from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Account, Topic, Topic_Tree, Lesson, Lessons_Completed
from django.utils.timezone import now as tz_now

def create_fields_completed_for_user(user):
    all_lessons = Lesson.objects.all()
    all_topics = Topic.objects.all()
    for lesson in all_lessons:
        Lessons_Completed.objects.create(
            lesson_id=lesson,
            user_id=user,
            lesson_completed=False,
            lesson_grade=0,
            attempts=0,
            date_attempted=tz_now(),
        )
    for topic in all_topics:
        Topic_Tree.objects.create(
            user_id=user,
            tree_name="",
            topic_id=topic,
        )