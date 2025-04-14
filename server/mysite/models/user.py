# your_app/models/user.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    -- username
    -- password
    -- email
    -- corridor
    """
    corridor = models.CharField(max_length=2)