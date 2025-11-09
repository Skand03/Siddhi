# Pre-Launch Checklist

Use this checklist before running your Django application.

## ✅ Installation

- [ ] Python 3.8+ installed
- [ ] Virtual environment created (`python -m venv venv`)
- [ ] Virtual environment activated
- [ ] Dependencies installed (`pip install -r requirements.txt`)

## ✅ Configuration

- [ ] `.env` file created (copied from `.env.example`)
- [ ] At least one AI provider API key added to `.env`
- [ ] `SECRET_KEY` set in `.env` (for production)
- [ ] `DEBUG` setting configured
- [ ] `ALLOWED_HOSTS` configured (for production)

## ✅ Database

- [ ] Migrations created (`python manage.py makemigrations`)
- [ ] Migrations applied (`python manage.py migrate`)
- [ ] Database file created (`db.sqlite3`)

## ✅ Testing

- [ ] Server starts without errors (`python manage.py runserver`)
- [ ] Home page loads (http://localhost:8000)
- [ ] Chat page loads (http://localhost:8000/chat/)
- [ ] Settings page loads (http://localhost:8000/settings/)
- [ ] AI processing works (test with grammar fixer)
- [ ] Chat functionality works
- [ ] No console errors in browser

## ✅ Optional Setup

- [ ] Superuser created (`python manage.py createsuperuser`)
- [ ] Admin panel accessible (http://localhost:8000/admin/)
- [ ] Static files collected (for production: `python manage.py collectstatic`)

## ✅ API Keys

Get free API keys from:

- [ ] Groq: https://console.groq.com/ (Recommended - Free)
- [ ] OpenAI: https://platform.openai.com/ (Paid)
- [ ] Together AI: https://api.together.xyz/ (Free credits)
- [ ] Gemini: https://makersuite.google.com/ (Free tier)

## ✅ Documentation Review

- [ ] Read `README.md`
- [ ] Read `QUICKSTART.md`
- [ ] Understand `MIGRATION_GUIDE.md`
- [ ] Review `FEATURES.md`

## ✅ Code Quality

- [ ] No syntax errors
- [ ] No import errors
- [ ] Models properly defined
- [ ] Views working correctly
- [ ] Templates rendering properly
- [ ] Static files loading

## ✅ Security (Production)

- [ ] `DEBUG = False` in production
- [ ] Strong `SECRET_KEY` set
- [ ] `ALLOWED_HOSTS` properly configured
- [ ] API keys not in version control
- [ ] `.gitignore` properly configured
- [ ] HTTPS enabled
- [ ] Database backups configured

## ✅ Deployment (When Ready)

- [ ] Choose hosting platform
- [ ] Configure production database (PostgreSQL recommended)
- [ ] Set up static file serving
- [ ] Configure domain name
- [ ] Set up SSL certificate
- [ ] Configure email (for notifications)
- [ ] Set up monitoring
- [ ] Configure backups

## 🎯 Quick Test Script

Run these commands to verify everything works:

```bash
# 1. Check Django installation
python -c "import django; print(django.get_version())"

# 2. Check project structure
python manage.py check

# 3. Test database
python manage.py showmigrations

# 4. Test server (Ctrl+C to stop)
python manage.py runserver

# 5. In another terminal, test API
curl http://localhost:8000/api/prompts/
```

## 🐛 Troubleshooting

### Server won't start
```bash
# Check for errors
python manage.py check

# Check migrations
python manage.py showmigrations

# Try different port
python manage.py runserver 8001
```

### API errors
```bash
# Check .env file exists
dir .env

# Verify API key format
# Groq: starts with "gsk_"
# OpenAI: starts with "sk-"
```

### Database errors
```bash
# Reset database
del db.sqlite3
python manage.py migrate
```

### Import errors
```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

## ✨ Success Indicators

You're ready to go when:

✅ Server starts without errors
✅ All pages load correctly
✅ AI processing returns results
✅ Chat interface works
✅ Settings can be saved
✅ No console errors

## 🚀 Launch!

Once all items are checked:

1. Start the server: `python manage.py runserver`
2. Open browser: http://localhost:8000
3. Test all features
4. Share with users!

## 📝 Post-Launch

- [ ] Monitor error logs
- [ ] Check API usage
- [ ] Gather user feedback
- [ ] Plan improvements
- [ ] Update documentation

---

**Ready?** Start with `QUICKSTART.md` for a 5-minute setup!
