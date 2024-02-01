// Success.jsx
import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

const ResultPage = () => {
  const { userInfo } = useSelector((state: any) => state.hotelsData);

  return (
    <div className="result-container">
      <h2>Booking Successful</h2>
      <p>Your booking has been successfully processed. Thank you!</p>

      {userInfo && (
        <div>
          <h3>Booking Details:</h3>
          <p>
            <strong>First Name:</strong> {userInfo.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userInfo.lastName}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Contact:</strong> {userInfo.contact}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
