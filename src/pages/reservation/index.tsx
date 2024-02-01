// Reservation.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelDetails from "./HotelDetails";
import { StayDuration } from "./StayDuration";
import UserInfoForm from "./UserInfoForm";
import Checkout from "./Checkout";
import "./index.css";
import { useParams } from "react-router-dom";
import { getHotelById } from "../../store/slices/hotelsSlice";

const Reservation: React.FC = () => {
  const { hotelId } = useParams();

  const dispatch = useDispatch();
  const { detailedHotel } = useSelector((state: any) => state.hotelsData);

  useEffect(() => {
    dispatch(getHotelById(hotelId));
  }, [dispatch, hotelId]);

  return (
    <div className="reservation-container">
      <HotelDetails selectedHotel={detailedHotel} />
      <StayDuration price={detailedHotel.price} />
      <UserInfoForm />
      <Checkout />
    </div>
  );
};

export default Reservation;
