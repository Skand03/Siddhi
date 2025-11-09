# Deployment Guide

Complete guide for deploying Siddhi Django to production.

## Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Static files collected
- [ ] Security settings reviewed
- [ ] Backup strategy planned

## Option 1: Heroku (Easiest)

### Prerequisites
- Heroku account
- Heroku CLI installed

### Steps

1. **Install Heroku CLI**
```bash
# Download from: https://devcenter.heroku.com/articles/heroku-cli
```

2. **Prepare Project**
```bash
# Install additional dependencies
pip install gunicorn psycopg2-binary whitenoise
pip freeze > requirements.txt
```

3. **Create Procfile**
```bash
echo "web: gunicorn siddhi_project.wsgi" > Procfile
```

4. **Update settings.py**
```python
# Add to settings.py
import dj_database_url

# Heroku database
DATABASES['default'] = dj_database_url.config(
    conn_max_age=600,
    conn_health_checks=True,
)

# Static files
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

5. **Deploy**
```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set SECRET_KEY="your-secret-key"
heroku config:set DEBUG=False
heroku config:set GROQ_API_KEY="your-groq-key"

# Deploy
git push heroku main

# Run migrations
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser

# Open app
heroku open
```

## Option 2: DigitalOcean (Recommended)

### Prerequisites
- DigitalOcean account
- SSH access

### Steps

1. **Create Droplet**
- Choose Ubuntu 22.04
- Select plan ($5/month minimum)
- Add SSH key

2. **Connect to Server**
```bash
ssh root@your-server-ip
```

3. **Install Dependencies**
```bash
# Update system
apt update && apt upgrade -y

# Install Python and tools
apt install python3-pip python3-venv nginx postgresql postgresql-contrib -y

# Install certbot for SSL
apt install certbot python3-certbot-nginx -y
```

4. **Setup PostgreSQL**
```bash
# Switch to postgres user
sudo -u postgres psql

# Create database and user
CREATE DATABASE siddhi_db;
CREATE USER siddhi_user WITH PASSWORD 'your-password';
ALTER ROLE siddhi_user SET client_encoding TO 'utf8';
ALTER ROLE siddhi_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE siddhi_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE siddhi_db TO siddhi_user;
\q
```

5. **Deploy Application**
```bash
# Create app directory
mkdir -p /var/www/siddhi
cd /var/www/siddhi

# Clone or upload your code
git clone your-repo-url .

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
pip install gunicorn psycopg2-binary

# Create .env file
nano .env
# Add your environment variables

# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate
```

6. **Configure Gunicorn**
```bash
# Create gunicorn service
nano /etc/systemd/system/gunicorn.service
```

```ini
[Unit]
Description=gunicorn daemon for Siddhi
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/siddhi
ExecStart=/var/www/siddhi/venv/bin/gunicorn \
    --workers 3 \
    --bind unix:/var/www/siddhi/siddhi.sock \
    siddhi_project.wsgi:application

[Install]
WantedBy=multi-user.target
```

```bash
# Start gunicorn
systemctl start gunicorn
systemctl enable gunicorn
```

7. **Configure Nginx**
```bash
nano /etc/nginx/sites-available/siddhi
```

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location = /favicon.ico { access_log off; log_not_found off; }
    
    location /static/ {
        root /var/www/siddhi;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/var/www/siddhi/siddhi.sock;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/siddhi /etc/nginx/sites-enabled
nginx -t
systemctl restart nginx
```

8. **Setup SSL**
```bash
certbot --nginx -d your-domain.com
```

## Option 3: AWS EC2

### Steps

1. **Launch EC2 Instance**
- Choose Ubuntu Server
- Select t2.micro (free tier)
- Configure security group (ports 80, 443, 22)

2. **Connect and Setup**
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip

# Follow DigitalOcean steps 3-8
```

3. **Use RDS for Database** (Optional)
- Create RDS PostgreSQL instance
- Update DATABASE_URL in .env

## Option 4: Railway (Modern)

### Steps

1. **Visit Railway.app**
```
https://railway.app
```

2. **Create New Project**
- Connect GitHub repo
- Railway auto-detects Django

3. **Add PostgreSQL**
- Click "New" → "Database" → "PostgreSQL"
- Railway auto-configures DATABASE_URL

4. **Set Environment Variables**
```
SECRET_KEY=your-secret-key
DEBUG=False
GROQ_API_KEY=your-key
```

5. **Deploy**
- Push to GitHub
- Railway auto-deploys

## Environment Variables

Required for all deployments:

```env
# Django
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=your-domain.com,www.your-domain.com

