import React from 'react'
import { ReactComponent as Searchicon } from '../svg/searchicon.svg'

export default function Searchbox() {
  return (
    <div className='search-box'>
      <input type="text" placeholder='검색어를 입력하세요' />
      <Searchicon width='30' height='30'></Searchicon>
    </div>
  )
}
