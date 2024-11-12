import React from 'react'
import Movetool from './ui/Mtitle'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <section className='d-flex flex-column align-items-center'>
      <div className='container d-flex flex-column align-items-center'>
        <div className='col-12 text-center mb-5'>
          <h2 className='notyet'>이 페이지는 오픈 준비 중입니다.</h2>
          <img src={process.env.PUBLIC_URL + '/notfound.png'} alt='서비스 준비 중' />
        </div>
        <div className='more-proj col-9 mb-5'>
          <Movetool textColor='#214aee' h2size='26px'>청량마켓몰 더 둘러보기</Movetool>
          <div className='linkwrap'>
            <Link
            to='products'
            style={{backgroundImage: 'url(/404ban1.jpg'}}
            className='col-12 col-lg-6'>
              신규상품
            </Link>
            <Link
            to=''
            style={{backgroundImage: 'url(/404ban2.jpg'}}
            className='col-12 col-lg-6'>
              고객센터
            </Link>
          </div>
        </div>
        <div className='more-team col-9 mb-5'>
          <Movetool textColor='#214aee' h2size='26px'>프로젝트 더 알아보기</Movetool>
          <div className='linkwrap'>
          <Link
            to=''
            style={{backgroundImage: 'url(/404ban3.jpg'}}
            className='col-12 col-lg-6'>
              Github
            </Link>
            <Link
            to=''
            style={{backgroundImage: 'url(/404ban4.jpg'}}
            className='col-12 col-lg-6'>
              Figma
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
