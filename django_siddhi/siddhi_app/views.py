from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import PromptTemplate, UserSettings, ChatHistory
from .serializers import (
    PromptTemplateSerializer, UserSettingsSerializer, 
    ChatHistorySerializer, AIRequestSerializer
)
from .services import AIService
import uuid

class PromptTemplateViewSet(viewsets.ModelViewSet):
    serializer_class = PromptTemplateSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return PromptTemplate.objects.filter(user=self.request.user)
        return PromptTemplate.objects.none()
    
    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)

class UserSettingsViewSet(viewsets.ModelViewSet):
    serializer_class = UserSettingsSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return UserSettings.objects.filter(user=self.request.user)
        return UserSettings.objects.none()
    
    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)

class ChatHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = ChatHistorySerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            session_id = self.request.query_params.get('session_id')
            queryset = ChatHistory.objects.filter(user=self.request.user)
            if session_id:
                queryset = queryset.filter(session_id=session_id)
            return queryset
        return ChatHistory.objects.none()
    
    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)

@api_view(['POST'])
def call_ai_api(request):
    """Handle AI API calls"""
    serializer = AIRequestSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    data = serializer.validated_data
    prompt = data.get('prompt', '')
    selected_text = data.get('selected_text', '')
    override_model = data.get('override_model')
    override_provider = data.get('override_provider')
    
    # Get user settings if authenticated
    user_settings = None
    provider = override_provider or 'groq'
    model = override_model or 'llama-3.1-70b-versatile'
    
    if request.user.is_authenticated:
        try:
            user_settings = UserSettings.objects.get(user=request.user)
            if not override_provider:
                provider = user_settings.llm_provider
            if not override_model:
                model = user_settings.llm_model
        except UserSettings.DoesNotExist:
            pass
    
    # Call AI service
    result = AIService.call_ai(
        system_prompt=prompt,
        message=selected_text,
        provider=provider,
        model=model,
        user_settings=user_settings
    )
    
    if 'error' in result:
        return Response({'errorMessage': result['error']}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'data': result['data']})

@api_view(['POST'])
def chat_message(request):
    """Handle chat messages"""
    session_id = request.data.get('session_id', str(uuid.uuid4()))
    user_message = request.data.get('message', '')
    selected_text = request.data.get('selected_text', '')
    custom_prompt = request.data.get('custom_prompt', '')
    
    if not user_message and not custom_prompt:
        return Response({'error': 'Message or custom_prompt required'}, 
                       status=status.HTTP_400_BAD_REQUEST)
    
    # Get conversation history
    conversation_context = f"Original text being discussed:\n{selected_text}\n\n"
    
    if request.user.is_authenticated:
        history = ChatHistory.objects.filter(
            user=request.user, 
            session_id=session_id
        ).order_by('created_at')
        
        for msg in history:
            role = 'User' if msg.role == 'user' else 'Assistant'
            conversation_context += f"{role}: {msg.content}\n\n"
    
    # Prepare prompt
    if custom_prompt:
        system_prompt = custom_prompt
        message = selected_text
    else:
        system_prompt = "You are having a helpful conversation about the text. Continue the conversation naturally based on the user's question. Be concise and helpful."
        message = conversation_context + f"User: {user_message}"
    
    # Get user settings
    user_settings = None
    provider = 'groq'
    model = 'llama-3.1-70b-versatile'
    
    if request.user.is_authenticated:
        try:
            user_settings = UserSettings.objects.get(user=request.user)
            provider = user_settings.llm_provider
            model = user_settings.llm_model
        except UserSettings.DoesNotExist:
            pass
    
    # Call AI
    result = AIService.call_ai(
        system_prompt=system_prompt,
        message=message,
        provider=provider,
        model=model,
        user_settings=user_settings
    )
    
    if 'error' in result:
        return Response({'errorMessage': result['error']}, status=status.HTTP_400_BAD_REQUEST)
    
    # Save to history if authenticated
    if request.user.is_authenticated and user_message:
        ChatHistory.objects.create(
            user=request.user,
            session_id=session_id,
            role='user',
            content=user_message,
            selected_text=selected_text
        )
        
        ChatHistory.objects.create(
            user=request.user,
            session_id=session_id,
            role='assistant',
            content=result['data']
        )
    
    return Response({
        'data': result['data'],
        'session_id': session_id
    })

# Template views
def index(request):
    """Main page"""
    return render(request, 'index.html')

def settings_page(request):
    """Settings page"""
    return render(request, 'settings.html')

def chat_page(request):
    """Chat interface page"""
    return render(request, 'chat.html')
