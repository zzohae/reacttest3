import React from 'react';
import Home from './contents/Home';
import Hd from './layout/Hd';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='wrap'>
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<p>서비스 준비중입니다.</p>}></Route>
      </Routes>

    </div>
  )
}
