# Generated by Django 4.0.6 on 2022-08-22 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_rename_name_item_title_alter_item_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='isDone',
            field=models.BooleanField(default=False),
        ),
    ]
