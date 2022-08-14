from rest_framework import serializers
from .models import *
import re
from django.contrib.auth import get_user_model
User = get_user_model()

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class MentorRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'dob', 'twitter', 'linkedin', 'interests','about', 'profile_pic','is_entrepreneur', 'is_mentor']

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        return attrs

    # To create a new user
    def create(self, validated_data):
        validated_data['is_active'] = True
        validated_data['is_mentor'] = True
        return User.objects.create_user(**validated_data)    

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    
    class Meta:
        model = User
        fields = ['email','password','name','is_entrepreneur', 'is_mentor']

class EntrepreneurRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'dob', 'twitter', 'linkedin', 'interests','about', 'profile_pic','is_entrepreneur', 'is_mentor']

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        return attrs

    # To create an entrepreneur
    def create(self, validated_data):
        validated_data['is_active'] = True
        validated_data['is_entrepreneur'] = True
        return User.objects.create_user(**validated_data)

class WorkExperienceSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkExperience
        fields = ['id','job_title','company_name', 'location', 'industry', 'start_date', 'end_date', 'description']

class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education
        fields = ['id','institute','degree', 'study_field', 'start_date', 'end_date', 'grade', 'extracurriculars','description']

class StartupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Startup
        fields = ['id','legal_name','trade_name','is_verified','gstin', 'gstin_status', 'registration_date', 'business_constitution',
        'taxpayer_type', 'cancellation_date', 'business_activity_nature','office', 'recipient', 'warehouse', 'state_jurisdiction', 
        'state_code', 'center_jurisdiction', 'center_code', 'branch_no', 'branch_name', 'location', 'street', 'district', 'state', 'pincode']

class MentorProfileSerializer(serializers.ModelSerializer):
    experience = WorkExperienceSerializer(source = 'user.experience', many=True, read_only=True)
    education = EducationSerializer(source = 'user.education', many=True, read_only=True)

    class Meta:
        model = MentorProfile
        fields = ['user', 'expertise', 'experience', 'education']

class EntrepreneurProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(source='user.name')
    startup = StartupSerializer(source = 'user.startup', many=True, read_only=True)
    mentor = MentorProfileSerializer(many=True,read_only=True)
    experience = WorkExperienceSerializer(source = 'user.experience', many=True, read_only=True)
    education = EducationSerializer(source = 'user.education', many=True, read_only=True)

    class Meta:
        model = EntrepreneurProfile
        fields = ['user','name','id','startup', 'mentor', 'experience', 'education']

