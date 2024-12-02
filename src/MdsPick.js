import React from 'react'
import allData from "./db/allData.json";
import Movetool from './ui/Mtitle'
import SwiperBanner from "./contents/SwiperBanner";

export default function MdsPick() {
  return (
    <div className='container d-flex flex-row align-items-start justify-content-center'>
      <div className='mdsTitle col-4'>
        <Movetool textColor='#214aee' h2size='34px'>{allData.mainPagetitle[0].title}</Movetool>
        <p>내 손 안의 전통시장, <br />
        청량마켓몰만의 특별한 경험</p>
        <div className='tagwrap'>
          <p className='tagitem'>#시즌메뉴</p>
          <p className='tagitem'>#구독할인</p>
          <p className='tagitem'>#무료배송</p>
        </div>
      </div>
      <div className='col-8'>
      <SwiperBanner
      datakey={allData.mainRWDbanner}
      viewslides={1}
      pagination={false}
      hasrwd={true}
      ></SwiperBanner>
      </div>
    </div>
  )
}
