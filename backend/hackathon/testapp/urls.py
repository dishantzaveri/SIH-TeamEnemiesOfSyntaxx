from django.urls import path,include
#from .views import GSTverifyApi
from . import views

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('post-like/', views.LikePost_view.as_view()),
    path('post-like/<int:pk>/', views.LikePost_destroy_view.as_view())
]