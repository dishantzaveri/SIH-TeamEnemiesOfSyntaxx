# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from django.http import JsonResponse
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By
# from hackathon.settings import BASE_DIR
# import os

# options = webdriver.ChromeOptions()
# options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
# chrome_driver_binary = os.path.join(BASE_DIR, "chromedriver")
# driver = webdriver.Chrome(chrome_driver_binary, chrome_options=options)

# #driver = webdriver.Chrome(os.path.join(BASE_DIR, "chromedriver"))
# # Create your views here.
# class GSTverifyApi(APIView):
#     def post(self, request, format=None):
#         gstkey=request.POST.get("gstkey")
#         driver.get("https://www.gstsearch.in/process.php")
#         print(driver.title)
#         search = driver.find_element(By.ID,"gst")
#         search.send_keys(gstkey)
#     	#search.send_keys(Keys.RETURN)
#         link = driver.find_element(By.NAME,'submit')
#         link.click()
#         main = driver.find_element(By.CLASS_NAME,"table")
#         print(main.text)
#         value = main.text
#         return Response(value)
#         driver.quit()