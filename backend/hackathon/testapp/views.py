from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from hackathon.settings import BASE_DIR
driver = webdriver.Chrome("E:/yash programming/Sih Hackathon/djangoproject/hackathon/chromedriver.exe")
# Create your views here.
class GSTverifyApi(APIView):
    def post(self, request, format=None):
    	gstkey=request.POST.get("gstkey")
    	driver.get("https://www.gstsearch.in/process.php")
    	print(driver.title)
    	search = driver.find_element(By.ID,"gst")
    	search.send_keys(gstkey)
    	#search.send_keys(Keys.RETURN)
    	link = driver.find_element(By.NAME,'submit')
    	link.click()
    	main = driver.find_element(By.CLASS_NAME,"table")
    	print(main.text)
    	value = main.text
    	return Response(value)
    	driver.quit()
    	