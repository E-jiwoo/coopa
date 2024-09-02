import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import arrow from "../assets/arrow.svg";
import card from "../assets/card.svg";
import phone from "../assets/phone.svg";
import money from "../assets/money.svg";
import aripay from "../assets/aripay.svg";
import check from "../assets/check.svg";

const PayPage = () => {
  const [PayModal, setPayModal] = useState(false);
  const total = 0;
  const navigate = useNavigate();

  const onClickBack = () => {
    console.log("click");
    navigate("/");
  };

  const handlePayClick = () => {
    setPayModal(true);
  };

  return (
    <>
      <S.Arrow src={arrow} alt="arrow" onClick={onClickBack} />
      <S.Title>결제 수단</S.Title>
      <S.Listbox>
        <S.Categorly1>물품 목록</S.Categorly1>
        <S.Categorly2>수량</S.Categorly2>
        <S.Categorly3>가격</S.Categorly3>
        <S.PlusBtn>
          <S.Plus_BtnText>상품 추가</S.Plus_BtnText>
        </S.PlusBtn>
        <S.Line />
        <S.TotalText>
          <S.Text>금액</S.Text>
          <S.Text>{total.toLocaleString()}원 결제</S.Text>
        </S.TotalText>
      </S.Listbox>
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
        <S.Pay4 onClick={handlePayClick}>
          <S.Aripay src={aripay} alt="aripay" />
          <S.Aripay_>아리페이</S.Aripay_>
        </S.Pay4>
      </S.Pay>

      {PayModal && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalImg src={check} alt="check" />
            <S.ModalAccount>5,900원</S.ModalAccount>
            <S.ModalText>결제 완료되었습니다!</S.ModalText>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default PayPage;
