import React from 'react';
import Product from '../ui/Product'; // Product 컴포넌트
import products from '../db/products.json'; // 상품 데이터

export default function Productwrap() {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
            <Product
              img={product.img}
              name={product.name}
              store={product.store}
              discount={product.discount}
              originprice={product.originprice}
              currentbuy={product.currentbuy}
            />
        ))}
      </div>
    </div>
  );
}
