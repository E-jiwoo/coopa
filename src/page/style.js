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
`;
export const Categorly1 = styled.div`
  position: relative;
  top: 30px;
  left: 80px;
  font-size: 18px;
  font-weight: 700;
  padding-top: 60px;
  color: black;
`;

export const Categorly2 = styled.div`
  position: relative;
  top: 10px;
  left: 270px;
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const Categorly3 = styled.div`
  position: relative;
  bottom: 10px;
  left: 390px;
  font-size: 18px;
  font-weight: 700;
  color: black;
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
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  padding-bottom: 260px;
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
  top: 150px;
  left: 240px;
  background-color: #c1c1c1;
`;
export const Pay = styled.div`
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
`;
export const Pay1 = styled.div`
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
export const Pay2 = styled.div`
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
export const Pay3 = styled.div`
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
export const Pay4 = styled.div`
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

export const Card = styled.img``;
export const Phone = styled.img``;
export const Money = styled.img``;
export const Aripay = styled.img``;
export const Card_ = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
export const Phone_ = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
export const Money_ = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
export const Aripay_ = styled.div`
  font-size: 22px;
  font-weight: 600;
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
