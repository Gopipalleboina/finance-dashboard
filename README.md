💰 Finance Dashboard
A responsive finance dashboard for tracking income, expenses, and spending insights with interactive charts and role-based access.

🚀 Live Demo
👉 https://your-vercel-link.vercel.app

📂 GitHub Repository
👉 (https://github.com/Gopipalleboina/finance-dashboard)

📌 Overview
This project is a simple and interactive finance dashboard built as part of a Frontend Developer Intern assignment.

It allows users to:
View financial summary (balance, income, expenses)
Explore transactions
Analyze spending patterns
Switch roles (Viewer/Admin)
Add new transactions (Admin only)
The focus of this project is on UI design, component structure, and frontend state management.

✨ Features
📊 Dashboard Overview
Total Balance, Income, and Expenses cards
Dynamic calculations based on transaction data

📈 Charts
Line chart for balance trend
Pie chart for spending breakdown

📋 Transactions Table
Displays all transactions
Search by category
Filter by type (Income / Expense)

🔐 Role-Based UI
Viewer → can only view data
Admin → can add transactions

➕ Add Transaction
Add new expense dynamically
Updates UI instantly

💡 Insights Section
Shows highest spending category
Displays total spending

🌙 Dark Mode
Toggle between light and dark theme

💾 Data Persistence
Uses localStorage to save transactions
🛠️ Tech Stack
React.js
Tailwind CSS
Recharts (for charts)
JavaScript (ES6)

📁 Project Structure
src/ ├── components/ │ ├── Charts.jsx │ ├── SummaryCard.jsx │ ├── TransactionTable.jsx │ ├── RoleSwitcher.jsx │ └── Insights.jsx │ ├── pages/ │ └── Dashboard.jsx │ ├── data/ │ └── mockData.js │ ├── App.jsx └── main.jsx

⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/Gopipalleboina/finance-dashboard.git

Navigate to project folder:
cd finance-dashboard

Install dependencies:
npm install

Run the project:
npm run dev

🧠 Approach

Used React state to manage transactions and UI
Implemented filtering and search using array methods
Used conditional rendering for role-based UI
Designed reusable components for better structure
Ensured responsive layout using Tailwind CSS

🎯 Key Highlights

Clean and modern UI

Fully responsive design

Dynamic data updates

Simple and scalable structure

Good user experience

📌 Notes

This project uses mock data (no backend)

Focus is on frontend logic and UI

Designed for demonstration and evaluation purposes

🙌 Acknowledgement
This project was built as part of a frontend assignment to demonstrate practical development skills.
