import React from 'react'
import { Link } from 'react-router-dom'
import navidb from '../db/db.json'

export default function Hd() {
  return (
    <div id='hd'>
      <div className="container">
        <h1><a href="/Home">로고</a></h1>
        <ul>
          {
            navidb.layout.navMenu.map((el, idx) => {
              return <li>
                <Link to={el.menuTitle}>
                      {el.menuTitle}
                </Link>
              </li>

            
            })
          }
          
        </ul>
      </div>
    </div>
  )
}
