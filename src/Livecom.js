import React from 'react'
import Product from './ui/Product';
import products from './db/product.json';
import allData from "./db/allData.json";
import Movetool from './ui/Mtitle'

export default function Livecom() {
  const liveProducts = products.slice(0, 4);
  return (
    <div className='container d-flex flex-column align-items-start justify-content-center'>
      <Movetool textColor='#214aee' h2size='34px'>{allData.mainPagetitle[2].title}</Movetool>
      <div className='livecomCont d-flex flex-row'>
      <div className='row'>
        {liveProducts.map((v, index) => (
          <Product
            key={index}
            rowclass='col-6 '
            prdId={v.id}
            promobadge={v.promobadge}
            img={`/assets/img/product/${v.img}.jpg`}
            prodName={v.prodName}
            store={v.store}
            originprice={v.originprice}
            saleprice={v.saleprice}
            mB='0px'
          />
        ))}
      </div>
      <div>
        <img src="/assets/img/live.jpg" alt="다음 라이브" />
      </div>
      </div>
    </div>
  )
}
