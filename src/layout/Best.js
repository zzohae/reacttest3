import React from 'react';
import Product from '../ui/Product';
import products from '../db/products.json';

export default function Best() {
  const bestProducts = products.slice(0, 4);

  return (
    <>
      {bestProducts.map((product, index) => (
        <Product
          img={product.img}
          prodName={product.prodName}
          store={product.store}
          originprice={product.originprice}
          saleprice={product.saleprice}
        />
      ))}
  </>
  );
}