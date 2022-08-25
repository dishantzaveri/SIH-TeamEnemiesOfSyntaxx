from rest_framework import serializers
from .models import *
from accounts.models import User,WorkExperience
from accounts.serializers import StartupSerializer

class SchemeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Scheme
		fields = '__all__'

class FundingSerializer(serializers.ModelSerializer):
	startup_details = StartupSerializer(source='startup',read_only=True)
	class Meta:
		model = Funding
		fields = '__all__'

# class CollectedAmount(serializers.ModelSerializer):

# 	class Meta:
# 		model = ProvideFund
# 		fields = '__all__'

class RecomendationSeizlizer(serializers.ModelSerializer):
	class Meta:
		model = Recomendation
		fields = '__all__'