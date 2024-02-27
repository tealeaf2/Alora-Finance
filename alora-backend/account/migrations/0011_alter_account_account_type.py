# Generated by Django 5.0.1 on 2024-02-07 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_alter_account_account_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='account_type',
            field=models.CharField(choices=[('T', 'Teacher'), ('S', 'Student')], default='S', max_length=1),
        ),
    ]
