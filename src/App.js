import React, { useState, useEffect } from 'react';
import Home from './contents/Home';
import Hd from './layout/Hd';
import { Routes, Route } from "react-router-dom";
import Notfound from './Notfound';
import Category from './Category';
import Detail from './Detail';
import News from './contents/News/News';
import CouponPage from './contents/CouponPage';
import Ft from './layout/Ft';
import Comptest from './contents/Copmtest';
import AboutUs from './contents/Aboutus/About';
import SignUp from './SignUp';
import Login from './Login'

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [incartNum, setIncartNum] = useState([]);

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
      <Hd keyword={keyword} setKeyword={setKeyword} incartNum={incartNum}></Hd>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/products/:cn?" element={<Category cn='' incartNum={incartNum} setIncartNum={setIncartNum}></Category>} />
        <Route path="/search" element={<Category keyword={keyword} setKeyword={setKeyword} incartNum={incartNum} setIncartNum={setIncartNum}></Category>} />
        <Route path="/products/detail/:id?" element={<Detail></Detail>} />
        <Route path="/news/:en" element={<News en=''></News>} />
        <Route path="/ecoupon" element={<CouponPage></CouponPage>} />
        <Route path="/aboutus/:en" element={<AboutUs></AboutUs>} />
        <Route path="/comptest" element={<Comptest></Comptest>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Ft></Ft>
    </div>
  )
}