from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from django.dispatch import Signal

from .models import Account
from classroom.signals import create_fields_completed_for_user

from .serializer import UserSerializer, UserSerializerWithToken

# Create your views here.
# generate token
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
            data[key] = value

        return data

# return view of token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer 

# registers user
@api_view(['POST'])
def registerUser(request):
    # data is a query dictionary of what the post request receives (which then we put into the user object to create it)
    data = request.data
    
    try:
        user = Account.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            account_type=data['account_type'],

            username=data['email'],
            email=data['email'],
            password=make_password(data['password']),
        )
        if data.get('account_type') == 'S':
            print('sent')
            create_fields_completed_for_user(user=user)

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except KeyError:
        message = {'detail': 'Invalid request data'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    except IntegrityError as e:
        # Extract the specific integrity constraint violated
        constraint_name = e.args[0]
        if 'unique constraint' in constraint_name:
            message = {'detail': 'A user with this email already exists.'}
        else:
            message = {'detail': 'Integrity error: ' + constraint_name}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        message = {'detail': str(e)}
        return Response(message, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

# updates user info
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user 
    serializer = UserSerializerWithToken(user, many=False)
    
    data = request.data
    
    # print(request.account)
    
    # print("\n\nUSER: ")
    # print(user)
    # print(type(user))
 
    # print("\n\DATA: ")
    # print(data)
    

    user.first_name = data['first_name']
    user.last_name = data['last_name']

    user.username = data['email']
    user.email = data['email']
    
    # print("USER: ")
    # print(user)
    
    # print("\n\SERIALIZER: ")
    # print(serializer.data)

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)

    
# gets user data from database
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    # print('\n\nREQUEST: ')
    # print(request)

    
    user = request.user
    
    # print('\n\nUSER: ')
    # print(user)
    
    serializer = UserSerializer(user, many=False)
    
    # print("\n\nSERIALIZER: ")
    # print(serializer)
    return Response(serializer.data)

# RETURNS ALL USERS IN DB (must be admin)
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = Account.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)