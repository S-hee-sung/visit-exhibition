import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      console.log("increase action", action);
      const targetItem = state.cartList.find((cart) => { return cart.id === action.payload; });
      targetItem.count += 1;
    },
    decreaseCount: (state, action) => {
      console.log("decrease action", action);
      const targetItem = state.cartList.find((cart) => { return cart.id === action.payload; });
      if (targetItem.count > 1) targetItem.count -= 1;
    },
    addItemToCart: (state, action) => {
      console.log("add action", action);
      const targetItem = state.cartList.find((cart) => {
        console.log("actionId", action.payload.id);
        console.log("cartId", cart.id);
        return cart.id === action.payload.id;
      });
      console.log("target", targetItem);
      if (targetItem) {
        targetItem.count += action.payload.count;
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeItemFromCart: (state, { payload: id }) => {
      const targetIndex = state.cartList.findIndex((cart) => cart.id === id);
      state.cartList.splice(targetIndex, 1);
    }
  }
});

export const { addItemToCart, increaseCount, decreaseCount, removeItemFromCart } = cartSlice.actions;
export const selectCartList = state => state.cart.cartList;
export default cartSlice.reducer;