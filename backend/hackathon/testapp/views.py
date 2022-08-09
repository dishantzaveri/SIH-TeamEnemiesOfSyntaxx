from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status,permissions,viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .models import *
from .serializers import *
from django.db.models import Q
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By
# from hackathon.settings import BASE_DIR
import os

# options = webdriver.ChromeOptions()
# options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
# chrome_driver_binary = os.path.join(BASE_DIR, "chromedriver")
# driver = webdriver.Chrome(chrome_driver_binary, chrome_options=options)

# #driver = webdriver.Chrome(os.path.join(BASE_DIR, "chromedriver"))
# # Create your views here.
# class GSTverifyApi(APIView):
#     def post(self, request, format=None):
#         gstkey=request.POST.get("gstkey")
#         driver.get("https://www.gstsearch.in/process.php")
#         print(driver.title)
#         search = driver.find_element(By.ID,"gst")
#         search.send_keys(gstkey)
#     	#search.send_keys(Keys.RETURN)
#         link = driver.find_element(By.NAME,'submit')
#         link.click()
#         main = driver.find_element(By.CLASS_NAME,"table")
#         print(main.text)
#         value = main.text
#         return Response(value)
#         driver.quit()

########################Post part begins####################################

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

########################Comment part begins####################################

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

########################Category part begins####################################

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

########################Like part begins####################################

class LikePost_view(generics.ListCreateAPIView):
    queryset = Post_Like.objects.all()
    serializer_class = PostLikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        current_user =  self.request.user
        group_post = request.data.get('group_post')
        liked = Post_Like.objects.filter(Q(like_user=current_user) & Q(group_post_id=group_post) ).values_list("id",flat=True)
        if not liked :
            like = Post_Like.objects.create(like_user=current_user,group_post_id=group_post)
        else:
            like = Post_Like.objects.filter(like_user=current_user,group_post_id=group_post).first()

        serializer = PostLikeSerializer(like,context={'request':self.request})
        return Response(serializer.data)

class LikePost_destroy_view(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post_Like.objects.all()
    serializer_class = PostLikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def destroy(self, request, pk=None):
        like_post = Post_Like.objects.get(id=pk)
        like_post.delete()
        response = {'message': 'notification also deleted'}
        return Response(response)



