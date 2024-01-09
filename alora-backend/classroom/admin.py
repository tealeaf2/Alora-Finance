from django.contrib import admin

from .models import Classroom, Progress, Unit, Lesson, Quiz

# Register your models here.
admin.site.register(Classroom)
admin.site.register(Progress)
admin.site.register(Unit)
admin.site.register(Lesson)
admin.site.register(Quiz)
