import React from 'react'
import Movetool from '../ui/Mtitle'
import Best from '../layout/Best'


export default function Boardlist({datakey}) {
  return (
    <div className='d-flex flex-column align-items-center'>
      {
        datakey.map( (v, i)=>{
          return(
            <div key={i} className='container mycontainer'>
              <Movetool textColor='#214aee' h2size='34px'>{v.title}</Movetool>
              { i === 1 && <Best></Best> }
            </div>
          )
        } )
      }
    </div>
  )
}
