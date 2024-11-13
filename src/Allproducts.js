import React from 'react'
import { Link } from 'react-router-dom'
import Product from './ui/Product'
import products from './db/products.json'
import allcategory from './db/allData.json'

export default function Allproducts() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='container'>
      <div className="row w-100">
        <h2 className='categorytitle'>전체 상품</h2>
        <ul className='d-flex mytab mb-4 pb-3'>
        <li><Link to='products' className='active'>전체 상품</Link></li>
            {
              allcategory.navdata["category"]["submenu"].map((v, i)=>{
                return(
                  <li>
                    <Link to={`/products/${v.linkto}`} key={i}>{v.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        <div className="row align-items-center">
          {products.map((product) => (
              <Product
                prdId={product.id}
                img={product.img}
                prodName={product.prodName}
                store={product.store}
                originprice={product.originprice}
                saleprice={product.saleprice}
              />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}