# Database (if not using SQLite)
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# AI Providers (at least one)
GROQ_API_KEY=your-groq-key
OPENAI_API_KEY=your-openai-key
TOGETHER_API_KEY=your-together-key
GEMINI_API_KEY=your-gemini-key

# Optional
DEFAULT_AI_PROVIDER=groq
DEFAULT_AI_MODEL=llama-3.1-70b-versatile
```

## Production Settings

Update `settings.py` for production:

```python
# Security
SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = False
ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', '').split(',')

# HTTPS
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'

# Database
DATABASES = {
    'default': dj_database_url.config(
        default=os.getenv('DATABASE_URL'),
        conn_max_age=600
    )
}

# Static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

## Database Migration

### From SQLite to PostgreSQL

```bash
# 1. Dump SQLite data
python manage.py dumpdata > data.json

# 2. Update DATABASE_URL to PostgreSQL

# 3. Run migrations
python manage.py migrate

# 4. Load data
python manage.py loaddata data.json
```

## Monitoring

### Setup Sentry (Error Tracking)

```bash
pip install sentry-sdk
```

```python
# settings.py
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
    dsn=os.getenv('SENTRY_DSN'),
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,
)
```

### Setup Logging

```python
# settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': '/var/log/siddhi/error.log',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'ERROR',
            'propagate': True,
        },
    },
}
```

## Backup Strategy

### Database Backups

```bash
# PostgreSQL backup
pg_dump -U siddhi_user siddhi_db > backup.sql

# Restore
psql -U siddhi_user siddhi_db < backup.sql
```

### Automated Backups

```bash
# Create backup script
nano /usr/local/bin/backup-siddhi.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -U siddhi_user siddhi_db > /backups/siddhi_$DATE.sql
find /backups -name "siddhi_*.sql" -mtime +7 -delete
```

```bash
# Make executable
chmod +x /usr/local/bin/backup-siddhi.sh

# Add to crontab (daily at 2 AM)
crontab -e
0 2 * * * /usr/local/bin/backup-siddhi.sh
```

## Performance Optimization

### Enable Caching

```bash
pip install django-redis
```

```python
# settings.py
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': os.getenv('REDIS_URL', 'redis://127.0.0.1:6379/1'),
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}
```

### Database Optimization

```python
# Add indexes to models
class PromptTemplate(models.Model):
    # ...
    class Meta:
        indexes = [
            models.Index(fields=['user', 'is_active']),
        ]
```

## Troubleshooting

### Static files not loading
```bash
python manage.py collectstatic --clear
systemctl restart gunicorn
systemctl restart nginx
```

### Database connection errors
```bash
# Check PostgreSQL is running
systemctl status postgresql

# Check connection
psql -U siddhi_user -d siddhi_db
```

### Gunicorn not starting
```bash
# Check logs
journalctl -u gunicorn -n 50

# Restart service
systemctl restart gunicorn
```

### Nginx errors
```bash
# Check configuration
nginx -t

# Check logs
tail -f /var/log/nginx/error.log
```

## Cost Estimates

| Platform | Monthly Cost | Notes |
|----------|-------------|-------|
| Heroku | $7-25 | Easy, auto-scaling |
| DigitalOcean | $5-20 | Full control |
| AWS EC2 | $0-50 | Free tier available |
| Railway | $5-20 | Modern, easy |
| PythonAnywhere | $5-15 | Python-focused |

## Post-Deployment

- [ ] Test all features
- [ ] Monitor error logs
- [ ] Check performance
- [ ] Setup backups
- [ ] Configure monitoring
- [ ] Update documentation
- [ ] Announce to users

## Support

For deployment issues:
- Check Django deployment docs
- Review platform-specific guides
- Check application logs
- Test locally first

---

Choose the deployment option that best fits your needs and budget. Heroku and Railway are easiest for beginners, while DigitalOcean and AWS offer more control.
