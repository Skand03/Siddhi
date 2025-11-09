from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'prompts', views.PromptTemplateViewSet, basename='prompt')
router.register(r'settings', views.UserSettingsViewSet, basename='settings')
router.register(r'chat-history', views.ChatHistoryViewSet, basename='chat-history')

urlpatterns = [
    # Web pages
    path('', views.index, name='index'),
    path('settings/', views.settings_page, name='settings'),
    path('chat/', views.chat_page, name='chat'),
    
    # API endpoints
    path('api/', include(router.urls)),
    path('api/call-ai/', views.call_ai_api, name='call-ai'),
    path('api/chat/', views.chat_message, name='chat-message'),
]
