import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { addItemToCart, selectCartList } from './CartSlice';
// import data from "../../data6.json";


const CartWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 700px;
  background-color: yellow;
  .inner {
    margin: 0 auto;
    max-width: 1200px;
    height: 700px;
    background-color: pink;
  }
  .cartTable {
    width: 1100px;
    position: relative;
    margin: 0 auto;
    top: 250px;
    /* z-index: 99999; */
  }
  table, tr, th, td {
    width: 170px;
    height: 50px;
    border: 1px solid #656565;
  }
`;

function Cart(props) {

  // const cartAdd = useSelector(selectCartList);
  // const dispatch = useDispatch();

  // console.log(data);

  return (
    <CartWrapper>
      <div className="inner">
        <table className="cartTable">
          <tbody>
            <tr>
              <th>No.</th>
              <th>상품명</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
            </tr>
            <tr>
              <td>E</td>
              <td>F</td>
              <td>G</td>
              <td>H</td>
            </tr>
          </tbody>
        </table>

        {/* <tbody>
          {cartAdd.map((cart, index) => (
            <tr key={cart.id}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <button onClick={() => { dispatch(decreaseCount(cart.id)); }}> - </button>
                <button onClick={() => { dispatch(increaseCount(cart.id)); }}> + </button>
              </td>
              <td>{cart.price * cart.count}원</td>
              <td>
                <button onClick={(e) => {dispatch(removeItemFromCart(cart.id));}}> x </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </div>
    </CartWrapper>
  );
}

export default Cart;