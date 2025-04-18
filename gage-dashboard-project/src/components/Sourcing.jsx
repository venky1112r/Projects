// pages/Sourcing.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Sourcing = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";

  return (
    <>
      <Header email={email} />
      <div className="container mt-4">
        <h2>Sourcing Page</h2>
        <p>Welcome {email}. Sourcing related data will be shown here.</p>
      </div>
    </>
  );
};

export default Sourcing;
