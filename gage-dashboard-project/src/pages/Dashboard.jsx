// src/components/Dashboard.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";

  return (
    <><div className="vh-100 vw-100">
      <Header email={email} />
      <div className="container ">
        <h2>Welcome, {email} 👋</h2>
        <p>This is your Dashboard with access to green energy data.</p>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
