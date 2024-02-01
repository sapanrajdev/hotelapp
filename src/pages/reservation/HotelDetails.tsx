// HotelDetails.jsx
import React from "react";
import { HotelData } from "../../__mocks__/hotels";

interface HotelDetailsProps {
  selectedHotel: HotelData;
}
const HotelDetails = ({ selectedHotel }: HotelDetailsProps) => (
  <div className="hotel-details-wrapper">
    <img
      width={100}
      height={100}
      src={selectedHotel.image}
      alt={selectedHotel.name}
    />
    <div className="hotel-details">
      <div className="hotel-title">{selectedHotel.name}</div>
      <div className="hotel-location">{selectedHotel.location}</div>
      <div className="hotel-price">{selectedHotel.price}</div>
      <div className="hotel-rating">
        {Array(selectedHotel.rating)
          .fill(0)
          .map((_, index) => (
            <span key={index + 1}>★</span>
          ))}
      </div>
    </div>
  </div>
);

export default HotelDetails;
