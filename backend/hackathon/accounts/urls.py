from django.urls import path
from . import views
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'startup', views.StartupDetails)
router.register(r'experience', views.WorkExperienceDetails)
router.register(r'education', views.EducationDetails)
router.register(r'mentor', views.MentorProfileViewSet)
router.register(r'entrepreneur', views.EntrepreneurProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('mentor_register/', views.MentorRegisterAPI.as_view(), name = 'Mentor Registration'),
    path('entrepreneur_register/', views.EntrepreneurRegisterAPI.as_view(), name = 'Entrepreneur Registration'),
    path('login/', views.LoginAPI.as_view(), name = 'Login'),
    path('mentors/',views.MentorsList.as_view(),name= 'Mentors'),
    path('entrepreneurs/',views.EntrepreneursList.as_view(),name= 'Entrepreneurs'),
]