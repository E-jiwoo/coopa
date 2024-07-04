import styled from "styled-components";

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

export const PayBtn = styled.div`
  position: relative;
  top: 100vh;
  transform: translateY(-100%);
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

export const BtnText = styled.button`
  width: 342px;
  height: 59px;
  border-left-style: dashed;
  background-color: #fcc800;
  color: white;
  font-size: 22px;
  font-weight: 500;
`;
