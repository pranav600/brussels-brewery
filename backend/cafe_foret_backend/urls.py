from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.shortcuts import render

def welcome_view(request):
    context = {
        "status": "online",
        "message": "Welcome to the Cafe Forêt API!",
        "version": "1.0.0"
    }
    accept_header = request.META.get('HTTP_ACCEPT', '')
    if 'text/html' in accept_header:
        return render(request, 'welcome.html', context)
    return JsonResponse(context)

urlpatterns = [
    path('', welcome_view, name='welcome'),
    path('admin/', admin.site.urls),
    path('api/', include('bookings.urls')),
]

