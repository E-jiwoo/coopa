import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import Webcam from "react-webcam";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

const InputPage = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handlePlus = (itemId) => {
    const updatedItems = items.map((item) =>
      item.itemId === itemId ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updatedItems);
    updateTotal(updatedItems);
  };

  const handleMinus = (itemId) => {
    const updatedItems = items.map((item) =>
      item.itemId === itemId && item.qty > 0
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setItems(updatedItems);
    updateTotal(updatedItems);
  };

  const updateTotal = (updatedItems) => {
    const newTotal = updatedItems.reduce(
      (acc, item) => acc + item.itemPrice * item.qty,
      0
    );
    setTotal(newTotal);
  };

  const onClickAdd = () => {
    navigate("/add");
  };

  const onClickPay = () => {
    navigate("/pay");
  };

  const handleCapture = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        try {
          const base64Image = imageSrc.split(",")[1];
          console.log("Base64 Image:", base64Image);

          const response = await axios.post(
            "http://10.150.150.39:8080/api/item/scan",
            { image: base64Image }
          );

          console.log("Server Response:", response.data);
          const fetchedItems = response.data;
          setItems(fetchedItems);
          updateTotal(fetchedItems);
        } catch (error) {
          console.error("Error handling capture:", error);
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      handleCapture();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <S.Title>상품입력</S.Title>
      <S.Listbox>
        <S.Categorly1>물품 목록</S.Categorly1>
        <S.Categorly2>수량</S.Categorly2>
        <S.Categorly3>가격</S.Categorly3>
        {items.map((item) => (
          <S.List key={item.itemId}>
            <S.ListName>{item.itemName}</S.ListName>
            <S.ListMoney>{item.itemPrice * item.qty}원</S.ListMoney>
            <S.ListMinus
              src={minus}
              alt="minus"
              onClick={() => handleMinus(item.itemId)}
            />
            <S.ListNumber>{item.qty}</S.ListNumber>
            <S.ListPlus
              src={plus}
              alt="plus"
              onClick={() => handlePlus(item.itemId)}
            />
          </S.List>
        ))}
        <S.PlusBtn onClick={onClickAdd}>
          <S.Plus_BtnText>상품 추가</S.Plus_BtnText>
        </S.PlusBtn>
        <S.PayBtn onClick={onClickPay}>
          <S.Pay_BtnText>{total.toLocaleString()}원 결제</S.Pay_BtnText>
        </S.PayBtn>
      </S.Listbox>
      <S.Cam>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ width: "100%", height: "100%" }}
        />
      </S.Cam>
    </>
  );
};

export default InputPage;
