# Siddhi Django - AI at Your Fingertips

A Django web application migrated from the Plasmo browser extension, providing AI-powered text processing, chat functionality, and multi-provider LLM support.

## Features

✨ **Core Functionality**
- AI-powered text processing (grammar fixing, summarization, code analysis, etc.)
- Interactive chat interface with customizable prompts
- Multi-language support
- Code conversion and debugging
- Fact checking

🤖 **AI Provider Support**
- OpenAI
- Groq
- Together AI
- Google Gemini
- Custom endpoints

💾 **Data Management**
- User settings and preferences
- Custom prompt templates
- Chat history storage
- Session management

## Quick Start

### 1. Installation

```bash
cd django_siddhi

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configuration

```bash
# Copy environment file
cp .env.example .env

# Edit .env and add your API keys
# At minimum, add one AI provider API key (e.g., GROQ_API_KEY)
```

### 3. Database Setup

```bash
# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
```

### 4. Run Server

```bash
python manage.py runserver
```

Visit http://localhost:8000 in your browser!

## Project Structure

```
django_siddhi/
├── siddhi_project/          # Django project settings
│   ├── settings.py          # Main configuration
│   ├── urls.py              # Root URL routing
│   └── wsgi.py              # WSGI configuration
├── siddhi_app/              # Main application
│   ├── models.py            # Database models
│   ├── views.py             # View logic
│   ├── serializers.py       # REST API serializers
│   ├── services.py          # AI service integration
│   ├── urls.py              # App URL routing
│   └── admin.py             # Admin interface
├── templates/               # HTML templates
│   ├── base.html            # Base template
│   ├── index.html           # Home page
│   ├── chat.html            # Chat interface
│   └── settings.html        # Settings page
├── manage.py                # Django management script
└── requirements.txt         # Python dependencies
```

## API Endpoints

### REST API

- `GET/POST /api/prompts/` - Manage prompt templates
- `GET/POST /api/settings/` - User settings
- `GET/POST /api/chat-history/` - Chat history
- `POST /api/call-ai/` - Make AI API calls
- `POST /api/chat/` - Send chat messages

### Web Pages

- `/` - Home page with quick AI processing
- `/chat/` - Interactive chat interface
- `/settings/` - Configuration and settings
- `/admin/` - Django admin panel

## Usage Examples

### Quick Text Processing

1. Go to the home page
2. Enter your text
3. Select a prompt type (grammar, summarize, etc.)
4. Click "Process Text"

### Chat Interface

1. Navigate to `/chat/`
2. Customize your prompt (optional)
3. Add text to discuss (optional)
4. Click "Start Chat"
5. Have a conversation!

### API Usage

```python
import requests

# Call AI API
response = requests.post('http://localhost:8000/api/call-ai/', json={
    'prompt': 'Fix grammar in this text:',
    'selected_text': 'This are a test sentence.'
})

print(response.json()['data'])
```

## Configuration

### AI Providers

Edit `.env` file:

```env
# Choose your default provider
DEFAULT_AI_PROVIDER=groq
DEFAULT_AI_MODEL=llama-3.1-70b-versatile

# Add API keys
GROQ_API_KEY=your_groq_key_here
OPENAI_API_KEY=your_openai_key_here
```

### Supported Models

**Groq:**
- llama-3.1-70b-versatile
- llama-3.1-8b-instant
- mixtral-8x7b-32768

**OpenAI:**
- gpt-4
- gpt-3.5-turbo

**Gemini:**
- gemini-pro
- gemini-1.5-pro

## Development

### Running Tests

```bash
python manage.py test
```

### Creating Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Admin Access

Create a superuser and access the admin panel at `/admin/`:

```bash
python manage.py createsuperuser
```

## Deployment

### Production Settings

1. Set `DEBUG=False` in `.env`
2. Add your domain to `ALLOWED_HOSTS`
3. Set a strong `SECRET_KEY`
4. Use a production database (PostgreSQL recommended)
5. Configure static files serving
6. Use a production WSGI server (gunicorn, uwsgi)

### Example with Gunicorn

```bash
pip install gunicorn
gunicorn siddhi_project.wsgi:application --bind 0.0.0.0:8000
```

## Migration from Browser Extension

This Django app includes all functionality from the original Plasmo browser extension:

✅ All prompt templates (grammar, summarize, code analysis, etc.)
✅ Chat interface with customizable prompts
✅ Multi-provider AI support
✅ Settings management
✅ Session handling
✅ Error handling and validation

## Troubleshooting

**Issue:** API calls failing
- Check your API keys in `.env`
- Verify the provider is correct
- Check internet connection

**Issue:** Database errors
- Run `python manage.py migrate`
- Delete `db.sqlite3` and recreate

**Issue:** Static files not loading
- Run `python manage.py collectstatic`

## License

Same as original Siddhi project

## Support

For issues and questions, please refer to the original project documentation.
