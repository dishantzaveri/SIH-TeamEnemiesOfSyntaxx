from datetime import datetime
from enum import auto
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from rest_framework.authtoken.models import Token
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime


# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    username=None

    # extra fields
    email = models.EmailField(("Email Address"),primary_key=True)
    name = models.CharField(max_length = 30)
    dob = models.DateField(blank=True,null=True)
    twitter = models.URLField(max_length = 255,null=True,blank=True)
    linkedin = models.URLField(max_length = 255,null=True,blank=True)
    interests = models.TextField(max_length = 255,null=True,blank=True)
    about = models.TextField(null=True,blank=True)
    profile_pic = models.ImageField(null=True,blank=True)
    is_entrepreneur = models.BooleanField(default=False)
    is_mentor = models.BooleanField(default=False)
    is_event_manager = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return self.name

    @property
    def token(self):
        token = Token.objects.get(user=User.objects.get(email=self.email))
        return token.key

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.name, filename)

class Startup(models.Model):
    user = models.ForeignKey(User, related_name = 'startup', on_delete=models.CASCADE)
    legalNameOfBusiness = models.CharField(max_length=255,null=True, blank=True)
    tradeName = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False, null=True, blank=True)
    gstin = models.CharField(max_length=255, unique=True, null=True, blank=True)
    cin = models.CharField(max_length=255, unique=True, null=True, blank=True)
    gstnStatus = models.CharField(max_length=255, null=True, blank=True)
    cin_status = models.CharField(max_length=255, null=True, blank=True)
    dateOfRegistration = models.CharField(max_length = 255,null=True,blank=True)
    constitutionOfBusiness = models.CharField(max_length=255, null=True, blank=True)
    taxpayerType = models.CharField(max_length=255, null=True, blank=True)
    natureOfBusinessActivity = models.CharField(max_length=255, null=True, blank=True)
    principalPlaceOfBusinessAddress = models.CharField(max_length=255, null=True, blank=True)
    stateJurisdiction = models.CharField(max_length=255, null=True, blank=True)
    centerJurisdiction = models.CharField(max_length=255, null=True, blank=True)
    aadhaar_linked = models.CharField(max_length=255, null=True, blank=True)
    pitch_deck = models.FileField(upload_to=user_directory_path,null=True,blank=True)

    def __str__(self):
        return self.tradeName

class WorkExperience(models.Model):
    user = models.ForeignKey(User, related_name = 'experience', on_delete=models.CASCADE)
    job_title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, blank=True, null=True)
    industry = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True,blank=True)
    description = models.TextField(max_length=255, blank=True, null=True)

class Education(models.Model):
    user = models.ForeignKey(User, related_name = 'education', on_delete=models.CASCADE)
    institute = models.CharField(max_length=255)
    degree = models.CharField(max_length=255, blank=True, null=True)
    study_field = models.CharField(max_length= 255, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    grade = models.CharField(max_length=255, blank=True, null=True)
    extracurriculars = models.TextField(blank=True, null=True, max_length=255)
    description = models.TextField(max_length=255, blank=True, null=True)

class MentorProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    expertise = models.CharField(max_length=70,null=True,blank=True)
    latitude = models.FloatField(null=True,blank=True)
    longitude = models.FloatField(null=True,blank=True)

class EntrepreneurProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='user')
    startup = models.ManyToManyField(Startup)
    mentor = models.ForeignKey(MentorProfile,models.SET_NULL,null=True,blank=True)

class Mentorship(models.Model):
    mentor = models.ForeignKey(User, models.CASCADE, related_name='mentor')
    entrepreneur = models.ForeignKey(User, models.CASCADE, related_name='entrepreneur')
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    ended_at = models.DateTimeField(null=True,blank=True)

    class Meta:
        unique_together=('mentor','entrepreneur')

class Coins(models.Model):
    coins = models.PositiveIntegerField(null=True, blank=True,default=30)
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'coins')
    date_modified = models.DateField(default=datetime.date.today)

class Myrating(models.Model):
    entrepreneur_profile   = models.ForeignKey(EntrepreneurProfile,on_delete=models.CASCADE,related_name='rating_entrepreneur',null=True, blank=True) 
    mentor_profile  = models.ForeignKey(MentorProfile,on_delete=models.CASCADE,related_name='rating_mentor',null=True, blank=True)
    rating  = models.IntegerField(default=1,validators=[MaxValueValidator(5),MinValueValidator(0)])
    class Meta:
        unique_together=('mentor_profile','entrepreneur_profile')
class Prototype(models.Model):
     videofile= models.FileField(blank=True, null=True)
     user = models.ForeignKey(User, on_delete = models.CASCADE)
     description= models.TextField(True, null=True)
     paper = models.FileField(blank=True, null=True)
