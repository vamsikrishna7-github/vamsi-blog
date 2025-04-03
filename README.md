# Vamsi-Blog: SEO-Friendly Next.js React Tech Blog with Django DRF

![Image](https://github.com/user-attachments/assets/3198b7c9-945d-454d-ab38-4b9019642f26)

## 🚀 Vamsi Blog - Next.js & Django Powered Tech Blog

Vamsi-Blog is an **SEO-friendly, fully responsive** personal tech blog built using **React (Next.js)** for the frontend and **Django (Django REST Framework - DRF)** for the backend. The project allows users to subscribe/unsubscribe to newsletters, view blogs, like posts anonymously, and track total application views. The backend includes an admin panel for managing blog posts and newsletter subscribers.

🔗 **Live Demo:** [https://blog.vamsikrishna.site/](https://blog.vamsikrishna.site/)  
🔗 **Portfolio:** [https://vamsikrishna.site/](https://vamsikrishna.site/)  
📩 **Contact:** [contact@vamsikrishna.site](mailto:contact@vamsikrishna.site)  
🔗 **GitHub Repository:** [https://github.com/vamsikrishna7-github/vamsi-blog.git](https://github.com/vamsikrishna7-github/vamsi-blog.git)

---

## 🌟 Features

### 🖥️ Frontend (React + Next.js)
- **SEO Optimized** using Next.js features.
- **Slug-based Routing** for individual blog pages.
- **Fully Responsive** across all devices.
- **Fast and Lightweight** with Next.js optimizations.

### 🖥️ Backend (Django + DRF)
- **Blog API Endpoints**:
  - Fetch all blogs.
  - Fetch a single blog using a slug.
  - Search functionality.
- **Newsletter Management**:
  - Subscribe & Unsubscribe via API.
  - Automated email notifications for new blogs.
- **User Engagement Features**:
  - Anonymous likes & views.
  - Track total application views.
- **Admin Panel for CRUD Operations**:
  - Manage blog posts.
  - Remove newsletter subscribers.

### 🛠️ Tech Stack
- **Frontend:** Next.js (React)
- **Backend:** Django, Django REST Framework (DRF)
- **Database:** PostgreSQL ([Neon.tech](https://console.neon.tech/))
- **Email Service:** Automated emails for subscriptions, unsubscriptions, and new blog posts.

---

## 📌 Installation Guide

### 💻 Prerequisites
- **Node.js & npm** (for Next.js frontend)
- **Python & Django** (for backend)
- **PostgreSQL Database**
- **Virtual Environment (optional but recommended)**

### 🔥 Backend Setup (Django + DRF)
```sh
# Clone the repository
git clone https://github.com/vamsikrishna7-github/vamsi-blog.git
cd vamsi-blog/backend

# Create a virtual environment
python -m venv env
source env/bin/activate  # For Mac/Linux
env\Scripts\activate  # For Windows

# Install dependencies
pip install -r requirements.txt

# Set up PostgreSQL database (modify settings.py accordingly)
python manage.py migrate

# Create a superuser for the admin panel
python manage.py createsuperuser

# Start the backend server
python manage.py runserver
```

### 🔥 Frontend Setup (React + Next.js)
```sh
# Navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev
```

### 🌍 Environment Variables
Create a `.env` file in both `backend` and `frontend` directories with necessary API keys and database credentials.

---

## 📌 Deployment
### 🚀 Deploy Django (Backend)
1. Host on a cloud server (e.g., DigitalOcean, AWS, or PythonAnywhere).
2. Use **Gunicorn + Nginx** for production.
3. Set up **PostgreSQL** database on [Neon.tech](https://console.neon.tech/).

### 🚀 Deploy Next.js (Frontend)
1. Deploy on **Vercel** or **Netlify**.
2. Update API URLs in `next.config.js`.
3. Configure **CNAME & A Records** in Namecheap for `blog.vamsikrishna.site`.

---

## 📞 Connect With Me
📩 **Contact:** [contact@vamsikrishna.site](mailto:contact@vamsikrishna.site)  
🌐 **Website:** [https://vamsikrishna.site/](https://vamsikrishna.site/)  
📱 **Socials:**  
- [LinkedIn](https://www.linkedin.com/in/vamsi-krishna-nagidi-742314233/)
- [Instagram](https://www.instagram.com/orewa_mr_x/)
- [Twitter (X)](https://x.com/TheNagidi?t=Yl7NUehaqonyl6NbxI0EXg&s=09)

---

## ⭐ Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

### 📌 Steps to Contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added a new feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

Let's build something amazing together! 🚀

