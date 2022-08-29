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
        fields = ['id','legalNameOfBusiness','tradeName','is_verified','gstin', 'gstnStatus', 'dateOfRegistration', 'constitutionOfBusiness',
        'taxpayerType', 'natureOfBusinessActivity','principalPlaceOfBusinessAddress', 'stateJurisdiction', 'centerJurisdiction', 'aadhaar_linked','pitch_deck']


class MentorLocationSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(source = 'user.name',read_only=True)

    class Meta:
        model = MentorProfile
        fields = ['id', 'name', 'latitude', 'longitude']

# class RelatedFieldAlternative(serializers.PrimaryKeyRelatedField):
#     def __init__(self, **kwargs):
#         self.serializer = kwargs.pop('serializer', None)
#         if self.serializer is not None and not issubclass(self.serializer, serializers.Serializer):
#             raise TypeError('"serializer" is not a valid serializer class')

#         super().__init__(**kwargs)

#     def use_pk_only_optimization(self):
#         return False if self.serializer else True

#     def to_representation(self, instance):
#         if self.serializer:
#             return self.serializer(instance, context=self.context).data
#         return super().to_representation(instance)


class MentorshipSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    mentor = serializers.ReadOnlyField(source='mentor.email')
    #entrepreneur=serializers.SerializerMethodField()

    class Meta:
        model=Mentorship
        fields = ['id','mentor','entrepreneur','created_at','is_active','ended_at']
    
    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     response['mentor'] = MentorProfileSerializer(instance.mentor).data
    #     response['entrepreneur'] = EntrepreneurProfileSerializer(instance.entrepreneur).data
    #     return response
    
    # def get_entrepreneur(self,obj):
    #     request = self.context.get("request")
    #     entrepreneur_email = request.data.get('entrepreneur')
    #     entrepreneur = User.objects.get(email = entrepreneur_email)
    #     return entrepreneur
class myrating_serializer(serializers.ModelSerializer):
    class Meta:
        model = Myrating
        fields = ['mentor_profile','entrepreneur_profile','rating']

class CoinsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coins
        fields = '__all__'

class MentorProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(source='user.name',read_only=True)
    experience = WorkExperienceSerializer(source = 'user.experience', many=True, read_only=True)
    education = EducationSerializer(source = 'user.education', many=True, read_only=True)
    profile_pic = serializers.ImageField(source = 'user.profile_pic', read_only=True)
    # rating = serializers.SerializerMethodField(read_only=True)
    # coins = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = MentorProfile
        fields = ['id','name', 'expertise', 'experience', 'education', 'latitude', 'longitude','profile_pic']
    
    # def get_rating(self,obj):
    #     request = self.context.get("request")
    #     if request and hasattr(request, "user"):
    #         current_user = request.user
    #         print(current_user)
    #     # mentors_list = Mentorship.objects.filter(entrepreneur=current_entrepreneur).values_list('mentor')
    #     mentor_profile = MentorProfile.objects.get(user=current_user)
    #     myrating_objects = Myrating.objects.filter(mentor_profile = mentor_profile).values_list('rating')
    #     sum = 0
    #     for i in myrating_objects:
    #         sum = sum + i
    #     print(sum)
    #     return sum
    
    # def get_coins(self,obj):
    #     request = self.context.get("request")
    #     if request and hasattr(request, "user"):
    #         current_user = request.user
    #         print(current_user)
    #         coin_obj = Coins.objects.get(user = current_user)
    #     return coin_obj.coins

class EntrepreneurProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(source='user.name',read_only=True)
    startup = StartupSerializer(source = 'user.startup', many=True, read_only=True)
    mentor = serializers.SerializerMethodField(read_only=True)
    # mentor = RelatedFieldAlternative(queryset=MentorProfile.objects.all(), serializer=MentorProfileSerializer,required=False)
    experience = WorkExperienceSerializer(source = 'user.experience', many=True, read_only=True)
    education = EducationSerializer(source = 'user.education', many=True, read_only=True)
    profile_pic = serializers.ImageField(source = 'user.profile_pic', read_only=True)
    # coins = CoinsSerializer(source = 'user.coins', read_only=True)

    class Meta:
        model = EntrepreneurProfile
        fields = ['name','id','startup', 'mentor', 'experience', 'education', 'profile_pic']
    
    def get_mentor(self,obj):
        current_entrepreneur = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            current_entrepreneur = request.user
            print(current_entrepreneur)
        mentors_list = Mentorship.objects.filter(entrepreneur=current_entrepreneur).values_list('mentor')
        print(mentors_list)
        mentor_queryset = MentorProfile.objects.filter(user__in=mentors_list)
        print(mentor_queryset)
        return MentorProfileSerializer(mentor_queryset, many=True).data

class Prototypeserializer(serializers.ModelSerializer):
    class Meta:
        model = Prototype
        fields = '__all__'
