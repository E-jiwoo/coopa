import styled from "styled-components";

export const Arrow = styled.img`
  position: fixed;
  width: 28px;
  height: 45px;
  top: 0;
  left: 0;
  padding-left: 150px;
  padding-top: 60px;
  cursor: pointer;
  z-index: 10;
`;
export const Title = styled.div`
  position: fixed;
  top: 0;
  width: calc(100vw - 514px);
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding-top: 60px;
  color: black;
`;

export const Listbox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 514px;
  height: 100vh;
  border-left-style: dashed;
  color: #d9d9d9;
  z-index: 5;
`;

export const Categorly1 = styled.div`
  position: relative;
  top: 30px;
  left: 55px;
  font-size: 18px;
  font-weight: 700;
  padding-top: 60px;
  color: black;
`;

export const Categorly2 = styled.div`
  position: relative;
  top: 10px;
  left: 290px;
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const Categorly3 = styled.div`
  position: relative;
  bottom: 10px;
  left: 425px;
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const List = styled.div`
  position: relative;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 55px;
  color: #000000;
`;

export const ListName = styled.span`
  flex: 2;
  font-size: 18px;
  font-weight: 500;
`;

export const ListMoney = styled.span`
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`;

export const ListMinus = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ListNumber = styled.span`
  width: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

export const ListPlus = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PlusBtn = styled.div`
  position: relative;
  top: 100px;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
`;

export const PayBtn = styled.div`
  position: relative;
  top: 100vh;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
  padding-bottom: 400px;
`;

export const Plus_BtnText = styled.button`
  width: 422px;
  height: 70px;
  border-style: solid;
  border-width: 2px;
  border-color: #fcc800;
  background-color: white;
  color: #fcc800;
  font-size: 26px;
  font-weight: 500;
`;
export const Pay_BtnText = styled.button`
  width: 422px;
  height: 70px;
  background-color: #fcc800;
  color: white;
  font-size: 26px;
  font-weight: 500;
`;
export const Line = styled.div`
  position: relative;
  top: 760px;
  right: 0;
  width: 514px;
  height: 120px;
  border-top-style: dashed;
  color: #d9d9d9;
`;
export const TotalText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 60px;
  padding-top: 810px;
  display: flex;
  gap: 230px;
  color: black;
  font-size: 28px;
  font-weight: 700;
`;

export const Text = styled.div`
  position: relative;
`;
export const Cam = styled.div`
  position: fixed;
  width: 930px;
  height: 700px;
  top: 140px;
  left: 240px;
  background-color: #c1c1c1;
`;
export const PayBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-top: 250px;
  padding-left: 150px;
  flex-wrap: wrap;
  width: 1200px;
  cursor: pointer;
`;

export const Pay = styled.div`
  position: relative;
  width: 335px;
  height: 200px;
  background-color: #f7f7f7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const PayImg = styled.img``;

export const PayText = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const PayPrice = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 760px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
`;

export const ModalAccount = styled.div`
  font-size: 28px;
  font-family: "Pretendard";
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalText = styled.div`
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 500;
  text-align: center;
`;

export const ModalButton_OK = styled.button`
  position: relative;
  width: 27%;
  padding: 15px;
  background-color: #fcc800;
  color: #ffffff;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  left: 250px;
  top: 45px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 16px 0;
  bottom: 265px;
  left: 152px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  z-index: 2;
`;

export const Search = styled.input`
  z-index: 10;
  width: 1080px;
  height: 65px;
  padding-left: 80px;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  font-weight: 500;
  background-color: #efefef;
  box-sizing: border-box;

  &::placeholder {
    color: #c1c1c1;
  }
`;
export const Img = styled.img`
  position: relative;
  width: 31px;
  height: 51px;
  top: 5px;
  right: 20px;
`;
