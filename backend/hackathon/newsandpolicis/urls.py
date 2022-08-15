from django.urls import path,include
from . import views
urlpatterns = [
	path('newsapi/',views.newsapi.as_view(),name='newsapi'),
	path('scheme/', views.SchemeList.as_view()),
    path('scheme/<int:pk>/', views.SchemeDetail.as_view()),
]