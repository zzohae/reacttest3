import React from 'react'
import Storelist from '../ui/Storelist';

export default function 캔버스() {
  return (
    <div><h2>이 페이지는 컴포넌트 확인용 테스트페이지입니다. 작업 후 삭제됩니다😎</h2><br />

      <div className="d-flex flex-column gap-3">
      <Storelist />
      </div>
    </div>
  )
}
