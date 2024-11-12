import React from 'react'
import Productwrap from './layout/Productwrap'

export default function Allproducts() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='container'>
        <h2 className='categorytitle'>전체 상품</h2>
        <Productwrap></Productwrap>
    </div>
    </div>
  )
}