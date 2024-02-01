// hotelsSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HotelData, hotelResponse } from "../../__mocks__/hotels";

export interface HotelsState {
  isLoading: boolean;
  hotels: HotelData[];
  originalHotels: HotelData[];
  detailedHotel: HotelData | {};
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
  };
}

const initialState: HotelsState = {
  isLoading: false,
  hotels: [],
  originalHotels: [],
  detailedHotel: {},
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  },
};

export const getAllHotels = createAsyncThunk("products", async () => {
  const response = hotelResponse.data;
  await Promise.resolve();
  return response;
});
export const saveUserInfo = createAsyncThunk("userInfo", (userInfo) => {
  // Return the user information directly
  return userInfo;
});

const getFilteredList = (
  state: HotelsState,
  action: { payload: any; type: string }
) => {
  const { minPrice, maxPrice, location } = action.payload;
  // Implement your filtering logic here based on the criteria
  const filtered = state.originalHotels.filter((hotel: any) => {
    const withinPriceRange =
      (!minPrice || parseInt(minPrice, 10) <= hotel.price) &&
      (!maxPrice || parseInt(maxPrice, 10) >= hotel.price);
    const hasLocation =
      !location ||
      hotel.location.toLowerCase().includes(location.toLowerCase());
    return withinPriceRange && hasLocation;
  });
  return filtered;
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    onFilter: (state, action) => {
      return {
        ...state,
        hotels: getFilteredList(state, action),
      };
    },
    setFormData: (state, action) => {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.payload.key]: action.payload.value,
        },
      };
    },
    getHotelById: (state, action) => {
      const selectedHotel = state.hotels.find(
        (hotel) => hotel.id == action.payload
      );
      return {
        ...state,
        detailedHotel: selectedHotel || {}, // Use an empty object if no hotel is found
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHotels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotels = action.payload;
      state.originalHotels = action.payload;
    });
    builder.addCase(saveUserInfo.fulfilled, (state, action) => {
      // Save user information to the Redux state
      state.userInfo = action.payload as any;
    });
  },
});

// Action creators are generated for each case reducer function
export const { onFilter, getHotelById, setFormData } = hotelsSlice.actions;

export default hotelsSlice.reducer;
