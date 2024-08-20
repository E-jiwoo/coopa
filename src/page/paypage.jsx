import React from "react";
import * as S from "./style";
import axios from "axios";
import card from "../assets/card.svg";
import phone from "../assets/phone.svg";
import money from "../assets/money.svg";
import aripay from "../assets/aripay.svg";

const PayPage = () => {
  return (
    <>
      <S.Title>결제 수단</S.Title>
      <S.pay>
        <S.pay1>
          <S.card src={card} alt="card" />
          <S.card_>신용카드</S.card_>
        </S.pay1>
        <S.pay2>
          <S.phone src={phone} alt="phone" />
          <S.phone_>QR 결제</S.phone_>
        </S.pay2>
        <S.pay3>
          <S.money src={money} alt="money" />
          <S.money_>현금</S.money_>
        </S.pay3>
        <S.pay4>
          <S.aripay src={aripay} alt="aripay" />
          <S.aripay_>아리페이</S.aripay_>
        </S.pay4>
      </S.pay>
    </>
  );
};

export default PayPage;
