from django.urls import path,include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'session', views.SessionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('post-like/', views.LikePost_view.as_view()),
    path('post-like/<int:pk>/', views.LikePost_destroy_view.as_view()),
    path('session_register/', views.SessionRegisterView.as_view()),
]
