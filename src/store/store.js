import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/shop(main04)/CartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  }
});