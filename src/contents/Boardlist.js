import React from 'react'
import Movetool from '../ui/Mtitle'


export default function Boardlist({datakey}) {
  return (
    <div>
      <h2>공지사항</h2>
      <ul>
      {
        datakey.map( (v, i)=>{
          return(
            <li key={i}>
              <Movetool textColor='#214aee'>{v.title}</Movetool>
            </li>
          )
        } )
      }
      </ul>
    </div>
  )
}
