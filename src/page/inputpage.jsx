import React from "react";
import * as S from "./style";
import axios from "axios";

const inputpage = () => {
  const total = 10000000000;
  return (
    <>
      <S.Title>상품입력</S.Title>
      <S.Listbox>
        <S.PayBtn>
          <S.BtnText>{total.toLocaleString()}원 결제</S.BtnText>
        </S.PayBtn>
      </S.Listbox>
    </>
  );
};

export default inputpage;
