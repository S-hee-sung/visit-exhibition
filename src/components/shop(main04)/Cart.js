import React from "react";
import styled from "styled-components";

const CartWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 500px;
  background-color: yellow;
  .inner {
    margin: 0 auto;
    max-width: 1200px;
    height: 500px;
    background-color: pink;
  }
  .cartTable {
    position: relative;
    margin: 0 auto;
    top: 300px;
    z-index: 99999;
    border: 1px solid #656565;
  }
  th, td {
    width: 170px;
    height: 50px;
  }
`;

function Cart(props) {
  return (
    <CartWrapper>
      <div className="inner">
        <table className="cartTable">
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
        </table>

      </div>
    </CartWrapper>

  )

}

export default Cart;