from rest_framework import serializers
from .models import Account
from rest_framework_simplejwt.tokens import RefreshToken


# converts user model into readable object
class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Account
        # fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

        fields = ['id', '_id', 'username', 'email', 'first_name', 'last_name', 'account_type', 'isAdmin', 'user_id']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_first_name(self, obj):
        return obj.first_name
        
    def get_last_name(self, obj):
        return obj.last_name
    
    def get_account_type(self, obj):
        return obj.account_type
    
    def get_user_id(self, obj):
        return obj.user_id

    # def get_name(self, obj):
    #     name = obj.first_name + " " + obj.last_name
    #     if name == '':
    #         name = obj.email

        return name
    

# serializer for if the user is authenticated
# returns an additional token 
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Account
        fields = ['id', '_id', 'username', 'email', 'first_name', 'last_name', 'isAdmin', 'user_id', 'account_type', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)