from django.db import models


# Create your models here.
class Routes(models.Model):
    class Meta:
        db_table = 'routes'

    id = models.AutoField(
        primary_key=True
    )
    day = models.IntegerField(
        null=False,
        blank=False
    )

    routes = models.CharField(
        max_length=1000,
        null=False,
        blank=False
    )

    routes_num = models.IntegerField(
        null=False,
        blank=False
    )

    keypoint = models.TextField(
        max_length=1000,
        null=True
    )
