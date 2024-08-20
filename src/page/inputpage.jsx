import React from "react";
import * as S from "./style";
import axios from "axios";
import Webcam from "react-webcam";

const inputpage = () => {
  return (
    <>
      <S.Title>상품입력</S.Title>
      <S.Cam>
        <Webcam style={{ width: "100%", height: "100%" }} />
      </S.Cam>
    </>
  );
};

export default inputpage;
