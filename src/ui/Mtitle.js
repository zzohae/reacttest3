import React from 'react'

export default function Movetool({ textColor, children, h2size }) {
  return (
<div style={{display: 'flex', marginBottom: '50px'}}>    
      <i className="bi bi-circle-fill" style={{ color: textColor, fontSize: '0.75rem'}}></i>   
      <h2 style={{ fontSize: h2size, fontWeight: 'bold', margin: '15px 0' }}>
        {children}
        <i className="bi bi-chevron-right" style={{ color: textColor, marginLeft: '8px', fontSize: '2rem' }}></i>
      </h2>
</div>
  )
}