# 🔐 Admin Portal with Authentication (Next.js)

A full-stack Admin Portal built using **Next.js App Router**, **Prisma**, and **MongoDB**.  
This project demonstrates authentication, protected routes, and clean backend APIs.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🚀 Features

- User Registration & Login
- Secure password hashing (bcrypt)
- Protected routes
- Admin dashboard
- Prisma ORM with migrations
- Clean and scalable project structure

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Prisma
- MongoDB
- bcryptjs
- Tailwind CSS

---

## 📂 Project Structure

app/
├── api/
│ ├── auth/
│ ├── users/
│ └── admin/
├── login/
├── register/
├── admin/
├── profile/
└── components/
lib/
└── prisma.ts
prisma/
├── schema.prisma
└── migrations/
public/

yaml


---

## ⚙️ Getting Started (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/admin-portal.git
cd admin-portal
2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables
Create a .env file in the root:
env
DATABASE_URL="your_database_url_here"
4️⃣ Prisma setup
npx prisma generate
npx prisma migrate dev
5️⃣ Run the project
npm run dev


🧪 Testing
Register a new user
Log in with credentials
Access protected routes
Test admin functionality

👨‍💻 Author
Prakhar Barange
B.Tech (ECE) | Full Stack & AI Enthusiast
