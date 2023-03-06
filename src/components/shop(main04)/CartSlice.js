import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: "1",
      title: "'ALL OF THEM WITCHES' PUZZLE 500",
      price: 28900,
      count: 1
    },
    {
      id: "2",
      title: "백자청화초화문편병 굽접시",
      price: 32900,
      count: 2
    },
    {
      id: "3",
      title: "나탈리 카르푸셴코 나무 엽서",
      price: 9000,
      count: 3
    }
  ]
}

// cartList: [
//   {
//     id: "1",
//     title: "ALL OF THEM WITCHES' PUZZLE 500",
//     price: 28900,
//     count: 1
//   },
//   {
//     id: "2",
//     title: "백자청화초화문편병 굽접시",
//     price: 32900,
//     count: 3
//   },
// ]

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action);

      const targetItem = state.cartList.find((cart) => cart.id === action.id);
      if (targetItem) {
        targetItem.count += action.count;
      } else {
        state.cartList.push(action.payload);
      }
    }
  }
});

export const { addItemToCart } = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;