import React from 'react';
import Home from './contents/Home';
import About from './contents/About';
import { Routes, Route, Link } from "react-router-dom";
import { Utilicon, Btn } from './ui/commonui';

export default function App() {
  return (
    <div>
      <nav>
        <ul style={{display:'flex'}}>
          <li><Link to="/"><Utilicon fontcolor="red" bgcolor="yellow" icon="\f64f">Home</Utilicon></Link></li>
          <li><Link to="/about"><Utilicon fontcolor="blue" bgcolor="lightblue" icon="\f7cc">About</Utilicon></Link></li>
          <li><Link to="/contact"><Utilicon fontcolor="white" bgcolor="black" icon="\F417">Contact</Utilicon></Link></li>
        </ul>
        <Btn>
          <a href="https://github.com/zzohae" target='_blank' rel="noreferrer">Github</a>
        </Btn>
      </nav>
    <div className="content">

      
        <Routes>
          <Route path="/" element={
            <Home   bgcolor="red" textcolor="white" vh="100vh" childcolor="white">
              메인페이지입니다.
            </Home>
          } />
          <Route path="/about" element={
            <About></About>
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
