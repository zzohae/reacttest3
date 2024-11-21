import React from 'react'
import { Link } from 'react-router-dom'
import Product from './ui/Product'
import products from './db/product.json'
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
          {products.map((v) => (
              <Product
                prdId={v.id}
                img={v.img}
                prodName={v.prodName}
                store={v.store}
                originprice={v.originprice}
                saleprice={v.saleprice}
                promobadge={v.promobadge}
              />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}