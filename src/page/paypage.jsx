import React from "react";
import * as S from "./style";
import axios from "axios";
import aripay from "../assets/aripay.svg";
import card from "../assets/card.svg";
import money from "../assets/money.svg";
import phone from "../assets/phone.svg";

const PayPage = () => {
  return (
    <>
      <S.Title>결제 수단</S.Title>
      <S.pay>
        <S.pay1>
          <S.Card />
        </S.pay1>
        <S.pay2></S.pay2>
        <S.pay3></S.pay3>
        <S.pay4></S.pay4>
      </S.pay>
    </>
  );
};

export default PayPage;
