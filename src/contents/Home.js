import React from 'react'
//1. props 부모속성 -> 컴포넌트의 재사용(컴포넌트공유)
//2. dbjson으로 모두 데이터 한군데 모아서 필요한 컴포넌트가 연결해서 쓰기(해당플랫폼 공유)
//3. dbjson -> sql api 연동(외부플랫폼 공유)
import Movetool from '../ui/Mtitle'

export default function Home({bgcolor, textcolor, vh, children, childcolor }) {
  return (
    <div style={{ "background" : bgcolor, "color": textcolor, "height": vh }}>
      <Movetool textColor={childcolor}>{children}</Movetool>
      
      
      </div>
  )
}
