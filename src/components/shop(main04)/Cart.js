import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectCartList, increaseCount, decreaseCount, removeItemFromCart } from "../shop(main04)/CartSlice";
import HorizonLine from "../main(main01)/HorizonLine";
import Payment from "../payload/Payment";


const CartWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  /* background-color: yellow; */
  .inner {
    margin: 0 auto;
    max-width: 1200px;
    height: 100%;
    padding-top: 220px;
    text-align: center;
    /* background-color: pink; */
  }
`;

function Cart(props) {

  const cartAdd = useSelector(selectCartList);
  console.log(cartAdd);
  const dispatch = useDispatch();

  const arr1 = [...cartAdd];
  const totalPrice = arr1.reduce((stack, el) => {
    return stack + (el.price * el.count);
  }, 0);
  console.log("totalPrice", totalPrice);

  const arr2 = [...cartAdd];
  const totalCount = arr2.reduce((stack, el) => {
    return stack + (el.count);
  }, 0);
  console.log("totalCount", totalCount);

  // console.log(data);

  return (
    <CartWrapper>
      <div className="inner">
        <Table hover>
          <thead>
            <tr>
              <th>no</th>
              <th>상품명</th>
              <th>상품 가격</th>
              <th>수량</th>
              <th>총 가격</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {cartAdd.map((cart, index) => (
              <>
                <tr key={cart.id}>
                  <td>{index + 1}</td>
                  <td>{cart.title}</td>
                  <td>{`${cart.price}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                  <td>
                    <Button variant="outline-warning" size="sm"
                      onClick={() => { dispatch(decreaseCount(cart.id)); }}> - </Button>
                    {` ${cart.count} `}
                    <Button variant="outline-warning" size="sm"
                      onClick={() => { dispatch(increaseCount(cart.id)); }}> + </Button>
                  </td>
                  <td>{` ${cart.count * cart.price}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                  <td>
                    <Button variant="outline-danger" size="sm"
                      onClick={(e) => { dispatch(removeItemFromCart(cart.id)); }}> x </Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
        <HorizonLine />
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>총 주문 수량</th>
              <th>최종 결제 금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{''}</td>
                <td style={{ fontSize: 30, fontWeight: 700, color: '#EC7D2C' }}>{`${totalCount}개`}</td>
                <td style={{ fontSize: 30, fontWeight: 700, color: '#EC7D2C' }}>{`${totalPrice}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
          </tbody>
        </Table>
        <HorizonLine />
        <Payment />
      </div>
    </CartWrapper>
  );
}

export default Cart;