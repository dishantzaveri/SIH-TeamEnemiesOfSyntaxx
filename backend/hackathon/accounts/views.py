from django.shortcuts import render

from django.contrib.auth import authenticate,login

from rest_framework.authtoken.models import Token
from rest_framework import status,permissions,viewsets

from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import action,api_view
from rest_framework import generics

from django.contrib.auth import get_user_model

User = get_user_model()

# Create your views here.
class MentorRegisterAPI(GenericAPIView):
	
	serializer_class = MentorRegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		if not user.is_active:
			user.is_active = True
			user.save()
		token = Token.objects.create(user=user)
		
		return Response({'token' : token.key,'email' : user.email},status = status.HTTP_200_OK)

class EntrepreneurRegisterAPI(GenericAPIView):
	
	serializer_class = EntrepreneurRegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		if not user.is_active:
			user.is_active = True
			user.save()
		token = Token.objects.create(user=user)
		
		return Response({'token' : token.key,'email' : user.email, 'name' : user.name},status = status.HTTP_200_OK)

class LoginAPI(GenericAPIView):
	permission_classes=[permissions.AllowAny]
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		email = request.data.get('email',None)
		password = request.data.get('password',None)
		user = authenticate(email = email, password = password)
		if user :
			login(request,user)
			serializer = self.serializer_class(user)
			token = Token.objects.get(user=user)
			return Response({'token' : token.key,'email' : user.email,'name' : user.name, 'is_entrepreneur': user.is_entrepreneur, 'is_mentor': user.is_mentor},status = status.HTTP_200_OK)
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)

class StartupDetails(viewsets.ModelViewSet):
	queryset = Startup.objects.all()
	serializer_class = StartupSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Startup.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class WorkExperienceDetails(viewsets.ModelViewSet):
	queryset = WorkExperience.objects.all()
	serializer_class = WorkExperienceSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return WorkExperience.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class EducationDetails(viewsets.ModelViewSet):
	queryset = Education.objects.all()
	serializer_class = EducationSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Education.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class MentorProfileViewSet(viewsets.ModelViewSet):
	queryset = MentorProfile.objects.all()
	serializer_class = MentorProfileSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get_queryset(self):
		return MentorProfile.objects.all()

class EntrepreneurProfileViewSet(viewsets.ModelViewSet):
	queryset = EntrepreneurProfile.objects.all()
	serializer_class = EntrepreneurProfileSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get_queryset(self):
		return EntrepreneurProfile.objects.all()