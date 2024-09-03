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

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://your-backend-url/items");
      const fetchedItems = response.data;
      setItems(fetchedItems);

      const initialTotal = fetchedItems.reduce(
        (acc, item) => acc + item.itemPrice * item.qty,
        0
      );
      setTotal(initialTotal);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

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
    console.log("click");
    navigate("/add");
  };

  const onClickPay = () => {
    console.log("click");
    navigate("/pay");
  };

  const handleCapture = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const imageBlob = await fetch(imageSrc).then((res) => res.blob());
        const url = window.URL.createObjectURL(imageBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `capture-${Date.now()}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        try {
          await axios.post("http://your-backend-url/upload", {
            image: imageSrc,
          });
          console.log("Image uploaded successfully");
        } catch (error) {
          console.error("Error uploading image:", error);
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
    fetchItems();
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
