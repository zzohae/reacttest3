import React from 'react'
import { Link } from 'react-router-dom';
import { InCartBtn } from './commonui';
import { TagStyle } from './commonui';
import Utilicon from './svg';

export default function Product({rowclass, prdId, img, prodName, store, originprice, saleprice, promobadge = [] }) {
  const formatNum = (num) => {
    return num.toLocaleString();
  };

const goCart = ()=>{
  alert('상품을 장바구니에 담았습니다.')
}

originprice = parseInt(originprice);
saleprice = parseInt(saleprice);
const discount = parseInt((originprice - saleprice) / originprice * 100);

  return (
    <div className={`product ${rowclass} position-relative`}>
      <Link to={`/products/detail/${prdId}`}>
      <div className='position-absolute d-flex mt-2'>
      {promobadge && promobadge.includes("new") && (
        <TagStyle type='new'>NEW</TagStyle>
      )}
      {promobadge && promobadge.includes("hot") && (
        <TagStyle type='hot'>HOT</TagStyle>
      )}
      {promobadge && promobadge.includes("best") && (
        <TagStyle type='best'>BEST</TagStyle>
      )}
      </div>
      <img className='prodimg' src={img} alt={prodName} />
      </Link>
      <div className='d-flex justify-content-between align-items-end'>
        <dl className='prodInfo d-flex flex-column align-items-start'>
          <dt className='productName'>{prodName}</dt>
          <dd className='seller'>{store}</dd>
          <dd className='price'><strong className='dcPercent'>{discount}%</strong><span className='origin'>{formatNum(originprice)}원</span><em className='saleprice d-block d-md-inline d-lg-block d-xl-inline'>{formatNum(saleprice)}<span>원</span></em></dd>
          <p>000명 구매중</p>
        </dl>
        <InCartBtn onClick={goCart} svgcolor="#D2D2D2">
          <Utilicon.Cart></Utilicon.Cart>
        </InCartBtn>
      </div>
    </div>
  )
}
