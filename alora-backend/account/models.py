from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# from classroom.models import Classroom

# Account model, inheriting from AbstractUser
class Account(AbstractUser):
    """

    Fields:
        From AbstractUser:
        username (str): Required. The unique username for the user.
        password (str): Required. A hash of the user's password.
        email (str): Email address of the user.
        first_name (str): First name of the user.
        last_name (str): Last name of the user.
        is_staff (bool): Designates whether the user can access the admin site.
        is_active (bool): Designates whether the user account is active.
        date_joined (datetime): Date and time when the user account was created.
        
        Added:
        account_type (CharField): Field storing the user's role (Teacher or Student).

    Methods:
        __str__(): Returns a string representation of the user using the username.
"""

    # Define choices for user types (Student or Teacher)
    STUDENT = "S"
    TEACHER = "T"

    USER_TYPE_CHOICES = {
        (TEACHER, "Teacher"),
        (STUDENT, "Student"),
    }

    # account's role (teacher or student)
    account_type = models.CharField(
        max_length=1,
        choices=USER_TYPE_CHOICES,
        default=STUDENT,
    )
    user_id = models.UUIDField(default=uuid.uuid4, editable=False)
    id = models.AutoField(primary_key=True)

    # string representation of the user (their name)
    def __str__(self):
        """
        Returns a string representation of the user, using the username.
        """
        return f'{self.email}, {self.first_name}, {self.last_name}, {self.password}, {self.account_type}'
    