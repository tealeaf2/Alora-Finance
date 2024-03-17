from django.contrib import admin

from .models import *

# Register your models here.
admin.site.register(ClassRoom)
admin.site.register(User_To_Class)

admin.site.register(Topic)
admin.site.register(Unit)
admin.site.register(Lesson)
admin.site.register(Quiz)

admin.site.register(Lessons_Completed)
admin.site.register(Lesson_Assignment)
admin.site.register(Topic_Tree)