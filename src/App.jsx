import { createGlobalStyle, styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputPage from "./page/inputpage";
import PayPage from "./page/paypage";

function App() {
  const total = 10000000000;

  return (
    <>
      <GlobalStyle />
      <Listbox>
        <PayBtn>
          <BtnText>{total.toLocaleString()}원 결제</BtnText>
        </PayBtn>
      </Listbox>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/pay" element={<PayPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {  
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
`;

const Listbox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 514px;
  height: 100vh;
  border-left-style: dashed;
  color: #d9d9d9;
`;

const PayBtn = styled.div`
  position: relative;
  top: 100vh;
  transform: translateY(-100%);
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const BtnText = styled.button`
  width: 342px;
  height: 59px;
  border-left-style: dashed;
  background-color: #fcc800;
  color: white;
  font-size: 22px;
  font-weight: 500;
`;

export default App;
