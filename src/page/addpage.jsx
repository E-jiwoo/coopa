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
          <S.PayPrice>2,000원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>빼빼로</S.PayText>
          <S.PayPrice>1,500원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>포카리스웨트</S.PayText>
          <S.PayPrice>1,300원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>마이구미</S.PayText>
          <S.PayPrice>1,200원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>펩시_콜라_캔_500ml</S.PayText>
          <S.PayPrice>1,400원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>티니핑_사과맛</S.PayText>
          <S.PayPrice>1,800원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>티니핑_딸기맛</S.PayText>
          <S.PayPrice>1,800원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>티니핑_포도맛</S.PayText>
          <S.PayPrice>1,800원</S.PayPrice>
        </S.Pay>
        <S.Pay>
          <S.PayText>슈퍼콘_초코</S.PayText>
          <S.PayPrice>1,500원</S.PayPrice>
        </S.Pay>
      </S.PayBox>
    </>
  );
};

export default AddPage;
