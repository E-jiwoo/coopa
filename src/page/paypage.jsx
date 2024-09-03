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
    navigate(-1);
  };

  const onClickAdd = () => {
    console.log("click");
    navigate("/add");
  };

  const handlePayClick = () => {
    setPayModal(true);
  };

  const handleCloseModal = () => {
    setPayModal(false);
    navigate("/");
  };

  return (
    <>
      <S.Arrow src={arrow} alt="arrow" onClick={onClickBack} />
      <S.Title>결제 수단</S.Title>
      <S.Listbox>
        <S.Categorly1>물품 목록</S.Categorly1>
        <S.Categorly2>수량</S.Categorly2>
        <S.Categorly3>가격</S.Categorly3>
        <S.Line />
        <S.TotalText>
          <S.Text>금액</S.Text>
          <S.Text>{total.toLocaleString()}원 결제</S.Text>
        </S.TotalText>
      </S.Listbox>
      <S.PayBox>
        <S.Pay>
          <S.PayImg src={card} alt="card" />
          <S.PayText>신용카드</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayImg src={phone} alt="phone" />
          <S.PayText>QR 결제</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayImg src={money} alt="money" />
          <S.PayText>현금</S.PayText>
        </S.Pay>
        <S.Pay onClick={handlePayClick}>
          <S.PayImg src={aripay} alt="aripay" />
          <S.PayText>아리페이</S.PayText>
        </S.Pay>
      </S.PayBox>

      {PayModal && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalImg src={check} alt="check" />
            <S.ModalAccount>5,900원</S.ModalAccount>
            <S.ModalText>결제 완료되었습니다!</S.ModalText>
            <S.ModalButton_OK onClick={handleCloseModal}>
              계속 결제하기
            </S.ModalButton_OK>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default PayPage;
