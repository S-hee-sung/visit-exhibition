import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservation/reservationSlice";

export default configureStore({
  reducer: {
    reservation: reservationReducer
  }
});