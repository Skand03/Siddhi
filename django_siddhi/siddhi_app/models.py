from django.db import models
from django.contrib.auth.models import User

class PromptTemplate(models.Model):
    """Store custom prompt templates"""
    FUNCTION_TYPES = [
        ('ai_response', 'AI Response'),
        ('ai_sidebar', 'AI Sidebar'),
        ('voice_call', 'Voice Call'),
    ]
    
    CONTEXT_TYPES = [
        ('selection', 'Text Selection'),
        ('page', 'Full Page'),
        ('all', 'All Contexts'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='prompts')
    title = models.CharField(max_length=200)
    prompt_text = models.TextField()
    function_type = models.CharField(max_length=50, choices=FUNCTION_TYPES, default='ai_response')
    context_type = models.CharField(max_length=50, choices=CONTEXT_TYPES, default='selection')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

class UserSettings(models.Model):
    """Store user-specific settings"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='settings')
    llm_provider = models.CharField(max_length=50, default='groq')
    llm_model = models.CharField(max_length=100, default='llama-3.1-70b-versatile')
    openai_api_key = models.CharField(max_length=200, blank=True)
    groq_api_key = models.CharField(max_length=200, blank=True)
    together_api_key = models.CharField(max_length=200, blank=True)
    gemini_api_key = models.CharField(max_length=200, blank=True)
    custom_endpoint = models.URLField(blank=True)
    debug_mode = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username}'s settings"

class ChatHistory(models.Model):
    """Store chat conversations"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chats')
    session_id = models.CharField(max_length=100)
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('assistant', 'Assistant')])
    content = models.TextField()
    selected_text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_at']
    
    def __str__(self):
        return f"{self.role}: {self.content[:50]}"
