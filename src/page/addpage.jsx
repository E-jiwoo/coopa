import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import search from "../assets/search.svg";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

const AddPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const onClickNext = () => {
    const totalAmount = calculateTotalAmount();
    navigate("/pay", { state: { selectedItems, totalAmount } });
  };

  const onClickBack = () => {
    navigate("/");
  };

  const handleAddItem = (name, price) => {
    setSelectedItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.name === name);
      if (itemExists) {
        return prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { name, price, quantity: 1 }];
      }
    });
  };

  const handlePlus = (itemName) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleMinus = (itemName) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotalAmount = () => {
    return selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <S.Arrow src={arrow} alt="arrow" onClick={onClickBack} />
      <S.Title>상품 직접 입력</S.Title>
      <S.Listbox>
        <S.Categorly1>물품 목록</S.Categorly1>
        <S.Categorly2>수량</S.Categorly2>
        <S.Categorly3>가격</S.Categorly3>

        {selectedItems.map((item, index) => (
          <S.List key={index}>
            <S.ListName>{item.name}</S.ListName>
            <S.ListMinus
              src={minus}
              alt="minus"
              onClick={() => handleMinus(item.name)}
            />
            <S.ListNumber>{item.quantity}</S.ListNumber>
            <S.ListPlus
              src={plus}
              alt="plus"
              onClick={() => handlePlus(item.name)}
            />
            <S.ListMoney>
              {(item.price * item.quantity).toLocaleString()}원
            </S.ListMoney>
          </S.List>
        ))}
        <S.PayBtn onClick={onClickNext}>
          <S.Pay_BtnText>
            {calculateTotalAmount().toLocaleString()}원 결제
          </S.Pay_BtnText>
        </S.PayBtn>
      </S.Listbox>
      <S.SearchContainer>
        <S.SearchIcon src={search} alt="search icon" />
        <S.Search type="text" placeholder="상품을 검색하세요" />
      </S.SearchContainer>

      <S.PayBox>
        <S.Pay onClick={() => handleAddItem("도리토스", 2000)}>
          <S.PayText>도리토스</S.PayText>
          <S.PayPrice>2,000원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("빼빼로", 1500)}>
          <S.PayText>빼빼로</S.PayText>
          <S.PayPrice>1,500원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("포카리스웨트", 1300)}>
          <S.PayText>포카리스웨트</S.PayText>
          <S.PayPrice>1,300원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("마이구미", 1200)}>
          <S.PayText>마이구미</S.PayText>
          <S.PayPrice>1,200원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("펩시_콜라_캔_500ml", 1400)}>
          <S.PayText>펩시_콜라_캔_500ml</S.PayText>
          <S.PayPrice>1,400원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("티니핑_사과맛", 1800)}>
          <S.PayText>티니핑_사과맛</S.PayText>
          <S.PayPrice>1,800원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("티니핑_딸기맛", 1800)}>
          <S.PayText>티니핑_딸기맛</S.PayText>
          <S.PayPrice>1,800원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("티니핑_포도맛", 1800)}>
          <S.PayText>티니핑_포도맛</S.PayText>
          <S.PayPrice>1,800원</S.PayPrice>
        </S.Pay>
        <S.Pay onClick={() => handleAddItem("슈퍼콘_초코", 1500)}>
          <S.PayText>슈퍼콘_초코</S.PayText>
          <S.PayPrice>1,500원</S.PayPrice>
        </S.Pay>
      </S.PayBox>
    </>
  );
};

export default AddPage;
