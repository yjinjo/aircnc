# Generated by Django 4.2 on 2023-04-10 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("medias", "0002_alter_photo_file"),
    ]

    operations = [
        migrations.AlterField(
            model_name="video",
            name="file",
            field=models.URLField(),
        ),
    ]
