import React from 'react'
import '../Cart.scss'


const SevenStore = ({ openSeven }) => {
  if (!openSeven) return null
  return (
    <div className="overlay">
      <div className="modalContainer"></div>
    </div>
  )
}

export default SevenStore
