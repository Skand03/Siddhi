import os
import requests
from typing import Dict, Any, Optional
from .models import UserSettings

class AIService:
    """Service to handle AI API calls"""
    
    ENDPOINTS = {
        'openai': 'https://api.openai.com/v1/chat/completions',
        'groq': 'https://api.groq.com/openai/v1/chat/completions',
        'together': 'https://api.together.xyz/v1/chat/completions',
        'gemini': 'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent',
    }
    
    @staticmethod
    def get_api_key(provider: str, user_settings: Optional[UserSettings] = None) -> str:
        """Get API key for the provider"""
        if user_settings:
            key_map = {
                'openai': user_settings.openai_api_key,
                'groq': user_settings.groq_api_key,
                'together': user_settings.together_api_key,
                'gemini': user_settings.gemini_api_key,
            }
            if key_map.get(provider):
                return key_map[provider]
        
        # Fallback to environment variables
        env_map = {
            'openai': 'OPENAI_API_KEY',
            'groq': 'GROQ_API_KEY',
            'together': 'TOGETHER_API_KEY',
            'gemini': 'GEMINI_API_KEY',
        }
        return os.getenv(env_map.get(provider, ''), '')
    
    @classmethod
    def call_ai(
        cls,
        system_prompt: str,
        message: str,
        provider: str = 'groq',
        model: str = 'llama-3.1-70b-versatile',
        user_settings: Optional[UserSettings] = None
    ) -> Dict[str, Any]:
        """Make AI API call"""
        try:
            api_key = cls.get_api_key(provider, user_settings)
            
            if not api_key:
                return {'error': f'No API key found for provider: {provider}'}
            
            if provider == 'gemini':
                return cls._call_gemini(system_prompt, message, model, api_key)
            else:
                return cls._call_openai_compatible(
                    system_prompt, message, provider, model, api_key
                )
        
        except Exception as e:
            return {'error': str(e)}
    
    @classmethod
    def _call_openai_compatible(
        cls, system_prompt: str, message: str, provider: str, model: str, api_key: str
    ) -> Dict[str, Any]:
        """Call OpenAI-compatible APIs"""
        endpoint = cls.ENDPOINTS.get(provider)
        
        if not endpoint:
            return {'error': f'Unknown provider: {provider}'}
        
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }
        
        payload = {
            'model': model,
            'messages': [
                {'role': 'system', 'content': system_prompt},
                {'role': 'user', 'content': message}
            ],
            'stream': False
        }
        
        response = requests.post(endpoint, json=payload, headers=headers, timeout=60)
        
        if not response.ok:
            return {'error': f'API Error ({response.status_code}): {response.text}'}
        
        data = response.json()
        
        if 'choices' not in data or not data['choices']:
            return {'error': 'Unexpected API response structure'}
        
        return {'data': data['choices'][0]['message']['content']}
    
    @classmethod
    def _call_gemini(
        cls, system_prompt: str, message: str, model: str, api_key: str
    ) -> Dict[str, Any]:
        """Call Gemini API"""
        endpoint = cls.ENDPOINTS['gemini'].format(model=model)
        url = f"{endpoint}?key={api_key}"
        
        headers = {'Content-Type': 'application/json'}
        
        payload = {
            'contents': [{
                'parts': [{
                    'text': f"{system_prompt}\n\n{message}"
                }]
            }]
        }
        
        response = requests.post(url, json=payload, headers=headers, timeout=60)
        
        if not response.ok:
            return {'error': f'API Error ({response.status_code}): {response.text}'}
        
        data = response.json()
        
        if 'candidates' not in data or not data['candidates']:
            return {'error': 'Unexpected API response structure'}
        
        return {'data': data['candidates'][0]['content']['parts'][0]['text']}
