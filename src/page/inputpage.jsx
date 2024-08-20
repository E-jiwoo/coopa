import React from "react";
import * as S from "./style";
import axios from "axios";
import Webcam from "react-webcam";

const inputpage = () => {
  return (
    <>
      <S.Title>상품입력</S.Title>
      <S.cam>
        <Webcam style={{ width: "100%", height: "100%" }} />
      </S.cam>
    </>
  );
};

export default inputpage;
