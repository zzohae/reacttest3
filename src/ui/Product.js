import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({prdId, img, prodName, store, originprice, saleprice}) {
  const formatNum = (num) => {
    return num.toLocaleString();
  };

const goCart = ()=>{
  alert('상품을 장바구니에 담았습니다.')
}

originprice = parseInt(originprice);
saleprice = parseInt(saleprice);
const discount = (originprice - saleprice)/100;

  return (
    <div className='product col-6 col-lg-4 col-xl-3'>
      <Link to={`/products/detail/${prdId}`}>
      <img className='prodimg' src={img} alt={prodName} />
      </Link>
      <div className='d-flex justify-content-between align-items-end'>
        <dl className='prodInfo d-flex flex-column align-items-start'>
          <dt className='productName'>{prodName}</dt>
          <dd className='seller'>{store}</dd>
          <dd className='price'><strong className='dcPercent'>{discount}%</strong><span className='origin'>{formatNum(originprice)}원</span><em className='saleprice d-block d-md-inline d-lg-block d-xl-inline'>{formatNum(saleprice)}<span>원</span></em></dd>
          <p>000명 구매중</p>
        </dl>
        <button className=' goCart d-flex justify-content-center align-items-center' onClick={goCart}>
        <svg width="27" height="25" viewBox="0 0 27 25" fill="none">
    <path
      d="M10.6026 23.0105C11.1706 23.0105 11.631 22.5595 11.631 22.0031C11.631 21.4467 11.1706 20.9956 10.6026 20.9956C10.0347 20.9956 9.57422 21.4467 9.57422 22.0031C9.57422 22.5595 10.0347 23.0105 10.6026 23.0105Z"
      stroke="#D2D2D2"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.9151 23.0105C22.4831 23.0105 22.9435 22.5595 22.9435 22.0031C22.9435 21.4467 22.4831 20.9956 21.9151 20.9956C21.3472 20.9956 20.8867 21.4467 20.8867 22.0031C20.8867 22.5595 21.3472 23.0105 21.9151 23.0105Z"
      stroke="#D2D2D2"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.375 1.854H6.48862L9.24474 15.3439C9.33878 15.8078 9.59636 16.2244 9.97238 16.5209C10.3484 16.8175 10.8189 16.975 11.3016 16.9659H21.2976C21.7803 16.975 22.2508 16.8175 22.6268 16.5209C23.0028 16.2244 23.2604 15.8078 23.3545 15.3439L24.9999 6.89132H7.51702"
      stroke="#D2D2D2"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
        </button>
      </div>
    </div>
  )
}
