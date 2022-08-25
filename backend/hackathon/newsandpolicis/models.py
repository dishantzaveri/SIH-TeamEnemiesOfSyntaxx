from django.db import models

# Create your models here.
from accounts.models import User, Startup
# Create your models here.

class Scheme(models.Model):
    created 			= models.DateTimeField(auto_now_add=True)
    title 				= models.CharField(max_length=100, blank=True, default='')
    Benefits 			= models.TextField(blank=True, default='')
    link_of_policy 		= models.CharField(max_length=250, null=True, blank=True)
    images_post 		= models.ImageField(null=True,blank=True)
    Eligibility         = models.CharField(max_length=250, null=True, blank=True)
    Documents 			= models.TextField(blank=True, default='')

    class Meta:
        ordering = ['created']

class Funding(models.Model):
    name                = models.CharField(max_length=500, blank=True, default='')
    description         = models.TextField(blank=True, default='')
    images              = models.ImageField(null=True,blank=True)
    startup             = models.ForeignKey(Startup, on_delete=models.CASCADE,related_name='startup')
    targetAmount        = models.IntegerField(null=True, blank=True)
    collectedAmount     = models.IntegerField(null=True, blank=True)
    event_date          = models.DateField(null=True, blank=True)
    contributors        = models.CharField(max_length=500, blank=True, default='')
    subEvents           = models.CharField(max_length=500, blank=True, default='')
    targetVolunteers    = models.CharField(max_length=500, blank=True)
    registeredVolunteers= models.IntegerField(null=True, blank=True)
    address             = models.CharField(max_length=255,blank=True, null=True)
    latitude            = models.CharField(max_length=255, blank=True, null=True)
    longitude           = models.CharField(max_length=255, blank=True, null=True)
    created_at          = models.DateTimeField(auto_now_add=True)

# class Investor(models.model):
#     funding = models.ForeignKey(Funding, related_name = 'investor')
#     amount = models.PositiveIntegerField()
#     startup = models.ForeignKey(Startup)
#     investor_name = models.CharField(max_length=255)

class Recomendation(models.Model):
    owner       = models.ForeignKey(User,on_delete=models.CASCADE,related_name='owner')
    created_at  = models.DateTimeField(auto_now_add=True)
    body        = models.TextField(blank=True, default='')
