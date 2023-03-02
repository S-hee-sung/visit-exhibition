import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    // {
    //   id: "1",
    //   title: "ALL OF THEM WITCHES' PUZZLE 500",
    //   price: 28900,
    //   count: 1
    // },
    // {
    //   id: "2",
    //   title: "백자청화초화문편병 굽접시",
    //   price: 32900,
    //   count: 3
    // },
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      const targetItem = state.cartList.find((cart) => { return cart.id === action.payload; });
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find((cart) => { return cart.id === id; });
      targetItem.count -= 1;
    },

    addItemToCart: (state, { payload: item }) => {
      const targetItem = state.cartList.find((cart) => cart.id === item.id);
      if (targetItem) {
        targetItem.count += item.count;
      } else {
        state.cartList.push(item);
      }
    },

    removeItemFromCart: (state, { payload: id }) => {
      const targetIndex = state.cartList.findIndex((cart) => cart.id === id);
      state.cartList.splice(targetIndex, 1);
    }
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;