import React from 'react'
import { ReactComponent as Searchicon } from '../svg/searchicon.svg'

export default function Searchbox() {
  return (
    <>
    <div className='search-box d-none d-lg-flex'>
      <input type="text" placeholder='검색어를 입력하세요' className='d-none d-lg-block' />
      <Searchicon width='30' height='30'></Searchicon>
    </div>
    <Searchicon width='30' height='30' className='d-block d-lg-none'></Searchicon>
    </>
  )
}
