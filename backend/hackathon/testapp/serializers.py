from rest_framework import serializers
from .models import *
from accounts.models import User,WorkExperience

class WorkExperiencedesignation(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = ['job_title']

class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.name')
    like_on_post_count = serializers.SerializerMethodField('get_like_on_group_post_count')
    def get_like_on_group_post_count(self,obj):
        like =  Post_Like.objects.filter(group_post=obj)
        return like.count()

    comment_on_post_count = serializers.SerializerMethodField('get_comment_on_group_post_count')
    def get_comment_on_group_post_count(self,obj):
        comment =  Comment.objects.filter(post=obj)
        return comment.count()

    experience = WorkExperiencedesignation(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'owner','images_post','youtube_link','like_on_post_count','experience','comment_on_post_count']


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'posts','comments','categories']

class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.name')

    class Meta:
        model = Comment
        fields = ['id', 'body', 'owner', 'post']

class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.name')
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'owner', 'posts']

class PostLikeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.name')

    class Meta:
        model = Post_Like
        fields = ['id','owner','group_post','create_date']

class SessionSerializer(serializers.ModelSerializer):
    organiser = serializers.ReadOnlyField(source='organiser.name')
    organiser_token = serializers.SerializerMethodField()

    class Meta:
        model = Session
        fields = ['id','organiser','organiser_token','name', 'image', 'description', 'start_time', 'end_time', 'start_date', 
        'end_date', 'mode', 'max_registrations', 'venue', 'meet_link', 'price']
    
    def get_organiser_token(self,obj):
        token = obj.organiser.token
        return token 

class AttendeeSerializer(serializers.ModelSerializer):
    attendee_token = serializers.ReadOnlyField(source= 'user.token')

    class Meta:
        model = Attendee
        fields = ['session', 'user','attendee_token']
