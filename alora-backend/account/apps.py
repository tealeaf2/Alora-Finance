from django.apps import AppConfig
# from . import signals

class AccountConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "account"
    
    def ready(self):
        import account.signals
        # from account import signals

# AccountConfigrest_framework