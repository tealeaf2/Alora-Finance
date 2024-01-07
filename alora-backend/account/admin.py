from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Account, Progress, Unit, Lesson, Quiz

# registers custom user model
admin.site.register(Account, UserAdmin)
admin.site.register(Progress)
admin.site.register(Unit)
admin.site.register(Lesson)
admin.site.register(Quiz)