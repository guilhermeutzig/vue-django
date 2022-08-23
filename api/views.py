import pdb
from rest_framework.response import Response
from rest_framework.decorators import api_view
from todo.models import Item
from .serializers import ItemSerializer

def getAllItems():
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return serializer.data

@api_view(['GET'])
def getData(request):
    return Response(getAllItems())

@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        data = {}
        data['items'] = getAllItems()
        data['success'] = 'Added item successfully'
        return Response(data=data)
    
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def editItem(request, id): 
    try:
        item = Item.objects.get(id=id)
    except Item.DoesNotExist:
        return Response(status=404)

    # This condition removes "title" requirement 
    # when checking/unchecking on Frontend
    payload = request.data
    if not hasattr(payload, 'title'):
        payload['title'] = item.title

    serializer = ItemSerializer(item, data=payload)
    data = {}
    if serializer.is_valid():
        serializer.save()
        data['items'] = getAllItems()
        data['success'] = 'Updated successfully'
        return Response(data=data)

    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deleteItem(request, id): 
    try:
        item = Item.objects.get(id=id)
    except Item.DoesNotExist:
        return Response(status=404)

    operation = item.delete()
    data = {}
    if operation:
        data['items'] = getAllItems()
        data['success'] = f'Deleted item with the id "{id}" successfully'
    else:
        data['failure'] = 'Failed to delete item'
    return Response(data=data)
