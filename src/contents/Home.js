import React from 'react'
//1. props 부모속성 -> 컴포넌트의 재사용
import Movetool from '../ui/Mtitle'

export default function Home({bgcolor, textcolor, vh, children, childcolor }) {
  return (
    <div style={{ "background" : bgcolor, "color": textcolor, "height": vh }}>
      <Movetool textColor={childcolor}>{children}</Movetool>
      
      
      </div>
  )
}
