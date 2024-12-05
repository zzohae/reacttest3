import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as AlertIcon } from '../svg/util/alert.svg';
import { ReactComponent as CartIcon } from '../svg/util/cart.svg';
import { ReactComponent as MypageIcon } from '../svg/util/user.svg';
import { ReactComponent as LoginIcon } from '../svg/util/login.svg';
import { ReactComponent as LogoutIcon } from '../svg/util/logout.svg';

const Button = ({ icon, hasBadge, onClick, badgePosition, label }) => (
  <button
    className="icon"
    onClick={onClick}
    style={{
      position: 'relative', // 부모 버튼을 상대 위치로 설정
      display: 'inline-flex', // 내부 아이콘과 배지 정렬 지원
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {icon}
    {hasBadge && (
      <span
        className="badge"
        style={{
          position: 'absolute',
          top: badgePosition?.top || 0,
          right: badgePosition?.right || 0,
          backgroundColor: '#214AEE',
          width: '5px', // 배지의 너비
          height: '5px', // 배지의 높이
          borderRadius: '50%', // 완전한 원형
          zIndex: 1, // 배지가 아이콘 위에 표시되도록 설정
        }}
      />
    )}
  </button>
);


const Cart = ({ icon, badgePosition, incartNum }) => (
  <Link to="/cart"
    className="icon"
    style={{
      position: 'relative', // 부모 버튼을 상대 위치로 설정
      display: 'inline-flex', // 내부 아이콘과 배지 정렬 지원
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {icon}
    {incartNum.length > 0 && (
      <span
        className="badge"
        style={{
          position: 'absolute',
          fontSize: '11px',
          fontWeight: 500,
          top: '-5px',
          right: '-5px',
          backgroundColor: 'rgb(33, 74, 238)',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          boxSizing: 'unset',
          lineHeight: 1
        }}
      >{incartNum.length}</span>
    )}
  </Link>
);

const Alert = ({ icon, badgePosition, incartNum }) => (
  <Link to="/alert"
    className="icon"
    style={{
      position: 'relative', // 부모 버튼을 상대 위치로 설정
      display: 'inline-flex', // 내부 아이콘과 배지 정렬 지원
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {icon}
    {incartNum && (
      <span
        className="badge"
        style={{
          position: 'absolute',
          fontSize: '11px',
          fontWeight: 500,
          top: '-5px',
          right: '-4px',
          backgroundColor: 'rgb(33, 74, 238)',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          boxSizing: 'unset'
        }}
      >{incartNum}</span>
    )}
  </Link>
);


// Util 컴포넌트
const Util = ({incartNum, className}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [hasAlerts, setHasAlerts] = useState(false);  // 알림 상태
  const [hasCartItems, setHasCartItems] = useState(false); // 장바구니 상태
  const navigate = useNavigate();


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
      navigate('/signup');
    }
  };

  // 알림 상태 토글
  const handleAlertToggle = () => {
    setHasAlerts(!hasAlerts);
  };

  // 장바구니 상태 토글
  const handleCartToggle = () => {
    setHasCartItems(!hasCartItems);
  };

  return (
    <div className={` ${className}`}>
      <Alert
        icon={<AlertIcon />}
        hasBadge={7}
        onClick={handleAlertToggle}
        label="알림"
      />

      <Cart
        icon={<CartIcon />}
        incartNum={incartNum}
        label="장바구니"
      />

      <Button
        icon={<MypageIcon />}
        onClick={handleMypageClick}
        label="마이페이지"
      />

      <Button
        icon={isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
        onClick={handleLoginClick}
        label={isLoggedIn ? '로그아웃' : '로그인'}
      />
    </div>
  );
};

export default Util;
