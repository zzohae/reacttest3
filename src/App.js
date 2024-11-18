import React, { useState, useEffect } from 'react';
import Home from './contents/Home';
import Hd from './layout/Hd';
import { Routes, Route } from "react-router-dom";
import Notfound from './Notfound';
import Category from './Category';
import Detail from './Detail';
import Topad from './contents/Topad'

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);
  
  return (
    <div className={`wrap ${scrollPosition < 200 ? "" : "scrolled"}`}>
      <Topad></Topad>
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
