import React from 'react';
import Home from './contents/Home';
import { Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul style={{display:'flex'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    <div className="content">

      
        <Routes>
          <Route path="/" element={
            <Home   bgcolor="red" textcolor="white" vh="100vh" childcolor="white">
              메인페이지입니다.
            </Home>
          } />
          <Route path="/about" element={
            <Home   bgcolor="gray" textcolor="white" vh="100vh" childcolor="red">
              자식이라고 합니다. 여기구역은 children이라는 변수로 지정되어 있어요
            </Home>
          } />
          <Route path="/contact" element={
            <Home   bgcolor="yellow" textcolor="black" vh="100vh" childcolor="black">
              아~~~ 이렇게 해서 하나의 컴포넌트를 가지고 가성비있게 쓰는구나~
            </Home>  
          } />
        </Routes>
      
      
    </div>
    </div>
  )
}
