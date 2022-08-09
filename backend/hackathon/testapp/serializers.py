from rest_framework import serializers
from .models import *
from accounts.models import User



class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.name')
    like_on_post_count = serializers.SerializerMethodField('get_like_on_group_post_count')
    def get_like_on_group_post_count(self, foo):
        return 0
    comment_on_post_count = serializers.SerializerMethodField('get_comment_on_group_post_count')
    def get_comment_on_group_post_count(self, foo):
        return 0

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'owner','images_post','youtube_link','like_on_post_count','comment_on_post_count']

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
    like_user = serializers.ReadOnlyField(source='like_user.name')

    class Meta:
        model = Post_Like
        fields = ['id','like_user','group_post','create_date']
