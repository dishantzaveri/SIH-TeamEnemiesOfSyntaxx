from django.urls import path,include
from .views import GSTverifyApi
from . import views

urlpatterns = [
	path('gstverify', GSTverifyApi.as_view(), name='gstverify'),
]