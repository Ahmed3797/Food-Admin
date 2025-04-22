# 🛠️ Aam – Admin Panel

![React](https://img.shields.io/badge/React-AdminPanel-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-API-yellow?logo=axios)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-success?logo=vercel)

The Admin Panel for **Aam** – a modern food ordering web application. This dashboard allows admins to manage products, categories, and orders with full CRUD functionality and order status control.

---

## ✨ Features

- 🔐 Admin authentication (Login required)
- 📦 Manage products (Create, Update, Delete)
- 🍱 Manage food categories
- 📜 View and update order status
- 🖼️ Image uploads via Cloudinary
- 🔔 Toast notifications for feedback
- 📱 Fully responsive design

---

## 🛠 Tech Stack

- ⚛️ React + Vite
- 📁 React Router DOM
- 💨 Tailwind CSS
- 🔄 Axios (API communication)
- 🔔 React Toastify (notifications)
- 📸 Cloudinary (image hosting via backend API)
- 🧠 Context API (auth management)

---

## 📁 Project Structure

Food-Admin/ │ ├── public/ # Static assets ├── src/ │ ├── components/ # Reusable UI components (Sidebar, Navbar, Forms, etc.) │ ├── pages/ # Page views (Dashboard, Products, Orders) │ ├── context/ # Admin auth & global state │ ├── utils/ # API helper functions │ └── App.jsx # Root app logic │ ├── .env # Environment variables └── vite.config.js # Vite configuration

yaml
Copy
Edit

---

## 🚀 Getting Started

Run the admin panel locally with the following commands:

```bash
# Clone the repository
git clone https://github.com/Ahmed3797/Food-Admin.git

# Navigate into the project folder
cd Food-Admin

# Install dependencies
npm install

# Start development server
npm run dev

```

🌐 Live Demo
🔗 https://food-admin-six-delta.vercel.app
➡️ Login email for demo: ch379796@gmail.com

🔌 Environment Variables
Create a .env file in the root with the following:
VITE_API_BASE_URL=https://food-mern-api.vercel.app/


This ensures all API calls point to the correct backend service.

🔐 Authentication Flow
Admin logs in via email/password.

JWT is stored and attached to all protected API requests.
On session expiry, admin is redirected to login.

🧑‍💻 Admin Abilities

Feature	Description
🥘 Products	Add, edit, delete, and upload product images
📂 Categories	Add, edit, and remove categories
📦 Orders	View orders and update their status
🔐 Secure Routes	All routes protected with auth middleware
📸 Screenshots
(Add Admin Dashboard, Product List, Edit Modal screenshots here)

