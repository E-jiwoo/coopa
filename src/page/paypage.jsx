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
        </S.pay1>
        <S.pay2>
          <S.phone src={phone} alt="phone" />
        </S.pay2>
        <S.pay3>
          <S.money src={money} alt="money" />
        </S.pay3>
        <S.pay4>
          <S.aripay src={aripay} alt="aripay" />
        </S.pay4>
      </S.pay>
    </>
  );
};

export default PayPage;
