from django.db import models

# Create your models here.
from accounts.models import User
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