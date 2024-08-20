import React from "react";
import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const inputpage = () => {
  const total = 10000000000;
  const navigate = useNavigate();

  const onClickNext = () => {
    console.log("click");
    navigate("/pay");
  };

  return (
    <>
      <S.Title>상품입력</S.Title>
      <S.Listbox>
        <S.PayBtn onClick={onClickNext}>
          <S.BtnText>{total.toLocaleString()}원 결제</S.BtnText>
        </S.PayBtn>
      </S.Listbox>
      <S.Cam>
        <Webcam style={{ width: "100%", height: "100%" }} />
      </S.Cam>
    </>
  );
};

export default inputpage;
