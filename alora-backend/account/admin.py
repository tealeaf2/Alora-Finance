from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Account

# registers custom user model
admin.site.register(Account, UserAdmin)
