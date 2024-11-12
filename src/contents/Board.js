import React from 'react'
import Product from '../ui/Product'
import products from '../db/products.json'

export default function Board() {
  return (
    <div className='productwrap d-flex align-items-start'>
      {products.map((product, index) => (
          <Product
            key={index}
            img={product.img}
            name={product.name}
            store={product.store}
            discount={product.discount}
            originprice={product.originprice}
            currentbuy={product.currentbuy}
          />
        ))}
    </div>
  )
}
