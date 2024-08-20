import { createGlobalStyle, styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputPage from "./page/inputpage";
import PayPage from "./page/paypage";

function App() {
  return (
    <>
      <GlobalStyle />
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

export default App;
