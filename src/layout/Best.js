import React from 'react';
import Product from '../ui/Product';
import products from '../db/product.json';
import allData from "../db/allData.json";
import Movetool from '../ui/Mtitle'

export default function Best() {
  const bestProducts = products.slice(0, 3);

  return (
    <div className='row d-flex align-items-start justify-content-center'>
      <Movetool textColor='#214aee' h2size='34px'>{allData.mainPagetitle[1].title}</Movetool>
      {bestProducts.map((v, index) => (
        <Product
          key={index}
          rowclass='col-8 col-md-4 '
          prdId={v.id}
          promobadge={v.promobadge}
          img={`/assets/img/product/${v.img}.jpg`}
          prodName={v.prodName}
          store={v.store}
          originprice={v.originprice}
          saleprice={v.saleprice}
        />
      ))}
  </div>
  );
}