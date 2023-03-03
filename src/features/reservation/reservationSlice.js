import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservationList: [],
  selectedReservation: {},
  status: 'reservation'
}

export const reservationSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.reservationList = action.payload
    },
    getAllProductsByID: (state, action) => {
      state.selectedReservation = action.payload
    },
  }
})

export const { getAllProducts, getAllProductsByID } = reservationSlice.actions;

export const selectedReservationList = state => state.product.reservationList;
export const selectSelectedReservation = state => state.product.selectedReservation;

export default reservationSlice.reducer;