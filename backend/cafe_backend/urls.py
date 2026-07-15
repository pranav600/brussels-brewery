from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def welcome_view(request):
    return JsonResponse({
        "status": "online",
        "message": "Welcome to the Cafe Forêt API!",
        "version": "1.0.0"
    })

urlpatterns = [
    path('', welcome_view, name='welcome'),
    path('admin/', admin.site.urls),
    path('api/', include('bookings.urls')),
]
