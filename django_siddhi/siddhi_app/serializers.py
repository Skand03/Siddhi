from rest_framework import serializers
from .models import PromptTemplate, UserSettings, ChatHistory

class PromptTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PromptTemplate
        fields = ['id', 'title', 'prompt_text', 'function_type', 'context_type', 
                  'is_active', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = ['llm_provider', 'llm_model', 'openai_api_key', 'groq_api_key',
                  'together_api_key', 'gemini_api_key', 'custom_endpoint', 'debug_mode']
        extra_kwargs = {
            'openai_api_key': {'write_only': True},
            'groq_api_key': {'write_only': True},
            'together_api_key': {'write_only': True},
            'gemini_api_key': {'write_only': True},
        }

class ChatHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatHistory
        fields = ['id', 'session_id', 'role', 'content', 'selected_text', 'created_at']
        read_only_fields = ['created_at']

class AIRequestSerializer(serializers.Serializer):
    prompt = serializers.CharField()
    selected_text = serializers.CharField(allow_blank=True, required=False)
    override_model = serializers.CharField(required=False)
    override_provider = serializers.CharField(required=False)
