import React from 'react'

export default function Movetool({ textColor, children, h2size, nomargin }) {
  return (
<div className={`d-flex flex-column ${nomargin ? '' : 'mb50'}`}>
      <i className="bi bi-circle-fill" style={{ color: textColor, fontSize: '0.75rem'}}></i>
      <h2 style={{ fontSize: h2size, fontWeight: 'bold' }}>
        {children}
      </h2>
</div>
  )
}