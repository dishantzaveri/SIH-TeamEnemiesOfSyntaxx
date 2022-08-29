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
    path('Top25Fundedcompanybargraphapi/',views.Top25Fundedcompanybargraphapi.as_view()),
    path('statefundedcompanycountPIE/',views.statefundedcompanycountPIE.as_view()),
    path('latitudelongitueAPI/',views.latitudelongitueAPI.as_view()),
    path('companycountpermonthBARAPI/',views.companycountpermonthBARAPI.as_view()),
    path('monthwisefundingPIE/',views.monthwisefundingPIE.as_view()),
    path('stagesectormixPIE/',views.stagesectormixPIE.as_view()),
    path('Fundingperregionbargraphapi/',views.Fundingperregionbargraphapi.as_view())


    

]