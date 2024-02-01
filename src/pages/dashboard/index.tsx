// Dashboard.tsx

import React, { useEffect } from "react";
import { Hotels } from "./Hotels";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../../store/slices/hotelsSlice";

export interface FilterCriteria {
  minPrice?: string;
  maxPrice?: string;
  location?: string;
}

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const hotelsData = useSelector((state: any) => state.hotelsData);

  useEffect(() => {
    dispatch(getAllHotels() as any);
  }, [dispatch]);

  return (
    <div>
      <Filters hotels={hotelsData.hotels} />
      <Hotels hotels={hotelsData.hotels} />
    </div>
  );
};
