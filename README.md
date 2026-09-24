# 🛍️ ZYRIVO — Modern E-Commerce Platform

ZYRIVO is a full-featured, modern E-Commerce web application built using the MERN stack (MongoDB, Express, React, Node.js) with Vite, Tailwind CSS, and Firebase Phone Authentication.

---

## 🚀 Features

- **📱 Phone Authentication**: Seamless OTP verification with Firebase Phone Auth and dev OTP fallback.
- **✨ Dynamic Product Catalog**: Browse products by category, keyword search, price/rating sorting, and pagination.
- **🛒 Shopping Bag & Cart**: Real-time cart updates, quantity management, promo codes, and persistent state.
- **📦 Checkout & Orders**: Delivery address management, order placement (COD / Online), order tracking, and order cancellation.
- **🎨 Modern UI/UX**: Built with Tailwind CSS, smooth animations, Lucide icons, glassmorphism, and responsive mobile-first layouts.
- **🌱 Database Seeder**: One-click MongoDB seed script with rich product catalog and mock reviews.

---

## 📁 Repository Structure

```text
ZYRIVO/
├── backend/
│   ├── config/          # Database configuration (MongoDB)
│   ├── controllers/     # API request handlers (Auth, Products, Orders, etc.)
│   ├── middleware/      # Auth & Error handling middlewares
│   ├── models/          # Mongoose schemas (User, Product, Order, Category)
│   ├── routes/          # Express route definitions
│   ├── seed/            # Database seeder scripts
│   ├── utils/           # Utility functions & token generators
│   ├── .env.example     # Backend environment template
│   ├── package.json
│   └── server.js        # Backend entry point
├── frontend/
│   ├── public/          # Static assets & icons
│   ├── src/
│   │   ├── components/  # React components (Navbar, Modals, Checkout, Orders, etc.)
│   │   ├── context/     # State management (Cart, Auth, etc.)
│   │   ├── services/    # API & Firebase service helpers
│   │   ├── App.jsx      # Main Application
│   │   └── main.jsx
│   ├── .env.example     # Frontend environment template
│   ├── package.json
│   └── vite.config.js
├── .gitignore           # Git ignore configuration
└── README.md
```

---

## 🛠️ Prerequisites

- **Node.js** (v18 or higher recommended)
- **MongoDB** (Local instance or MongoDB Atlas URI)
- **Git**

---

## ⚡ Quick Start & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/ZYRIVO.git
cd ZYRIVO
```

---

### 2. Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from the template:
   ```bash
   cp .env.example .env
   ```
4. Configure environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/zyrivo
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   ```
5. *(Optional)* Seed initial product catalog:
   ```bash
   npm run seed
   ```
6. Start backend development server:
   ```bash
   npm run dev
   ```
   > Backend runs on `http://localhost:5000`

---

### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from the template:
   ```bash
   cp .env.example .env
   ```
4. *(Optional)* Add your Firebase credentials in `frontend/.env` if using Firebase Phone Auth.
5. Start Vite development server:
   ```bash
   npm run dev
   ```
   > Frontend runs on `http://localhost:5173`

---

## 🔑 Environment Variables Reference

### Backend (`backend/.env`)
| Variable | Description | Default |
|---|---|---|
| `PORT` | Backend server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/zyrivo` |
| `JWT_SECRET` | Secret key for JWT auth tokens | - |
| `NODE_ENV` | Runtime environment (`development` / `production`) | `development` |
| `CLIENT_URL` | Allowed client URL for CORS | `http://localhost:5173` |

### Frontend (`frontend/.env`)
| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase Web API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase Web App ID |

---

## 📜 Available Scripts

### Backend (`/backend`)
- `npm run dev` — Starts backend with nodemon hot-reload.
- `npm start` — Starts backend in production mode.
- `npm run seed` — Seeds MongoDB with mock products & categories.

### Frontend (`/frontend`)
- `npm run dev` — Starts Vite dev server.
- `npm run build` — Compiles production bundle to `/dist`.
- `npm run preview` — Locally preview the production build.

---

## 🛡️ License

This project is licensed under the ISC License.
