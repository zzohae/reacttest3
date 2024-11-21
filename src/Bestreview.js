import React from 'react'
import { Starwrap } from './ui/commonui'

export default function Bestreview({star, userID, reviewContent, createdAt}) {
  return (
    <div className='bestReviewcont'>
      <div className='contTop'>
        {/* <p className='d-inline'>{star}</p> */}
        <Starwrap rating={star}></Starwrap>
        <p className='bestreviewbadge'>BEST</p>
      </div>
      <div className='contBot'>
        <div className='col-12 col-xl-6'>
        <img src="https://via.placeholder.com/170x170" alt=""  />
        </div>
        <ul className='col-12 col-xl-6'>
          <li>{userID}</li>
          <li>{reviewContent}</li>
          <li>{createdAt}</li>
        </ul>
      </div>
    </div>
  )
}
