from django.shortcuts import render

from django.contrib.auth import authenticate,login

from rest_framework.authtoken.models import Token
from rest_framework import status,permissions,viewsets

from testapp import custom_permissions

from .models import *
from .serializers import *

from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import action,api_view
from rest_framework import generics

from django.contrib.auth import get_user_model

import requests, datetime
from hackathon import settings

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
		
		return Response({'token' : token.key,'email' : user.email, 'name' : user.name},status = status.HTTP_200_OK)

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

class StartupsList(GenericAPIView):
	serializer_class = StartupSerializer

	permission_classes = [permissions.IsAuthenticated]

	def get(self,request):
		startups = Startup.objects.all()
		serializer = StartupSerializer(startups, many=True)
		return Response(serializer.data)

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
		return MentorProfile.objects.get(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class MentorsList(GenericAPIView):
	serializer_class = MentorProfileSerializer

	permission_classes = [permissions.IsAuthenticated]

	def get(self,request):
		mentors = MentorProfile.objects.all()
		serializer = MentorProfileSerializer(mentors, many=True)
		return Response(serializer.data)

class EntrepreneurProfileViewSet(viewsets.ModelViewSet):
	queryset = EntrepreneurProfile.objects.all()
	serializer_class = EntrepreneurProfileSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get_queryset(self):
		return EntrepreneurProfile.objects.get(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)
	
	def get_serializer_context(self):
          """Adds request to the context of serializer"""
          return {"request": self.request}

class EntrepreneursList(GenericAPIView):
	serializer_class = EntrepreneurProfileSerializer

	permission_classes = [permissions.IsAuthenticated]

	def get(self,request):
		entrepreneurs = EntrepreneurProfile.objects.all()
		serializer = EntrepreneurProfileSerializer(entrepreneurs, many=True)
		return Response(serializer.data)

class GstVerification(APIView):
	def post(self,request):
		gstnumber = request.data['gstnumber']
		url = "https://gst-details2.p.rapidapi.com/Gstverifywebsvcv2/Gstverify"
		payload = f"clientid=111&txn_id=2254545&consent=Y&gstnumber={gstnumber}&method=gstvalidatev2"
		headers = {
		    "content-type": "application/x-www-form-urlencoded",
		    "X-RapidAPI-Key": settings.X_RapidAPI_Key,
		    "X-RapidAPI-Host": settings.X_RapidAPI_Host
		    }
		
		response = requests.request("POST", url, data=payload, headers=headers)
		if response is not None:
			print(response)
			response_dict = response.json()
			print(response_dict)
			trimmed_response = {}
			trimmed_response['gstin'] = gstnumber
			trimmed_response['is_verified'] = True
			trimmed_response['legalNameOfBusiness'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop('lgnm')
			trimmed_response['stateJurisdiction'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("stj")
			trimmed_response['taxpayerType'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("dty")
			trimmed_response['natureOfBusinessActivity'] = response_dict["Succeeded"]["Gst_Details"]["result"]['nba'].pop(0)
			trimmed_response['dateOfRegistration'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("rgdt")
			trimmed_response['constitutionOfBusiness'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("ctb")
			trimmed_response['principalPlaceOfBusinessAddress'] = response_dict["Succeeded"]["Gst_Details"]["result"]['pradr'].pop("adr")
			trimmed_response['gstnStatus'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("sts")
			trimmed_response['tradeName'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("tradeNam")
			trimmed_response['centerJurisdiction'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("ctj")
			trimmed_response['aadhaar_linked'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("adhrVFlag")
			serializer = StartupSerializer(data = trimmed_response)
			serializer.is_valid(raise_exception=True)
			serializer.save(user=self.request.user)
			return JsonResponse(serializer.data, safe=False,status = status.HTTP_200_OK)
		else:
			return JsonResponse(response,safe=False)

class ConnectMenteeView(GenericAPIView):
	queryset = Mentorship.objects.all()
	serializer_class = MentorshipSerializer
	permission_classes = [custom_permissions.IsMentorOrReadOnly]

	def get(self):
		return Mentorship.objects.all(mentor = self.request.user)
	
	def post(self,serializer):
		data = self.request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save(mentor = self.request.user, is_active=True)
		obj, created = Coins.objects.get_or_create(user=self.request.user,coins=49)
		if not created:
			if obj.coins == 0:
				days_since_modified = (datetime.date.today() - obj.date_modified).days
				if days_since_modified > 30:
					obj.coins = 49
					obj.date_modified = datetime.date.today()
				else:
					days_left = 30 - days_since_modified
					return Response(f"You have exhausted your limit of 30 requests. You can send more requests after {days_left} days.")
			else:
				obj.coins = obj.coins - 1
				obj.save()
		return Response(serializer.data,status = status.HTTP_200_OK)
	
	def patch(self, request, pk, *args, **kwargs):
		try:
			mentorship = Mentorship.objects.get(pk=pk)
		except Mentorship.DoesNotExist:
			content = {'detail': 'No such mentorship exists'}
			return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
		serializer = MentorshipSerializer(instance = mentorship, data=request.data, partial = True)
		if serializer.is_valid():
			serializer.save()
		return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)

class ConnectMentorView(GenericAPIView):
	queryset = Mentorship.objects.all()
	serializer_class = MentorshipSerializer
	permission_classes = [custom_permissions.IsEntrepreneurOrReadOnly]

	def get(self):
		return Mentorship.objects.all(mentor = self.request.user)
	
	def post(self,serializer):
		data = self.request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save(mentor = self.request.user, is_active=True)
		obj, created = Coins.objects.get_or_create(user=self.request.user,coins=29)
		if not created:
			if obj.coins == 0:
				days_since_modified = (datetime.date.today() - obj.date_modified).days
				if days_since_modified > 30:
					obj.coins = 29
					obj.date_modified = datetime.date.today()
				else:
					days_left = 30 - days_since_modified
					return Response(f"You have exhausted your limit of 30 requests. You can send more requests after {days_left} days.")
			else:
				obj.coins = obj.coins - 1
				obj.save()
		return Response(serializer.data,status = status.HTTP_200_OK)
	
	def patch(self, request, pk, *args, **kwargs):
		try:
			mentorship = Mentorship.objects.get(pk=pk)
		except Mentorship.DoesNotExist:
			content = {'detail': 'No such mentorship exists'}
			return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
		serializer = MentorshipSerializer(instance = mentorship, data=request.data, partial = True)
		if serializer.is_valid():
			serializer.save()
		return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)


