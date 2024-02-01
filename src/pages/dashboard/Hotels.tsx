// Dashboard.jsx

import React from "react";
import { HotelData } from "../../__mocks__/hotels";
import "./index.css";
import { Link } from "react-router-dom";

interface HotelsProps {
  hotels: HotelData[];
}

export const Hotels: React.FC<HotelsProps> = ({ hotels }) => {
  return (
    <div className="hotel-listing">
      {hotels.map((hotel: HotelData) => (
        <div key={hotel.id} className="hotel-card">
          <div className="hotel-image">
            <img src={hotel.image} alt={hotel.name} />
          </div>
          <div className="hotel-details">
            <h3>{hotel.name}</h3>
            <p>
              <strong>Location:</strong> {hotel.location}
            </p>
            <p>
              <strong>Price:</strong> ₹{hotel.price} <small>per night</small>
            </p>

            <Link to={`/reservation/${hotel.id}`}>
              <button className="book-hotel">Book</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
