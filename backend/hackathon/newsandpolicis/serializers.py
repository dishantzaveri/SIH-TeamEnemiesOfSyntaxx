from rest_framework import serializers
from .models import *
from accounts.models import User

class SchemeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Scheme
		fields = '__all__'
