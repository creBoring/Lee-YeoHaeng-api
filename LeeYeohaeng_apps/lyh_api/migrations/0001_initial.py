# Generated by Django 3.2 on 2021-04-17 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Routes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('day', models.IntegerField()),
                ('routes', models.CharField(max_length=1000)),
                ('routes_num', models.IntegerField()),
                ('keypoint', models.TextField(max_length=1000, null=True)),
            ],
            options={
                'db_table': 'routes',
            },
        ),
    ]
