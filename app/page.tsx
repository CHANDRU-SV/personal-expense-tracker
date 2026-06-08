"use client";

import { useState } from "react";

export default function Home() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [expenses, setExpenses] = useState([
    { name: "Petrol", amount: 500, category: "Petrol/Diesel" },
    { name: "Jio Recharge", amount: 399, category: "Mobile Recharge" },
  ]);

  const categories = [
    "Food",
    "Grocery",
    "Petrol/Diesel",
    "Mobile Recharge",
    "WiFi Recharge",
    "Medical",
    "Travel",
    "Shopping",
    "Bills",
  ];

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const addExpense = () => {
    if (!expenseName || !amount) {
      alert("Please enter expense name and amount");
      return;
    }

    setExpenses([
      ...expenses,
      {
        name: expenseName,
        amount: Number(amount),
        category,
      },
    ]);

    setExpenseName("");
    setAmount("");
  };

  const deleteExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #dcfce7 100%)",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          color: "#1f2937",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          💰 Personal Expense Tracker
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Manage your daily expenses in one place
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            style={{
              padding: "12px",
              flex: 1,
              borderRadius: "10px",
              border: "1px solid #d1d5db",
            }}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              padding: "12px",
              flex: 1,
              borderRadius: "10px",
              border: "1px solid #d1d5db",
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              minWidth: "180px",
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button
            onClick={addExpense}
            style={{
              padding: "12px 20px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Expense
          </button>
        </div>

        <div
          style={{
            background: "#dcfce7",
            color: "#166534",
            padding: "15px",
            borderRadius: "15px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "25px",
          }}
        >
          Total Expenses: ₹{totalExpense}
        </div>

        <h2>Expense Categories</h2>

        {categories
          .filter((cat) =>
            expenses.some(
              (expense) => expense.category === cat
            )
          )
          .map((cat) => (
            <div key={cat} style={{ marginBottom: "25px" }}>
              <h3>{cat}</h3>

              {expenses
                .filter(
                  (expense) => expense.category === cat
                )
                .map((expense) => (
                  <div
                    key={`${expense.name}-${expense.amount}`}
                    style={{
                      background: "#ffffff",
                      color: "#1f2937",
                      borderRadius: "15px",
                      padding: "15px",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <span>
                      {expense.name} - ₹{expense.amount}
                    </span>

                    <button
                      onClick={() =>
                        deleteExpense(
                          expenses.indexOf(expense)
                        )
                      }
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "#fca5a5";
                        e.currentTarget.style.boxShadow =
                          "0 0 15px rgba(239,68,68,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "#fecaca";
                        e.currentTarget.style.boxShadow =
                          "none";
                      }}
                      style={{
                        background: "#fecaca",
                        color: "#b91c1c",
                        border: "none",
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}