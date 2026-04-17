from django.http import JsonResponse
from .models import Task
from users.models import User
import json


# ADD TASK
def add_task(request):
    if request.method == "POST":
        data = json.loads(request.body)

        user = User.objects.get(id=data['user_id'])

        Task.objects.create(
            user=user,
            task_name=data['task_name']
        )

        return JsonResponse({"message": "Task Added"})


# GET TASKS
def get_tasks(request):
    user_id = request.GET.get('user_id')

    tasks = Task.objects.filter(user_id=user_id)

    data = []
    for t in tasks:
        data.append({
            "id": t.id,
            "task_name": t.task_name
        })

    return JsonResponse(data, safe=False)


# DELETE TASK
def delete_task(request):
    if request.method == "POST":
        data = json.loads(request.body)

        Task.objects.get(id=data['task_id']).delete()

        return JsonResponse({"message": "Task Deleted"})