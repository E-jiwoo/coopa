import React from "react";
import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";

const AddPage = () => {
  const total = 0;
  const navigate = useNavigate();

  const onClickNext = () => {
    console.log("click1");
    navigate("/pay");
  };

  const onClickBack = () => {
    console.log("click2");
    navigate("/");
  };

  return (
    <>
      <S.Arrow src={arrow} alt="arrow" onClick={onClickBack} />
      <S.Title>상품 직접 입력</S.Title>
      <S.Listbox>
        <S.Categorly1>물품 목록</S.Categorly1>
        <S.Categorly2>수량</S.Categorly2>
        <S.Categorly3>가격</S.Categorly3>
        <S.PayBtn onClick={onClickNext}>
          <S.Pay_BtnText>{total.toLocaleString()}원 결제</S.Pay_BtnText>
        </S.PayBtn>
      </S.Listbox>
      <S.PayBox>
        <S.Pay>
          <S.PayText>도리토스</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>빼빼로</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>포카리스웨트</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>아리페이</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>아리페이</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>아리페이</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>아리페이</S.PayText>
        </S.Pay>
        <S.Pay>
          <S.PayText>아리페이</S.PayText>
        </S.Pay>
      </S.PayBox>
    </>
  );
};

export default AddPage;
