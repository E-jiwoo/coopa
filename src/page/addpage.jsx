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
        <S.PlusBtn>
          <S.Plus_BtnText>상품 추가</S.Plus_BtnText>
        </S.PlusBtn>
        <S.PayBtn onClick={onClickNext}>
          <S.Pay_BtnText>{total.toLocaleString()}원 결제</S.Pay_BtnText>
        </S.PayBtn>
      </S.Listbox>
    </>
  );
};

export default AddPage;
