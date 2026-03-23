# 🌆 Anshuman Singh — 3D Portfolio Website

> A premium, animated developer portfolio built with React, Three.js, and a **Lofi Tokyo Twilight** aesthetic.

[![Live Demo](https://img.shields.io/badge/Live-Demo-rose?style=for-the-badge)](https://portfolio-website-wine-five-22.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-kenzo78766-161b22?style=for-the-badge&logo=github)](https://github.com/kenzo78766)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anshuman_Singh-0a66c2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anshuman78766/)

---

## ✨ Features

- 🎮 **Interactive 3D Hero Section** — A fully animated Vaporwave Tokyo diorama rendered in React Three Fiber with a moving train and orbit controls.
- 🌙 **Lofi Tokyo Twilight Theme** — Deep twilight purple backgrounds, warm sunset gradients, amber ember particles, and glassmorphism cards.
- ⚡ **Framer Motion Animations** — Smooth scroll-triggered spring animations with 3D reveal effects on every section.
- 🏆 **Competitive Programming Stats** — Live links to LeetCode, HackerRank, and GeeksforGeeks profiles.
- 📬 **Functional Contact Form** — Emails sent directly to inbox via Node.js + Nodemailer backend.
- 📱 **Fully Responsive** — Adapts seamlessly across all screen sizes.

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| **Frontend** | React 19, Vite 8, Tailwind CSS v4 |
| **3D** | React Three Fiber, Three.js, Drei |
| **Animations** | Framer Motion |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Email** | Nodemailer (Gmail) |
| **Icons** | Lucide React, React Icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB running locally (or a MongoDB Atlas URI)

### Installation

```bash
# Clone the repository
git clone https://github.com/kenzo78766/Portfolio_Website.git
cd Portfolio_Website

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### Configure Environment

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **Note:** Use a [Gmail App Password](https://support.google.com/accounts/answer/185833), not your regular login password.

### Run Locally

```bash
# Start the backend (from /server)
node server.js

# Start the frontend (from /client)
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
Portfolio_Website/
├── client/                  # React Frontend
│   ├── public/              # Static assets (3D .glb models, favicon)
│   └── src/
│       ├── components/      # All React components
│       └── index.css        # Global Tailwind styles
└── server/                  # Express Backend
    ├── models/              # Mongoose schemas
    ├── routes/              # API routes
    └── server.js            # Entry point
```

---

## 👤 Author

**Anshuman Singh**
- 🌐 Portfolio: [kenzo78766/Portfolio_Website](https://github.com/kenzo78766/Portfolio_Website)
- 💼 LinkedIn: [linkedin.com/in/anshuman78766](https://www.linkedin.com/in/anshuman78766/)
- 💻 GitHub: [@kenzo78766](https://github.com/kenzo78766)
- 📧 Email: [anshumanboard1@gmail.com](mailto:anshumanboard1@gmail.com)
- 🏅 LeetCode: [kenzo_lk6](https://leetcode.com/u/kenzo_lk6/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by <strong>Anshuman Singh</strong>
</div>
