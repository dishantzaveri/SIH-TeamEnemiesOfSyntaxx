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
import os
from . import custom_permissions
from .Utils import Util

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

    def retrieve(self,request,pk=None):
        like = Comment.objects.filter(post=pk)
        data = CommentSerializer(like,many=True)
        return Response(data.data)

    
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

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class LikePost_destroy_view(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post_Like.objects.all()
    serializer_class = PostLikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self,request,pk=None):
        like = Post_Like.objects.filter(group_post=pk)
        data = PostLikeSerializer(like,many=True)
        return Response(data.data)


class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [custom_permissions.IsMentorOrReadOnly]

    def get_queryset(self):
        return Session.objects.all()

    def perform_create(self,serializer):
        serializer.save(organiser = self.request.user)
        
    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

class SessionRegisterView(generics.GenericAPIView):
    queryset = Attendee.objects.all()
    serializer_class = AttendeeSerializer
    permission_classes = [custom_permissions.IsEntrepreneurOrReadOnly]

    def get_queryset(self):
        return Attendee.objects.all()

    def post(self, request, format=None):
        request.data._mutable = True
        request.data['user'] = self.request.user.email
        request.data_mutable = False
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            session_obj = Session.objects.get(id = request.data['session'])

            if session_obj.meet_link:
                meet_link = session_obj.meet_link
                user_name = self.request.user
                data = {'email_body': f'Hi {user_name}, you have been successfully registered for the event. \nUse this link to join the meeting: {meet_link}.', 'subject':'Successfully Registered!', 'to' : self.request.user.email}
                Util.send_email(data)
            return Response({'Success':'Your have been successfully registered,please check your mail for meet link in case of an online event.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)