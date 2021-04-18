from rest_framework.views import APIView
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin
from rest_framework.response import Response

from .models import Routes
from .serializers import RoutesSerializer
import json


# Get route data Methods
class RoutesGetView(APIView):
    def get(self, request, id=None):
        if id:
            try:
                queryset = Routes.objects.get(id=id)
            except:
                return Response({'errors': 'This route data does not exist'})
            read_serializer = RoutesSerializer(queryset)
        else:
            queryset = Routes.objects.all()
            read_serializer = RoutesSerializer(queryset, many=True)
        return Response(read_serializer.data)


# Insert New route data Methods
class RoutesPostView(APIView):
    def post(self, request):
        # convert routes datatype from dict to string
        routes_json = json.dumps(request.data["routes"])
        request.data["routes"] = routes_json

        create_serializer = RoutesSerializer(data=request.data)
        if not create_serializer.is_valid():
            return Response(create_serializer.errors, status=400)

        routes_object = create_serializer.save()
        read_serializer = RoutesSerializer(routes_object)
        return Response(read_serializer.data, status=201)
