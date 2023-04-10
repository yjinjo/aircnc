from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from rooms.models import Amenity
from rooms.serializers import AmenitySerializer


class Amenities(APIView):
    def get(self, request):
        all_amenities = Amenity.objects.all()
        serializer = AmenitySerializer(all_amenities, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AmenitySerializer(data=request.data)
        if serializer.is_valid():
            amenity = serializer.save()
            return Response(AmenitySerializer(amenity).data)
        else:
            return Response(serializer.errors)


class AmenityDetail(APIView):
    def get(self, request, pk):
        pass

    def post(self, request, pk):
        pass

    def delete(self, request, pk):
        pass
