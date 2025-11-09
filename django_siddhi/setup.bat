@echo off
echo ========================================
echo Siddhi Django Setup Script
echo ========================================
echo.

echo Creating virtual environment...
python -m venv venv
if errorlevel 1 (
    echo Error creating virtual environment
    pause
    exit /b 1
)

echo.
echo Activating virtual environment...
call venv\Scripts\activate.bat

echo.
echo Installing dependencies...
pip install -r requirements.txt
if errorlevel 1 (
    echo Error installing dependencies
    pause
    exit /b 1
)

echo.
echo Setting up environment file...
if not exist .env (
    copy .env.example .env
    echo .env file created. Please edit it and add your API keys.
) else (
    echo .env file already exists.
)

echo.
echo Running database migrations...
python manage.py makemigrations
python manage.py migrate
if errorlevel 1 (
    echo Error running migrations
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env file and add your API keys
echo 2. Run: python manage.py runserver
echo 3. Visit: http://localhost:8000
echo.
echo To create an admin user, run:
echo python manage.py createsuperuser
echo.
pause
