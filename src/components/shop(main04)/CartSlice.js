import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    // {
    //   id: "1",
    //   title: "'ALL OF THEM WITCHES' PUZZLE 500",
    //   price: 28900,
    //   count: 1
    // },
    // {
    //   id: "2",
    //   title: "백자청화초화문편병 굽접시",
    //   price: 32900,
    //   count: 2
    // },
    // {
    //   id: "3",
    //   title: "나탈리 카르푸셴코 나무 엽서",
    //   price: 9000,
    //   count: 3
    // }
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

      const targetItem = state.cartList.find((item) => item.id === action.payload.id);


      if (targetItem) {
        targetItem.count += action.count;
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