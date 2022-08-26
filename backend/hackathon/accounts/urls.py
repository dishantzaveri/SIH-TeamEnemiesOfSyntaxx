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
    path('gstverify/',views.GstVerification.as_view(), name = 'Gst Verify'),
    path('cinverify/',views.CINVerification.as_view(), name = 'CIN Verify'),
    path('panverify/',views.PANVerification.as_view(), name = 'PAN Verify'),
    path('patentverify/',views.PatentVerification.as_view(), name = 'Patent Verify'),
    path('mentors_list/',views.MentorsList.as_view(), name = 'Mentors'),
    path('search_mentors/',views.ProfileSearch.as_view(), name = 'Search Mentors'),
    path('mentors_location/',views.MentorsLocationList.as_view(), name = 'Mentors Location'),
    path('entrepreneurs_list/',views.EntrepreneursList.as_view(), name = 'Entrepreneurs'),
    path('startups_list/',views.StartupsList.as_view(), name = 'Startupss'),
    path('connect_mentee/',views.ConnectMenteeView.as_view(), name = 'Connect Mentee'),
    path('connect_mentor/',views.ConnectMentorView.as_view(), name = 'Connect Mentor'),
    path('rating/',views.Rating.as_view(), name = 'Rating'),
    path('recommend/',views.getRating.as_view(),name='getRating'),
    path('peopleyoumayknowformentee/',views.peopleyoumayknowformentee.as_view(),name='peopleyoumayknow'),
    path('peopleyoumayknowformentor/',views.peopleyoumayknowformentor.as_view(),name='peopleyoumayknowformentor'),
    path('Searchstartup/',views.Searchstartup.as_view(),name='Searchstartup'),
    path('prototypeview/',views.prototypeview.as_view(),name='prototypeview'),
    path('PrototypeDetail/',views.PrototypeDetail.as_view(),name='PrototypeDetail'),
    

]