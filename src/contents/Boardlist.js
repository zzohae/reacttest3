import React from 'react'
import MdsPick from '../MdsPick'
import Best from '../layout/Best'
import Mapbanner from '../Mapbanner'
import Livecom from '../Livecom'
import ReviewSlider from '../ReviewSlider'


export default function Boardlist() {
  return (
    <div className='d-flex flex-column align-items-center overflow-hidden boardlist'>
      <MdsPick></MdsPick>
      <Best></Best>
      <Mapbanner></Mapbanner>
      <Livecom></Livecom>
      <ReviewSlider></ReviewSlider>
    </div>
  )
}
