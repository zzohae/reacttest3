import React from 'react';
import Home from './contents/Home';
import Allproducts from './Allproducts';
import Hd from './layout/Hd';
import { Routes, Route } from "react-router-dom";
import Notfound from './Notfound';

export default function App() {
  return (
    <div className='wrap'>
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Allproducts></Allproducts>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  )
}
