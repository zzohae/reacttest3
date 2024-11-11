import React from 'react'
import Movetool from '../ui/Mtitle'
import Board from './Board'


export default function Boardlist({datakey}) {
  return (
    <div className='d-flex flex-column align-items-center'>
      {
        datakey.map( (v, i)=>{
          return(
            <div key={i} className='container mycontainer'>
              <Movetool textColor='#214aee'>{v.title}</Movetool>
              { i === 1 && <Board></Board> }
            </div>
          )
        } )
      }
    </div>
  )
}
