import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectCartList, increaseCount } from "../shop(main04)/CartSlice";


const CartWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 700px;
  background-color: yellow;
  .inner {
    margin: 0 auto;
    max-width: 1200px;
    height: 700px;
    padding-top: 220px;
    background-color: pink;
  }
`;

function Cart(props) {

  const cartAdd = useSelector(selectCartList);
  console.log(cartAdd);
  // const dispatch = useDispatch();

  // console.log(data);

  return (
    <CartWrapper>
      <div className="inner">
        <Table hover>
          <thead>
            <tr>
              <th>no</th>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {cartAdd.map((cart, index) => (
              <tr key={cart.id}>
                <td>{index + 1}</td>
                <td>{cart.title}</td>
                <td>{cart.price}</td>
                <td>
                  <Button variant="outline-secondary"> - </Button>
                  {/* <Button variant="outline-secondary"
                    onClick={() => { dispatch(increaseCount(cart.id)); }}> + </Button> */}
                </td>
                <td>
                  <Button variant="outline-success"> x </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CartWrapper>
  );
}

export default Cart;