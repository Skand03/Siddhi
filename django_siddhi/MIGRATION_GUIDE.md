# Migration Guide: Plasmo Extension → Django Web App

## Overview

This document explains how your Plasmo browser extension has been migrated to a Django web application.

## Architecture Changes

### Before (Plasmo Extension)
```
Browser Extension
├── Background Scripts (Chrome APIs)
├── Content Scripts (Page injection)
├── Popup UI (React)
├── Sidepanel (React)
└── Chrome Storage
```

### After (Django Web App)
```
Django Web Application
├── Backend (Django REST API)
├── Frontend (HTML/JS Templates)
├── Database (SQLite/PostgreSQL)
└── AI Services (Multi-provider)
```

## Feature Mapping

| Extension Feature | Django Equivalent | Status |
|------------------|-------------------|--------|
| Context Menu Items | Prompt Templates | ✅ Migrated |
| Right-click Actions | Web Form Actions | ✅ Migrated |
| Sidepanel Chat | Chat Page | ✅ Migrated |
| Options Page | Settings Page | ✅ Migrated |
| Chrome Storage | Database Models | ✅ Migrated |
| Background Messages | REST API | ✅ Migrated |
| AI API Calls | AIService Class | ✅ Migrated |
| Multi-provider Support | Maintained | ✅ Migrated |

## Key Differences

### 1. User Interaction

**Extension:**
- Right-click on selected text
- Context menu appears
- Action executes in background

**Django:**
- Visit web page
- Paste or type text
- Select action from dropdown
- Click button to process

### 2. Data Storage

**Extension:**
```javascript
// Chrome Storage API
await storage.set("contextMenuItems", items);
const items = await storage.get("contextMenuItems");
```

**Django:**
```python
# Django ORM
PromptTemplate.objects.create(user=user, title="...", prompt_text="...")
prompts = PromptTemplate.objects.filter(user=user)
```

### 3. AI API Calls

**Extension:**
```typescript
// background/messages/callOpenAIReturn.ts
const response = await callOpenAIReturn(prompt, selectedText);
```

**Django:**
```python
# siddhi_app/services.py
result = AIService.call_ai(
    system_prompt=prompt,
    message=selected_text,
    provider='groq',
    model='llama-3.1-70b-versatile'
)
```

### 4. Chat Interface

**Extension:**
- Sidepanel with React components
- Chrome messaging for communication
- Local state management

**Django:**
- Full-page chat interface
- REST API for messages
- Database-backed history

## Code Comparison

### Prompt Templates

**Extension (background/init.ts):**
```typescript
const contextMenuItems: IContextConfigItems[] = [
    {
        id: "grammarFixer",
        title: "❗Grammar Fixer",
        contexts: ["selection"],
        prompt: "Fix any grammar mistakes...",
        functionType: "callAI-copyClipboard",
    }
];
```

**Django (models.py):**
```python
class PromptTemplate(models.Model):
    title = models.CharField(max_length=200)
    prompt_text = models.TextField()
    function_type = models.CharField(max_length=50)
    context_type = models.CharField(max_length=50)
```

### AI Service

**Extension (lib/openAITypeCall.ts):**
```typescript
export async function callOpenAIReturn(
    systemPrompt: string,
    message: any,
    overrideModel?: string,
    overrideProvider?: string
): Promise<ApiResponse<any>>
```

**Django (services.py):**
```python
class AIService:
    @classmethod
    def call_ai(
        cls,
        system_prompt: str,
        message: str,
        provider: str = 'groq',
        model: str = 'llama-3.1-70b-versatile',
        user_settings: Optional[UserSettings] = None
    ) -> Dict[str, Any]
```

## What's New in Django Version

### 1. Database Models
- Persistent storage for prompts, settings, and chat history
- User authentication support
- Admin interface for management

### 2. REST API
- RESTful endpoints for all operations
- JSON request/response format
- Easy integration with other apps

### 3. Web Interface
- Responsive design with Tailwind CSS
- No browser extension required
- Works on any device with a browser

### 4. Admin Panel
- Django admin for managing data
- User management
- Prompt template management

## Migration Checklist

- [x] Core AI functionality
- [x] All prompt templates
- [x] Multi-provider support (OpenAI, Groq, Together, Gemini)
- [x] Chat interface with custom prompts
- [x] Settings management
- [x] Error handling
- [x] Session management
- [x] User interface (web-based)
- [x] API endpoints
- [x] Database models

## Not Migrated (Extension-Specific)

These features are specific to browser extensions and don't apply to web apps:

- ❌ Chrome context menus (replaced with web forms)
- ❌ Content script injection (not needed)
- ❌ Browser clipboard API (use copy buttons)
- ❌ Chrome identity/OAuth (use Django auth)
- ❌ Browser notifications (can add web notifications)

## Advantages of Django Version

1. **Cross-platform**: Works on any device with a browser
2. **No installation**: Just visit the URL
3. **Better data management**: Full database with relationships
4. **Scalability**: Can handle multiple users
5. **API access**: Easy integration with other services
6. **Admin interface**: Built-in management tools
7. **Deployment options**: Can deploy to any hosting service

## Next Steps

1. **Customize**: Modify templates and styles to match your brand
2. **Add authentication**: Implement user login/registration
3. **Deploy**: Host on Heroku, AWS, DigitalOcean, etc.
4. **Extend**: Add new features like file uploads, exports, etc.
5. **Mobile**: Create mobile-responsive views or native apps

## Questions?

Refer to:
- `README.md` for setup instructions
- Django documentation: https://docs.djangoproject.com/
- Original extension code for feature reference
