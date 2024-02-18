from django.db import models
from account.models import Account


# Create your models here.
class Topic(models.Model):
    name = models.CharField(max_length=100)
    topic_num = models.IntegerField(default=0)
    units_total = models.IntegerField(default=0)
    tree_name = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name

class Classroom(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.CharField(max_length=100)
    members = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="classroom_members", null=True, blank=True)
    
    def __str__(self):
        return self.name

class Unit(models.Model):
    name = models.CharField(max_length=100)
    lessons_total = models.IntegerField(default=0)
    number = models.IntegerField(default=1)
    image = models.ImageField(null=True, blank=True)
    tree_name = models.CharField(max_length=50, null=True, blank=True)

    #Uncomment in model when working on it, because rn, it gives error in progress page
    # topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name="unit_topic", null=True, blank=True)
    
    def __str__(self):
        return self.name

class Lesson(models.Model):
    def _id(self):
        return self.id
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=200)
    # videos = models.JSONField(default=None, blank=True, null=True)
    lesson_num = models.IntegerField(default=0)
    done = models.BooleanField(default=False)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE, related_name="lesson_unit", null=True, blank=True)
    
    def __str__(self):
        return self.name



# class Video(models.Model):
#     lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="lesson_video", null=True, blank=True)
#     videos = ArrayField(models.CharField(max_length=100, blank=True))
#     video_descriptions = ArrayField(models.CharField(max_length=200, blank=True))
    
    
class Quiz(models.Model):
    # questions and answers
    content = models.JSONField(null=True, blank=True)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="lesson_quiz", null=True, blank=True)
    
    def __str__(self):
        return self.lesson.name
    

class Progress(models.Model):
    
    A = "A"
    B = "B"

    TREE_TYPE_CHOICES = {
        (A, "A"),
        (B, "B"),
    }
    
    tree_type = models.CharField( max_length=1, choices=TREE_TYPE_CHOICES, default=A)
    name = models.CharField(max_length=100)
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="progress_acount", null=True, blank=True)
    lessons_done = models.IntegerField(default=0)
    unit = models.OneToOneField(Unit, on_delete=models.CASCADE, related_name="progress_unit", null=True, blank=True)
    
    def __str__(self):
        return self.name
    
    
    
    
    
    