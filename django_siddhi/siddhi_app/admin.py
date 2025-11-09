from django.contrib import admin
from .models import PromptTemplate, UserSettings, ChatHistory

@admin.register(PromptTemplate)
class PromptTemplateAdmin(admin.ModelAdmin):
    list_display = ['title', 'user', 'function_type', 'context_type', 'is_active', 'created_at']
    list_filter = ['function_type', 'context_type', 'is_active']
    search_fields = ['title', 'prompt_text']

@admin.register(UserSettings)
class UserSettingsAdmin(admin.ModelAdmin):
    list_display = ['user', 'llm_provider', 'llm_model', 'debug_mode']
    list_filter = ['llm_provider', 'debug_mode']

@admin.register(ChatHistory)
class ChatHistoryAdmin(admin.ModelAdmin):
    list_display = ['user', 'session_id', 'role', 'created_at']
    list_filter = ['role', 'created_at']
    search_fields = ['content', 'session_id']
