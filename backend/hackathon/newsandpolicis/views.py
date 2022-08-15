from django.shortcuts import render
from newsapi import NewsApiClient
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.generics import GenericAPIView
# Create your views here.
from .models import *
from .serializers import *
from django.db.models import Q
from rest_framework import status,permissions,viewsets
class newsapi(APIView):
	def get(self, request):
		newsApi = NewsApiClient(api_key='8732a8a183354821b6f18b067ecd84a9')
		headLines = newsApi.get_top_headlines(category='business',country='in')
		articles = headLines['articles']
		headLines = []
		desc = []
		news = []
		img = []
		for i in range(len(articles)):
			article = articles[i]
			#headLines.append(headLines)
			desc.append(article['description'])
			news.append(article['title'])
			img.append(article['urlToImage'])
		mylist = zip(news, desc, img)
		data = {'data':mylist}
		return Response(data)
	def post(self, request):
# 		for government scheme and policy
# business entertainment general health science sports technology

		category = request.POST.get('category')
		newsApi = NewsApiClient(api_key='8732a8a183354821b6f18b067ecd84a9')
		headLines = newsApi.get_top_headlines(category=category,country='in')
		articles = headLines['articles']
		headLines = []
		desc = []
		news = []
		img = []
		for i in range(len(articles)):
			article = articles[i]
			#headLines.append(headLines)
			desc.append(article['description'])
			news.append(article['title'])
			img.append(article['urlToImage'])
		mylist = zip(news, desc, img)
		data = {'data':mylist}
		return Response(data)

class SchemeList(generics.ListCreateAPIView):
    queryset = Scheme.objects.all()
    serializer_class = SchemeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

class SchemeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scheme.objects.all()
    serializer_class = SchemeSerializer
    permission_classes = [permissions.IsAuthenticated]