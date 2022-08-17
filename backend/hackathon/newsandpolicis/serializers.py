from rest_framework import serializers
from .models import *
from accounts.models import User,WorkExperience

class SchemeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Scheme
		fields = '__all__'

class FundingSerializer(serializers.ModelSerializer):
	class Meta:
		model = Funding
		fields = '__all__'

class RecomendationSeizlizer(serializers.ModelSerializer):
	class Meta:
		model = Recomendation
		fields = '__all__'