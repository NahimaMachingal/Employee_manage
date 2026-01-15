# Company Employee Management System

A full-stack web application for managing company employees, built with Django REST Framework and React.

## 🚀 Features

*   **Employee Management**: View, add, update, and delete employee records.
*   **Authentication**: Secure login and registration using JWT (JSON Web Tokens).
*   **Search & Filter**: Filter employees by department and role.
*   **Pagination**: Efficiently handle large lists of employees.
*   **Modern UI**: Responsive interface built with React.

## 🛠️ Tech Stack

### Backend
*   **Framework**: Django 5.0
*   **API**: Django REST Framework (DRF)
*   **Authentication**: `rest_framework_simplejwt`
*   **Database**: SQLite (default) / Configurable

### Frontend
*   **Framework**: React 18
*   **Build Tool**: Vite
*   **HTTP Client**: Axios
*   **Routing**: React Router DOM

## ⚙️ Installation & Setup

### Prerequisites
*   Python 3.10+
*   Node.js 16+ & npm

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Company
```

### 2. Backend Setup
Navigate to the backend directory:
```bash
cd backend
```

Create a virtual environment:
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

Install dependencies:
```bash
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers django-filter
```

Run migrations:
```bash
python manage.py migrate
```

Start the server:
```bash
python manage.py runserver
```
The backend API will run at `http://localhost:8000`.

### 3. Frontend Setup
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🔑 Usage

1.  **Register**: Create a new account via the frontend registration page.
2.  **Login**: Use your credentials to access the dashboard.
3.  **Manage**: Add or edit employee details.

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
