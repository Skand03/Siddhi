# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Home   │  │   Chat   │  │ Settings │  │  Admin   │   │
│  │   Page   │  │   Page   │  │   Page   │  │  Panel   │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
└───────┼─────────────┼─────────────┼─────────────┼──────────┘
        │             │             │             │
        │    HTTP/AJAX Requests     │             │
        │             │             │             │
┌───────▼─────────────▼─────────────▼─────────────▼──────────┐
│                     Django Web Server                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    URL Router                         │   │
│  │  / → index    /chat/ → chat    /api/* → API         │   │
│  └────────────────────┬─────────────────────────────────┘   │
│                       │                                      │
│  ┌────────────────────▼─────────────────────────────────┐   │
│  │                     Views Layer                       │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │ Template │  │   API    │  │    ViewSets      │  │   │
│  │  │  Views   │  │  Views   │  │  (REST API)      │  │   │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────────────┘  │   │
│  └───────┼─────────────┼─────────────┼────────────────┘   │
│          │             │             │                      │
│  ┌───────▼─────────────▼─────────────▼────────────────┐   │
│  │                  Services Layer                      │   │
│  │  ┌──────────────────────────────────────────────┐  │   │
│  │  │            AIService Class                    │  │   │
│  │  │  • call_ai()                                  │  │   │
│  │  │  • get_api_key()                              │  │   │
│  │  │  • _call_openai_compatible()                 │  │   │
│  │  │  • _call_gemini()                             │  │   │
│  │  └──────────────────┬───────────────────────────┘  │   │
│  └─────────────────────┼──────────────────────────────┘   │
│                        │                                    │
│  ┌─────────────────────▼──────────────────────────────┐   │
│  │                  Models Layer                       │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │   │
│  │  │PromptTemplate│  │UserSettings  │  │ChatHistory│ │   │
│  │  └──────┬───────┘  └──────┬───────┘  └────┬─────┘ │   │
│  └─────────┼──────────────────┼───────────────┼───────┘   │
└────────────┼──────────────────┼───────────────┼───────────┘
             │                  │               │
┌────────────▼──────────────────▼───────────────▼───────────┐
│                    SQLite Database                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   prompts    │  │   settings   │  │  chat_history│    │
│  │   table      │  │    table     │  │    table     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└────────────────────────────────────────────────────────────┘
             │                  │               │
             └──────────────────┼───────────────┘
                                │
┌───────────────────────────────▼────────────────────────────┐
│                    External AI APIs                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  OpenAI  │  │   Groq   │  │ Together │  │  Gemini  │  │
│  │    API   │  │   API    │  │   API    │  │   API    │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└────────────────────────────────────────────────────────────┘
```

## Request Flow

### 1. Text Processing Request

```
User Input (Home Page)
    ↓
JavaScript fetch() to /api/call-ai/
    ↓
Django URL Router → call_ai_api view
    ↓
AIRequestSerializer validates data
    ↓
Get UserSettings from database
    ↓
AIService.call_ai()
    ↓
Select provider (OpenAI/Groq/Together/Gemini)
    ↓
Make HTTP request to AI API
    ↓
Parse response
    ↓
Return JSON to frontend
    ↓
Display result to user
```

### 2. Chat Message Flow

```
User sends message (Chat Page)
    ↓
JavaScript fetch() to /api/chat/
    ↓
Django URL Router → chat_message view
    ↓
Get session_id and conversation history
    ↓
Build conversation context
    ↓
Get UserSettings from database
    ↓
AIService.call_ai()
    ↓
AI API processes request
    ↓
Save user message to ChatHistory
    ↓
Save AI response to ChatHistory
    ↓
Return response to frontend
    ↓
Display in chat interface
```

## Component Breakdown

### Frontend (Templates)

```
templates/
├── base.html           # Base template with navigation
├── index.html          # Home page with quick processing
├── chat.html           # Chat interface
└── settings.html       # Settings configuration
```

**Technologies:**
- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Fetch API for AJAX

### Backend (Django)

```
siddhi_app/
├── models.py           # Database models
├── views.py            # Request handlers
├── serializers.py      # API serialization
├── services.py         # Business logic
├── urls.py             # URL routing
└── admin.py            # Admin interface
```

**Technologies:**
- Django 5.0.1
- Django REST Framework
- Python 3.8+

### Database Schema

```sql
-- PromptTemplate
CREATE TABLE prompt_template (
    id INTEGER PRIMARY KEY,
    user_id INTEGER FOREIGN KEY,
    title VARCHAR(200),
    prompt_text TEXT,
    function_type VARCHAR(50),
    context_type VARCHAR(50),
    is_active BOOLEAN,
    created_at DATETIME,
    updated_at DATETIME
);

-- UserSettings
CREATE TABLE user_settings (
    id INTEGER PRIMARY KEY,
    user_id INTEGER FOREIGN KEY UNIQUE,
    llm_provider VARCHAR(50),
    llm_model VARCHAR(100),
    openai_api_key VARCHAR(200),
    groq_api_key VARCHAR(200),
    together_api_key VARCHAR(200),
    gemini_api_key VARCHAR(200),
    custom_endpoint VARCHAR(200),
    debug_mode BOOLEAN
);

-- ChatHistory
CREATE TABLE chat_history (
    id INTEGER PRIMARY KEY,
    user_id INTEGER FOREIGN KEY,
    session_id VARCHAR(100),
    role VARCHAR(20),
    content TEXT,
    selected_text TEXT,
    created_at DATETIME
);
```

## API Endpoints

### REST API

```
GET    /api/prompts/              # List all prompts
POST   /api/prompts/              # Create new prompt
GET    /api/prompts/{id}/         # Get specific prompt
PUT    /api/prompts/{id}/         # Update prompt
DELETE /api/prompts/{id}/         # Delete prompt

GET    /api/settings/             # Get user settings
POST   /api/settings/             # Create/update settings

GET    /api/chat-history/         # Get chat history
POST   /api/chat-history/         # Save chat message

POST   /api/call-ai/              # Process text with AI
POST   /api/chat/                 # Send chat message
```

### Request/Response Examples

**Call AI API:**
```json
// Request
POST /api/call-ai/
{
    "prompt": "Fix grammar in this text:",
    "selected_text": "This are a test.",
    "override_provider": "groq",
    "override_model": "llama-3.1-70b-versatile"
}

// Response
{
    "data": "This is a test."
}
```

**Chat API:**
```json
// Request
POST /api/chat/
{
    "session_id": "session_123",
    "message": "What does this mean?",
    "selected_text": "Original text here"
}

// Response
{
    "data": "AI response here",
    "session_id": "session_123"
}
```

## Security Layers

```
┌─────────────────────────────────────┐
│         User Request                │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    CORS Middleware                  │
│    (Cross-Origin Protection)        │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    CSRF Middleware                  │
│    (Cross-Site Request Forgery)     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    Authentication Middleware        │
│    (User Identity)                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    View Layer                       │
│    (Business Logic)                 │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    ORM Layer                        │
│    (SQL Injection Protection)       │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    Database                         │
└─────────────────────────────────────┘
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Load Balancer                         │
│                   (nginx/Apache)                         │
└────────────┬────────────────────────┬───────────────────┘
             │                        │
┌────────────▼──────────┐  ┌─────────▼──────────────────┐
│   Django Instance 1   │  │   Django Instance 2        │
│   (Gunicorn/uWSGI)    │  │   (Gunicorn/uWSGI)        │
└────────────┬──────────┘  └─────────┬──────────────────┘
             │                        │
             └────────────┬───────────┘
                          │
┌─────────────────────────▼────────────────────────────────┐
│                  PostgreSQL Database                      │
│                  (Production DB)                          │
└───────────────────────────────────────────────────────────┘
             │                        │
┌────────────▼──────────┐  ┌─────────▼──────────────────┐
│   Redis Cache         │  │   Static Files (S3/CDN)    │
│   (Session Storage)   │  │   (CSS/JS/Images)          │
└───────────────────────┘  └────────────────────────────┘
```

## Technology Stack

### Backend
- **Framework:** Django 5.0.1
- **API:** Django REST Framework 3.14.0
- **Database:** SQLite (dev) / PostgreSQL (prod)
- **Server:** Gunicorn / uWSGI
- **Cache:** Redis (optional)

### Frontend
- **HTML5** - Structure
- **Tailwind CSS** - Styling
- **JavaScript** - Interactivity
- **Fetch API** - AJAX requests

### External Services
- **OpenAI API** - GPT models
- **Groq API** - Fast inference
- **Together AI** - Open models
- **Google Gemini** - Gemini models

### Development Tools
- **Python 3.8+** - Programming language
- **pip** - Package manager
- **venv** - Virtual environment
- **Git** - Version control

## Scalability Considerations

### Horizontal Scaling
- Multiple Django instances behind load balancer
- Stateless application design
- Session storage in Redis/database

### Vertical Scaling
- Increase server resources
- Optimize database queries
- Add caching layer

### Database Scaling
- Read replicas for queries
- Write master for updates
- Connection pooling

### Caching Strategy
- Redis for session data
- Database query caching
- API response caching
- Static file CDN

## Performance Optimization

1. **Database Indexes** on frequently queried fields
2. **Query Optimization** using select_related/prefetch_related
3. **Caching** for repeated requests
4. **Async Processing** for long-running tasks
5. **CDN** for static files
6. **Compression** for responses
7. **Connection Pooling** for database

## Monitoring & Logging

```
Application Logs → Django Logging → File/Syslog
                                   ↓
Performance Metrics → Monitoring Tool (Sentry/New Relic)
                                   ↓
Error Tracking → Alert System → Email/Slack
                                   ↓
Analytics → Database → Dashboard
```

---

This architecture provides a solid foundation for a scalable, maintainable web application with all the features of your original browser extension.
