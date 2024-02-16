from django.db.models.signals import pre_save
 
from .models import Account


# everytime an account is saved or updated, the username is set to the email of the account
def updateUser(sender, instance, **kwargs):
    # print('Signal Triggered')
    user = instance
    if user.email != '':
        user.username = user.email

# fires before saved
pre_save.connect(updateUser, sender=Account)