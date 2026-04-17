from django.db import models
from users.models import User
from tasks.models import Task

class TaskStatus(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.BooleanField()  # True = Done