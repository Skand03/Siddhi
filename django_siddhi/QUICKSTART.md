# Quick Start Guide

Get Siddhi Django running in 5 minutes!

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- At least one AI provider API key (Groq recommended for free tier)

## Step 1: Setup (Windows)

```bash
# Run the setup script
setup.bat
```

Or manually:

```bash
# Create virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
copy .env.example .env
```

## Step 2: Configure API Keys

Edit `.env` file and add at least one API key:

```env
# Get free API key from: https://console.groq.com/
GROQ_API_KEY=gsk_your_key_here

# Or use OpenAI
OPENAI_API_KEY=sk-your_key_here
```

## Step 3: Initialize Database

```bash
python manage.py migrate
```

## Step 4: Run Server

```bash
python manage.py runserver
```

## Step 5: Open Browser

Visit: http://localhost:8000

## Test It Out

### Quick Test
1. Go to home page
2. Enter text: "This are a test sentence with grammar mistake"
3. Select "❗ Grammar Fixer"
4. Click "Process Text"
5. See the corrected result!

### Chat Test
1. Click "Chat" in navigation
2. Enter a custom prompt or use default
3. Add some text to discuss
4. Click "Start Chat"
5. Have a conversation!

## Get API Keys (Free Options)

### Groq (Recommended - Free)
1. Visit: https://console.groq.com/
2. Sign up for free account
3. Go to API Keys section
4. Create new key
5. Copy to `.env` as `GROQ_API_KEY`

### OpenAI (Paid)
1. Visit: https://platform.openai.com/
2. Sign up and add payment method
3. Go to API Keys
4. Create new key
5. Copy to `.env` as `OPENAI_API_KEY`

### Together AI (Free Credits)
1. Visit: https://api.together.xyz/
2. Sign up for free credits
3. Get API key
4. Copy to `.env` as `TOGETHER_API_KEY`

## Troubleshooting

### "No module named django"
```bash
pip install -r requirements.txt
```

### "API Error 401"
- Check your API key in `.env`
- Make sure there are no extra spaces
- Verify the key is valid

### "Port already in use"
```bash
# Use different port
python manage.py runserver 8001
```

### Database errors
```bash
# Reset database
del db.sqlite3
python manage.py migrate
```

## What's Next?

- Create admin user: `python manage.py createsuperuser`
- Access admin panel: http://localhost:8000/admin/
- Customize prompts in Settings page
- Read full documentation in README.md

## Features to Try

✅ Grammar fixing
✅ Text summarization  
✅ Code analysis
✅ Debug & fix code
✅ Fact checking
✅ Social media comments
✅ Interactive chat
✅ Custom prompts
✅ Multi-language support

Enjoy using Siddhi! 🎉
