import { createGlobalStyle, styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputPage from "./page/inputpage";
import PayPage from "./page/paypage";
import AddPage from "./page/addpage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/add" element={<AddPage />} />
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
    overflow: hidden;
  }
`;

export default App;
