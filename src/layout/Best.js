import React from 'react';
import Product from '../ui/Product';
import products from '../db/product.json';

export default function Best() {
  const bestProducts = products.slice(0, 3);

  return (
    <div className='row d-flex align-items-start justify-content-center'>
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