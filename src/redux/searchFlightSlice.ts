import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightData: null,
};

export const searchFlightSlice = createSlice({
    name: "searchFlight",
    initialState,
    reducers: {
      setFlightData: (state, action) => {
        console.log("Reducer updating state: ", action.payload); // Debugging log
        state.flightData = action.payload.flightData ?? null; // Ensure fallback value
      },
    },
  });
  

export const { setFlightData } = searchFlightSlice.actions;
export default searchFlightSlice.reducer;