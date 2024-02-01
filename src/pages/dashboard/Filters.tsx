// Filters.tsx

import React, { useState } from "react";
import { HotelData } from "../../__mocks__/hotels";
import { useDispatch } from "react-redux";
import { onFilter } from "../../store/slices/hotelsSlice";

interface FiltersProps {
  hotels: HotelData[];
}

interface FilterCriteria {
  minPrice?: string;
  maxPrice?: string;
  location?: string;
}

const Filters: React.FC<FiltersProps> = ({ hotels }) => {
  const [priceRange, setPriceRange] = useState<FilterCriteria>({});
  const [location, setLocation] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleFilter = () => {
    // Call the onFilter function passed as a prop with the filter criteria
    dispatch(onFilter({ ...priceRange, location }));
  };

  // Assuming hotelRes is your list of hotels
  const uniqueLocations = (hotels: HotelData[]) => {
    // Get all unique locations using Set
    const locationsSet = new Set(hotels.map((hotel) => hotel.location));

    // Convert Set to an array
    const uniqueLocationsArray = Array.from(locationsSet);

    return uniqueLocationsArray;
  };

  // Call the function to get unique locations
  const locations = uniqueLocations(hotels);

  return (
    <div className="filters-container">
      <div className="page-details">
        <label className="total-count">
          Bangalore: {hotels.length} properties found
        </label>
      </div>
      <div className="filters-wrapper">
        <button
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {showFilters && (
          <div className="filter-options">
            <div className="filter-input">
              <label className="filter-label" htmlFor="minPrice">
                Min Price:
              </label>
              <input
                autoComplete="off"
                type="text"
                id="minPrice"
                value={priceRange.minPrice || ""}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, minPrice: e.target.value })
                }
              />
            </div>
            <div className="filter-input">
              <label className="filter-label" htmlFor="maxPrice">
                Max Price:
              </label>
              <input
                autoComplete="off"
                type="text"
                id="maxPrice"
                value={priceRange.maxPrice || ""}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, maxPrice: e.target.value })
                }
              />
            </div>
            <div className="filter-input">
              <label className="filter-label" htmlFor="location">
                Location:
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((location) => {
                  return (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="apply-button" onClick={handleFilter}>
              Apply Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
