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
import pandas as pd
import numpy as np
import json
from geopy.geocoders import Nominatim

import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent

geolocator = Nominatim(user_agent="kaggle_learn")
#url = 'https://drive.google.com/file/d/1lat5t_QBe-rbl97YopgXPmXMaeBMVOzE/view?usp=sharing'
csv_path = os.path.join(BASE_DIR,"newsandpolicis/Indian startups till 2022.csv")
df_full = pd.read_csv(csv_path)
df = df_full
junk_amount_index = []
df_digit_values = df['Amount ($)'].loc[(df['Amount ($)'] != 'Undisclosed') & (df['Amount ($)'] != 'undisclosed')].str.isdigit()
for index, data in df_digit_values.iteritems():
    if not data:
        junk_amount_index.append(index)
df = df.drop(junk_amount_index)
ud_amount_index = []
df_undisclosed_amount_companies = df.loc[(df['Amount ($)'] == 'Undisclosed') | (df['Amount ($)'] == 'undisclosed')]
for index in df_undisclosed_amount_companies.index:
    ud_amount_index.append(index)
df = df.drop(ud_amount_index)
df = df[df['Amount ($)'].notna()]
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
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class FundingList(generics.ListCreateAPIView):
    queryset = Funding.objects.all()
    serializer_class = FundingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save()

class FundingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Funding.objects.all()
    serializer_class = FundingSerializer
    #permission_classes = [permissions.IsAuthenticated]

class RecomendationList(generics.ListCreateAPIView):
    queryset = Recomendation.objects.all()
    serializer_class = RecomendationSeizlizer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

class RecomendationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recomendation.objects.all()
    serializer_class = RecomendationSeizlizer
    permission_classes = [permissions.IsAuthenticated]

class Top25Fundedcompanybargraphapi(APIView):
	def get(self,request):
		df_top_25_funded_companies = df.sort_values('Amount ($)', ascending=False).head(25)
		#df_top_25_funded_companies = df_top_25_funded_companies.drop([956])
		data = {'x':df_top_25_funded_companies['Company/Brand'].head(5),'y':df_top_25_funded_companies['Amount ($)'].head(5)}
		return Response(data)

class statefundedcompanycountPIE(APIView):
	def get(self, request):
		df_comp_count_per_city = df_full['Headquarters'].value_counts().rename_axis('city').to_frame('count').head(15)
		df_comp_count_per_city_10 = df_comp_count_per_city.head(10)
		data = {'percent':df_comp_count_per_city_10['count'],'labels':df_comp_count_per_city_10.index,'radius':2.5}
		return Response(data)

def my_geocoder(row):
    try:
        point = geolocator.geocode(row).point
        return pd.Series({'Latitude': point.latitude, 'Longitude': point.longitude})
        #return [point.latitude, point.longitude]
    except:
        return None
class latitudelongitueAPI(APIView):
	def get(self,request):
		df_top_city_10 = df_full['Headquarters'].value_counts().rename_axis('city').reset_index(name='count').head(10)
		df_top_city_10[['Latitude', 'Longitude']] = df_top_city_10.apply(lambda x: my_geocoder(x['city']), axis=1)
		data = {'city':df_top_city_10['city'],'Latitude':df_top_city_10['Latitude'],'Longitude':df_top_city_10['Longitude'],'count':df_top_city_10['count']}
		return Response(data)

class companycountpermonthBARAPI(APIView):
	def get(self,request):
		df_comp_count_per_month = df_full['Month'].value_counts().rename_axis('month').to_frame('count')
		x = [df_comp_count_per_month.index[8],df_comp_count_per_month.index[10],df_comp_count_per_month.index[6],df_comp_count_per_month.index[7],df_comp_count_per_month.index[11],df_comp_count_per_month.index[3],df_comp_count_per_month.index[1],df_comp_count_per_month.index[0],df_comp_count_per_month.index[4],df_comp_count_per_month.index[9],df_comp_count_per_month.index[5]]
		y = [df_comp_count_per_month['count'].iloc[8],df_comp_count_per_month['count'].iloc[10],df_comp_count_per_month['count'].iloc[6],df_comp_count_per_month['count'].iloc[7],df_comp_count_per_month['count'].iloc[11],df_comp_count_per_month['count'].iloc[3],df_comp_count_per_month['count'].iloc[1],df_comp_count_per_month['count'].iloc[0],df_comp_count_per_month['count'].iloc[4],df_comp_count_per_month['count'].iloc[9],df_comp_count_per_month['count'].iloc[5]]
		data = {'x':x,'y':y}
		return Response(data)

class monthwisefundingPIE(APIView):
	def get(self, request):
		df_comp_count_per_month = df_full['Month'].value_counts().rename_axis('month').to_frame('count')
		#df_comp_count_per_city_10 = df_comp_count_per_city.head(10)
		data = {'percent':df_comp_count_per_month['count'],'labels':df_comp_count_per_month.index,'radius':2.5}
		return Response(data)


class stagesectormixPIE(APIView):
	def get(self, request):
		df_comp_count_per_month = df['Sector'].value_counts().head(20).rename_axis('Sector').to_frame('count')
		df_stage_count = df['Stage'].value_counts().head(20).rename_axis('Stage').to_frame('count')

		data = {'percent_sector':df_comp_count_per_month['count'],'labels_sector':df_comp_count_per_month.index,'percent_stage':df_stage_count['count'],'labels_stage':df_stage_count.index}
		return Response(data)

class Fundingperregionbargraphapi(APIView):
	def get(self,request):
		funding_per_region= df.groupby(['Headquarters'])['Amount ($)'].sum().reset_index()
		funding_per_region = funding_per_region.sort_values('Amount ($)', ascending= False)
		funding_per_region = funding_per_region.head(20)
		#df_top_25_funded_companies = df_top_25_funded_companies.drop([956])
		x = [funding_per_region['Amount ($)'].iloc[2],funding_per_region['Amount ($)'].iloc[3],funding_per_region['Amount ($)'].iloc[9],funding_per_region['Amount ($)'].iloc[17],funding_per_region['Amount ($)'].iloc[19]]
		y = [funding_per_region['Headquarters'].iloc[2],funding_per_region['Headquarters'].iloc[3],funding_per_region['Headquarters'].iloc[9],funding_per_region['Headquarters'].iloc[17],funding_per_region['Headquarters'].iloc[19]]
		data = {'x':x,'y':y}
		return Response(data)
