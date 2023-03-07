import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/shop(main04)/CartSlice";
// import reservationReducer from "../features/reservation/reservationSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    // reservation: reservationReducer
  }
});