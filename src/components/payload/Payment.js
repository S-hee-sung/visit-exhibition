import React, { useEffect } from 'react';
import styled from "styled-components";

const PaymentBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 30px 0 70px 0;
.paymentBtn {
  width: 140px;
  height: 50px;
  color: #fff;
  background-color: #000;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
}
.paymentBtn:hover {
  background-color: #656565;
  border: 1px solid #656565;
}
`;

const Payment = () => {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery); document.head.removeChild(iamport);
    }
  }, []);
  
const onClickPayment = () => {
  const { IMP } = window;
  // IMP.init('imp23418340'); // 결제 데이터 정의
  IMP.init('imp19424728'); // 결제 데이터 정의 -> 식별코드가 작동을 안해 예제 식별코드로 작성,,
  const data = {
    pg: 'html5_inicis', // PG사 (필수항목) //html5_inicis
    pay_method: 'card', // 결제수단 (필수항목)
    merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
    name: '결제 테스트', // 주문명 (필수항목)
    amount: '1000', // 금액 (필수항목)
    custom_data: { name: '부가정보', desc: '세부 부가정보' },
    buyer_name: '홍길동', // 구매자 이름
    buyer_tel: '010-1234-5678', // 구매자 전화번호 (필수항목)
    buyer_email: 'exam@naver.com', // 구매자 이메일
    buyer_addr: '서울시 방배동',
  };
  IMP.certification(data, callback);
  IMP.request_pay(data, callback);
}
  
  const callback = (response) => {
    const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  }
  
  return (
    <PaymentBtnWrapper>
      <button className='paymentBtn' onClick={onClickPayment} >
        결제하기
      </button>
    </PaymentBtnWrapper>
  );
}
  
  export default Payment;