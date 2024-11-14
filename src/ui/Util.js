import React, { useState } from 'react';
import { ReactComponent as Alert } from '../svg/util/noti.svg';
import { ReactComponent as Cart } from '../svg/util/cart.svg';
import { ReactComponent as Mypage } from '../svg/util/user.svg';
import { ReactComponent as Login } from '../svg/util/login.svg';
import { ReactComponent as Logout } from '../svg/util/logout.svg';

const Button = ({ icon, badgeCount, onClick, isLoggedIn, label }) => (
  <button className="icon" onClick={onClick} style={{ position: 'relative' }}>
    {icon}
    {badgeCount > 0 && (
      <span className="badge" style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '0.2em 0.6em' }}>
        {badgeCount}
      </span>
    )}
  </button>
);

// Util 컴포넌트
const Util = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태
  const [cartCount, setCartCount] = useState(0);        // 장바구니 수
  const [alertCount, setAlertCount] = useState(0);       // 알림 수

  // 로그인/로그아웃 토글
  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    alert(isLoggedIn ? '로그아웃 되었습니다.' : '로그인 되었습니다.');
  };

  // 마이페이지/로그인 페이지 이동
  const handleMypageClick = () => {
    if (isLoggedIn) {
      console.log('마이페이지로 이동');
    } else {
      console.log('로그인 페이지로 이동');
    }
  };

  // 알림 수 증가
  const handleAlertCountChange = () => {
    setAlertCount(prevCount => prevCount + 1);
  };

  // 장바구니 수 증가
  const handleCartCountChange = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="util d-none d-lg-flex align-items-center justify-content-end">
      <Button
        icon=<Alert />
        badgeCount={alertCount}
        onClick={handleAlertCountChange}
        label="알림"
      />

      <Button
        icon=<Cart />
        badgeCount={cartCount}
        onClick={handleCartCountChange}
        label="장바구니"
      />

      <Button
        icon=<Mypage />
        onClick={handleMypageClick}
        label="마이페이지"
      />

      <Button
        icon={isLoggedIn ? <Logout /> : <Login />}
        onClick={handleLoginClick}
        label={isLoggedIn ? '로그아웃' : '로그인'}
      />
    </div>
  );
};

export default Util;
