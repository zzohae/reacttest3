import React from 'react';
import styles from './Mbtab.module.scss';
import { Btn } from '../ui/commonui';
import { ReactComponent as Close } from '../svg/util/close.svg';
import { ReactComponent as Logout } from '../svg/util/logout.svg';
import { ReactComponent as Mypage } from '../svg/util/m_mypage.svg';
import { ReactComponent as Del } from '../svg/util/m_del.svg';
import { ReactComponent as Order } from '../svg/util/m_order.svg';
import { ReactComponent as Cart } from '../svg/util/m_cart.svg';

export default function Mbtab({ isOpen, toggleMenu }) {
  return (
    <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
      <div className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}
        onClick={(e) => e.stopPropagation()}>
          
          <div className="container d-flex flex-column gap-2">
            <div className="close d-flex align-items-center justify-content-between w-100">
              <Btn version='v1' className='d-flex align-items-center gap-2'><Logout />로그아웃</Btn>
            <button className={`{$styles.closeButton} `} onClick={toggleMenu}><Close /></button>
              </div>
              
              <div className={`${styles.mbnav}`}>
                <div className={`${styles.icon}`}>
                  <Mypage className={`${styles.iconSvg}`} /> 
                  <span>마이페이지</span>
                </div>
                <div className={`${styles.icon}`}>
                  <Cart className={`${styles.iconSvg}`} /> 
                  <span>장바구니</span>
                </div>
                <div className={`${styles.icon}`}>
                  <Order className={`${styles.iconSvg}`} /> 
                  <span>주문내역</span>
                </div>
                <div className={`${styles.icon}`}>
                  <Del className={`${styles.iconSvg}`} /> 
                  <span>배달서비스</span>
                </div>
              </div>

              <div className={`${styles.tabnav}`}>
                <div className={`${styles.icon}`}>
                  <Mypage className={`${styles.iconSvg}`} /> 
                  <span>마이페이지</span>
                </div>
              </div>



              <div className="category"><h3 className="fs-h3">상품 카테고리</h3></div>
          </div>

      </div>
    </div>
  );
}
