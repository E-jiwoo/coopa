import React from "react";
import * as S from "./style";
import axios from "axios";
import arrow from "../assets/arrow.svg";
import card from "../assets/card.svg";
import phone from "../assets/phone.svg";
import money from "../assets/money.svg";
import aripay from "../assets/aripay.svg";

const PayPage = () => {
  return (
    <>
      <S.Arrow src={arrow} alt="arrow" />
      <S.Title>결제 수단</S.Title>
      <S.Pay>
        <S.Pay1>
          <S.Card src={card} alt="card" />
          <S.Card_>신용카드</S.Card_>
        </S.Pay1>
        <S.Pay2>
          <S.Phone src={phone} alt="phone" />
          <S.Phone_>QR 결제</S.Phone_>
        </S.Pay2>
        <S.Pay3>
          <S.Money src={money} alt="money" />
          <S.Money_>현금</S.Money_>
        </S.Pay3>
        <S.Pay4>
          <S.Aripay src={aripay} alt="aripay" />
          <S.Aripay_>아리페이</S.Aripay_>
        </S.Pay4>
      </S.Pay>
    </>
  );
};

export default PayPage;
