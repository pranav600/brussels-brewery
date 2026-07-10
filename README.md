# Brussels Brewery Cafe

A premium, full-stack web application for the **Brussels Brewery Cafe** consisting of a modern Next.js frontend and a Django REST API backend.

## 🚀 Features
* **Modern Web UI**: Built with Next.js 16 (Turbopack) & TailwindCSS.
* **3D Rotating Menu Wheel**: Custom responsive menu cards carousel.
* **Interactive Booking**: Easy table reservation interface.
* **About & Contact Services**: Fully customized brand pages.

---

## 🛠️ Project Structure
```text
├── frontend/     # Next.js Application
└── backend/      # Django REST Framework API
```

---

## 💻 Getting Started

### 1. Run Backend (Django)
```bash
cd backend
python3 -m venv venv
source venv/activate   # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Runs locally at: `http://127.0.0.1:8000`

### 2. Run Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Runs locally at: `http://localhost:3000`

---

## 👤 Credits
* Powered by **Pranav Joshi**
