from django.db import models

class Corridor(models.Model):
    name = models.CharField(max_length=2)

class Match(models.Model):
    team_1 = models.ForeignKey(Corridor, on_delete=models.CASCADE, related_name='matches_as_team_1')
    team_2 = models.ForeignKey(Corridor, on_delete=models.CASCADE, related_name='matches_as_team_2')
    