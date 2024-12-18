from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=30)
    release_year = models.IntegerField()

    def __str__(self):
        return self.title
