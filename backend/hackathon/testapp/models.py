from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class Post(models.Model):
    created 			= models.DateTimeField(auto_now_add=True)
    title 				= models.CharField(max_length=100, blank=True, default='')
    body 				= models.TextField(blank=True, default='')
    youtube_link 		= models.CharField(max_length=250, null=True, blank=True)
    images_post 		= models.ImageField(null=True,blank=True)
    owner			    = models.ForeignKey(User, on_delete=models.CASCADE,related_name='posts_by')

    class Meta:
        ordering = ['created']


class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']

class Category(models.Model):
    name = models.CharField(max_length=100, blank=False, default='')
    owner = models.ForeignKey(User, related_name='categories', on_delete=models.CASCADE)
    posts = models.ManyToManyField(Post, related_name='categories', blank=True)

    class Meta:
        verbose_name_plural = 'categories'

class Post_Like(models.Model):
    owner                           = models.ForeignKey(User, on_delete=models.CASCADE, related_name='like_user')
    group_post                      = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='like_user')
    create_date                     = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['create_date']

class Session(models.Model):
    Online = 'ON'
    Offline = 'OFF'

    organiser = models.ForeignKey(User, related_name='organiser', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    image=models.ImageField(null=True,blank=True)
    start_time = models.TimeField()
    end_time = models.TimeField(null=True,blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    mode = models.CharField(max_length = 3, choices = [(Online, 'Online'),(Offline,'Offline')], default = Online)
    max_registrations = models.PositiveIntegerField()
    venue = models.CharField(max_length = 255, blank = True, null=True)
    meet_link = models.URLField(null=True,blank=True)
    description = models.TextField(null=True, blank = True, max_length=300)
    price = models.FloatField(null=True, blank = True, default=0)

    def __str__(self):
        return self.name


class Attendee(models.Model):
    session = models.ForeignKey(Session, on_delete = models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('session', 'user')
    