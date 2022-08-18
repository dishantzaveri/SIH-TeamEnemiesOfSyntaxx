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

import requests
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
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class EntrepreneurProfileViewSet(viewsets.ModelViewSet):
	queryset = EntrepreneurProfile.objects.all()
	serializer_class = EntrepreneurProfileSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get_queryset(self):
		return EntrepreneurProfile.objects.all()
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)
	
	def get_serializer_context(self):
          """Adds request to the context of serializer"""
          return {"request": self.request}

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
		# response_dict["Succeeded"]["Gst_Details"]["result"]['legalNameOfBusiness']             = response_dict["Succeeded"]["Gst_Details"]["result"].pop('lgnm')
		# response_dict["Succeeded"]["Gst_Details"]["result"]['stateJurisdiction']               = response_dict["Succeeded"]["Gst_Details"]["result"].pop("stj")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['taxpayerType']                    = response_dict["Succeeded"]["Gst_Details"]["result"].pop("dty")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['natureOfBusinessActivity']        = response_dict["Succeeded"]["Gst_Details"]["result"].pop("nba")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['dateOfRegistration']              = response_dict["Succeeded"]["Gst_Details"]["result"].pop("rgdt")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['constitutionOfBusiness']          = response_dict["Succeeded"]["Gst_Details"]["result"].pop("ctb")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['principalPlaceOfBusinessAddress']            = response_dict["Succeeded"]["Gst_Details"]["result"].pop("pradr")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['principalPlaceOfBusinessAddress']['address'] = response_dict["Succeeded"]["Gst_Details"]["result"]['principalPlaceOfBusinessAddress'].pop("adr")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['gstnStatus'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("sts")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['tradeName'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("tradeNam")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['centerJurisdiction'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("ctj")
		# response_dict["Succeeded"]["Gst_Details"]["result"]['aadhaar_linked'] = response_dict["Succeeded"]["Gst_Details"]["result"].pop("adhrVFlag")
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
			print(trimmed_response)
			serializer = StartupSerializer(data = trimmed_response)
			serializer.is_valid(raise_exception=True)
			serializer.save(user=self.request.user)
			return JsonResponse(serializer.data, safe=False,status = status.HTTP_200_OK)
		else:
			return JsonResponse(response,safe=False)

class ConnectMenteeViewSet(viewsets.ModelViewSet):
	queryset = Mentorship.objects.all()
	serializer_class = MentorshipSerializer
	permission_classes = [custom_permissions.IsMentorOrReadOnly]

	def get_queryset(self):
		return Mentorship.objects.all(mentor = self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(mentor = self.request.user, is_active=True)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class ConnectMentorViewSet(viewsets.ModelViewSet):
	queryset = Mentorship.objects.all()
	serializer_class = MentorshipSerializer
	permission_classes = [custom_permissions.IsEntrepreneurOrReadOnly]

	def get_queryset(self):
		return Mentorship.objects.all(entrepreneur = self.request.user)
	
	def perform_create(self,serializer):

		serializer.save(entrepreneur = self.request.user, is_active=True)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)


