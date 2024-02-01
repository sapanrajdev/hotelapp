// StayDuration.jsx

import React, { useState, useEffect, useCallback } from "react";

interface IStayDurationProps {
  price: number;
}
export const StayDuration = ({ price }: IStayDurationProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [validationError, setValidationError] = useState("");

  const calculateTotalPrice = useCallback(() => {
    if (checkIn && checkOut) {
      const pricePerNight = price;
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const timeDifference = endDate.getTime() - startDate.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      const totalCost = pricePerNight * daysDifference;
      setTotalPrice(totalCost);
    }
  }, [checkIn, checkOut, price]);

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice, checkIn, checkOut, price]);

  const handleCheckInChange = (e: any) => {
    const selectedDate = e.target.value;
    setCheckIn(selectedDate);
    setValidationError("");

    // Check if selected date is not before the current date
    const currentDate = new Date().toISOString().split("T")[0];
    if (selectedDate < currentDate) {
      setValidationError("Check-in date cannot be a past date.");
    }
  };

  const handleCheckOutChange = (e: any) => {
    const selectedDate = e.target.value;
    setCheckOut(selectedDate);
    setValidationError("");

    // Check if selected date is not before the check-in date
    if (checkIn && selectedDate < checkIn) {
      setValidationError("Check-out date cannot be before the check-in date.");
    }
  };

  return (
    <div className="stay-duration">
      <div>
        Check in{" "}
        <input
          type="date"
          value={checkIn}
          onChange={handleCheckInChange}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div>
        Check out{" "}
        <input
          type="date"
          value={checkOut}
          onChange={handleCheckOutChange}
          min={checkIn ? checkIn : new Date().toISOString().split("T")[0]}
        />
      </div>
      {validationError && (
        <div className="error-message">{validationError}</div>
      )}
      <div>Total Price: ₹{totalPrice}</div>
    </div>
  );
};
