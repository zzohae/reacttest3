import React from 'react';
import Product from '../ui/Product';
import products from '../db/products.json';

export default function Best() {
  const bestProducts = products.slice(0, 3);

  return (
    <div className='row d-flex align-items-start'>
      {bestProducts.map((product, index) => (
        <Product
        rowclass='col-4'
          prdId={product.id}
          img={`/assets/img/product/${product.img}.jpg`}
          prodName={product.prodName}
          store={product.store}
          originprice={product.originprice}
          saleprice={product.saleprice}
        />
      ))}
  </div>
  );
}