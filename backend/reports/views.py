from django.http import JsonResponse
from .models import TaskStatus
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def update_status(request):
    if request.method == "POST":
        data = json.loads(request.body)

        TaskStatus.objects.create(
            user_id=data['user_id'],
            task_id=data['task_id'],
            date=data['date'],
            status=data['status']
        )

        return JsonResponse({"message": "Status Updated"})


@csrf_exempt
def get_report(request):
    user_id = request.GET.get('user_id')

    logs = TaskStatus.objects.filter(user_id=user_id)

    data = []
    for log in logs:
        data.append({
            "task": log.task.task_name,
            "date": log.date,
            "status": log.status
        })

    return JsonResponse(data, safe=False)