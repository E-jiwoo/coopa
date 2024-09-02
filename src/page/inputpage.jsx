import React from "react";
import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const inputpage = () => {
  const total = 0;
  const navigate = useNavigate();

  const onClickNext = () => {
    console.log("click");
    navigate("/pay");
  };

  return (
    <>
      <S.Title>상품입력</S.Title>
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
      <S.Cam>
        <Webcam style={{ width: "100%", height: "100%" }} />
      </S.Cam>
    </>
  );
};

export default inputpage;
