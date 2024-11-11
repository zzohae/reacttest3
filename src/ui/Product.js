import React from 'react'

export default function Product() {
const goCart = ()=>{
  alert('상품을 장바구니에 담았습니다.')
}
  return (
    <div className='product'>
      <div className='prodimg'></div>
      <div className='d-flex justify-content-between align-items-end'>
        <dl className='prodInfo d-flex flex-column align-items-start'>
          <dt className='productName'>상품 이름(0kg)</dt>
          <dd className='seller'>유통사</dd>
          <dd className='price'><strong>할인율</strong><span className='origin'>원래가격</span><em>39900<span>원</span></em></dd>
          <p>구매중</p>
        </dl>
        <button className=' goCart d-flex justify-content-center align-items-center' onClick={goCart}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
          <path d="M9.72763 24.2214C10.3301 24.2214 10.8185 23.7429 10.8185 23.1527C10.8185 22.5625 10.3301 22.084 9.72763 22.084C9.12514 22.084 8.63672 22.5625 8.63672 23.1527C8.63672 23.7429 9.12514 24.2214 9.72763 24.2214Z" stroke="#D2D2D2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.7276 24.2214C22.3301 24.2214 22.8185 23.7429 22.8185 23.1527C22.8185 22.5625 22.3301 22.084 21.7276 22.084C21.1251 22.084 20.6367 22.5625 20.6367 23.1527C20.6367 23.7429 21.1251 24.2214 21.7276 24.2214Z" stroke="#D2D2D2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 1.77881H5.36364L8.28727 16.0886C8.38703 16.5806 8.66026 17.0226 9.05914 17.3372C9.45802 17.6517 9.95713 17.8188 10.4691 17.8092H21.0727C21.5847 17.8188 22.0838 17.6517 22.4827 17.3372C22.8816 17.0226 23.1548 16.5806 23.2545 16.0886L25 7.12228H6.45455" stroke="#D2D2D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>
    </div>
  )
}
