from django.core import serializers
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from categories.models import Category


@api_view()
def categories(request):
    all_categories = Category.objects.all()
    return Response(
        {
            "ok": True,
            "categories": all_categories,
        }
    )
