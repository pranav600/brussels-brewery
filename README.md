# Cafe Forêt

A premium, full-stack web application for **Cafe Forêt** (Toronto) consisting of a modern Next.js frontend and a Django REST API backend.

## 🚀 Features
* **Modern Web UI**: Beautiful responsive design built with Next.js 15 (Turbopack), TailwindCSS, & Framer Motion.
* **Interactive Mênu**: Elegant category-filtered layout featuring dynamic entrance animations, alternating split category image banners, and optimized double-column cards on mobile.
* **Progressive Table Booking**: Seamless multi-step booking wizard with real-time availability check, reference code generation (e.g., `BB-263743`), and automated email notifications.
* **About & Contact Services**: Interactive pages telling the botanical forest sanctuary's story and handling user inquiries.

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
source venv/bin/activate   # On Windows use: venv\Scripts\activate
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
