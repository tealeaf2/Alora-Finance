# from django.db.models.signals import pre_save
# from .models import Account


# def updateUser(sender, instance, **kwargs):
#     user = instance
#     if user.email != '':
#         user.username = user.email


# pre_save.connect(updateUser, sender=Account)