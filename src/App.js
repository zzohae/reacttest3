import React from 'react';
import Home from './contents/Home';
import Hd from './layout/Hd';
import { Routes, Route } from "react-router-dom";
import Notfound from './Notfound';
import Category from './Category';
import Detail from './Detail';

export default function App() {
  return (
    <div className='wrap'>
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/products/:cn?" element={<Category cn=''></Category>} />
        <Route path="/products/detail/:id?" element={<Detail></Detail>} />
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  )
}
