import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
};

export const navSlice = createSlice({
    name : "nav",
    initialState,
    reducers: {
        setOrigin: (state,action) => {
            state.origin = action.payload;
        },
        setDestination: (state,action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state,action) => {
            state.travelTimeInformation = action.payload;
        },

    },
});

export const { setOrigin, setDestination,setTravelTimeInformation} = 
navSlice.actions;

// Selectors; pull the data pushed into the data-layer
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

// configuring with store.js
export default navSlice.reducer