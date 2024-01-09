from django.db import models
from account.models import Account

# Create your models here.
class Classroom(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.CharField(max_length=100)
    members = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="classroom_members", null=True, blank=True)
    
    def __str__(self):
        return self.name

class Unit(models.Model):
    name = models.CharField(max_length=100)
    lessons_total = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name

class Lesson(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=200)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE, related_name="lesson_unit", null=True, blank=True)
    
    def __str__(self):
        return self.name

class Quiz(models.Model):
    MULTIPLE_CHOICE = "MCQ"
    FREE_RESPONSE = "FRQ"

    QUIZ_TYPE_CHOICES = {
        (MULTIPLE_CHOICE, "Multiple Choice"),
        (FREE_RESPONSE, "Free Response"),
    }
    
    quiz_type = models.CharField(max_length=3, choices=QUIZ_TYPE_CHOICES, default=MULTIPLE_CHOICE)
    # questions and answers
    content = models.JSONField(null=True, blank=True)
    
    def __str__(self):
        return self.quiz_type
    

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
    

    
    
    
    
    
    