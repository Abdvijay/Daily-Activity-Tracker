from django.http import JsonResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def add_user(request):
    if request.method == "POST":
        data = json.loads(request.body)

        User.objects.create(
            username=data['username'],
            email=data['email'],
            phone=data['phone'],
            password=data['password']
        )

        return JsonResponse({"message": "User Registered"})


@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body)

        try:
            user = User.objects.get(
                username=data['username'],
                password=data['password']
            )

            return JsonResponse({
                "message": "Login Success",
                "username": user.username,
                "user_id": user.id
            })

        except User.DoesNotExist:
            return JsonResponse({"error": "Invalid Credentials"})