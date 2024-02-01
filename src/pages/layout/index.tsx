// Layout.jsx

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../App.css";

export const Layout = () => {
  const navigate = useNavigate();
  // You can replace this with the actual user data from your authentication system
  const user = {
    firstName: "Sapan",
    lastName: "Rajdev",
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  // Function to get initials from the user's name
  const getInitials = () => {
    return user.firstName.charAt(0) + user.lastName.charAt(0);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h2>
          <span onClick={() => navigate(-1)} className="back-btn">
            ←
          </span>
          Hotel App
        </h2>
        <div title={user.getFullName()} className="user-initials">
          {getInitials()}
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
