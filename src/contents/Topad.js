import React from 'react'

export default function Topad() {
  return (
    <div className='top-ad w-100'>
      <div className='d-flex justify-content-center align-items-center'>
        <p className='fs-18 text-center text-white'>광고~~~~~~~~~</p>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M22.5 7.5L7.5 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 7.5L22.5 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
