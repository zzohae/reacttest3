import React from 'react'
import MdsPick from '../MdsPick'
import Best from '../layout/Best'


export default function Boardlist() {
  return (
    <div className='d-flex flex-column align-items-center overflow-hidden boardlist'>
      <MdsPick></MdsPick>
      <Best></Best>
    </div>
  )
}
