from django.db import models

class Item(models.Model):
    id = models.AutoField(primary_key=id)
    title = models.CharField(max_length=200)
    isDone = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)