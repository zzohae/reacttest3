import React from 'react';
import Home from './contents/Home';
import About from './contents/About';
import Hd from './layout/Hd';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Hd></Hd>
    <div className="content">

      
        <Routes>
          <Route path="/Home" element={
            <Home   bgcolor="red" textcolor="white" vh="100vh" childcolor="white">
              메인페이지입니다.
            </Home>
          } />
          <Route path="/about" element={
            <About></About>
          } />
          <Route path="/services" element={
            <Home   bgcolor="yellow" textcolor="black" vh="100vh" childcolor="black">
              아~~~ 이렇게 해서 하나의 컴포넌트를 가지고 가성비있게 쓰는구나~
            </Home>  
          } />
        </Routes>
      
      
    </div>
    </div>
  )
}
