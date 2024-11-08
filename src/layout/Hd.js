import React from 'react'
import allData from '../db/allData.json'
import { Link } from 'react-router-dom'
import Topad from '../contents/Topad'
import { ReactComponent as Logo } from '../svg/logo_wide.svg';
import Searchbox from '../ui/Searchbox';
import { ReactComponent as Delivericon } from '../svg/truck.svg'
import { Btn } from '../ui/commonui';
import Util from '../ui/Util';


export default function Hd() {


  return (
    <header className='d-flex flex-column align-items-center'>
      <Topad></Topad>
      <div className="hdtop container d-flex justify-content-between align-items-center">
        <h1><a href="/"><Logo width='150' height='53.708'></Logo></a></h1>
        <Searchbox></Searchbox>
        <Util></Util>
      </div>
      <div className="container">
        <nav className="gnb d-flex justify-content-between align-items-center">
            <div className='mainmenu position-relative'>
              <button>{allData.navdata.category.title}</button>
              <ul className='hovermenu'>
                  {
                    allData.navdata.category.submenu.map((v, i) => {
                      return(
                        <li className='menu d-flex position-relative' key={i}>
                            <Link to={v.linkto} className='w-100 h-100'>{v.title}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
            <ul className=' allmenu d-flex justify-content-start align-items-center'>
            {
              allData.navdata.promotionmenu.map((v, i)=>{
                  return(
                    <li className='menu d-flex' key={i}>
                        <Link  to={v.linkto}>{v.title}</Link>
                    </li>
                  )
              })
            }
          </ul>
          <Btn version='v2' className='delivery'>
            <Delivericon width='24' height='24'></Delivericon>
            {allData.delivery.title}
          </Btn>
        </nav> 
      </div>
    </header>
  )
}
