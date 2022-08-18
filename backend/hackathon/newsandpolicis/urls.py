from django.urls import path,include
from . import views
urlpatterns = [
	path('newsapi/',views.newsapi.as_view(),name='newsapi'),
	path('scheme/', views.SchemeList.as_view()),
    path('scheme/<int:pk>/', views.SchemeDetail.as_view()),
    path('funding/', views.FundingList.as_view()),
    path('funding/<int:pk>/', views.FundingDetail.as_view()),
	path('recomendation/', views.RecomendationList.as_view()),
    path('recomendation/<int:pk>/', views.RecomendationDetail.as_view()),


]