import React from 'react'
import Product from './ui/Product';
import products from './db/product.json';
import allData from "./db/allData.json";
import Movetool from './ui/Mtitle'

export default function Livecom() {
  const liveProducts = products.slice(0, 4);
  return (
    <div className='container d-flex flex-column align-items-start justify-content-center livecomCont'>
      <Movetool textColor='#214aee' h2size='34px'>{allData.mainPagetitle[2].title}</Movetool>
      <div className='row livecomCont justify-content-between'>
        <div className='row col-12 col-lg-6 col-xl-7 order-1 order-lg-0 prodwrap p-0 mx-0'>
          {liveProducts.map((v, index) => (
            <Product
              key={index}
              rowclass='col-6'
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
        <div className='col-12 col-lg-6 col-xl-5 order-0 order-lg-1'>
          <div className='liveimg'></div>
        </div>
      </div>
    </div>
  )
}
