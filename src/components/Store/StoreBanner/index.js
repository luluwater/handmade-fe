import React from 'react'
import './StoreBanner.scss'
import storeBanner from '../../../assets/store_banner/store_banner.jpg'

const index = () => {
  return (
    <>
      <div className="store_banner mt-4">
        <img src={storeBanner} alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="store_banner_bottomWave"
          viewBox="0 0 1440 90"
        >
          <path
            fill="#f4eee8"
            fill-opacity="1"
            d="M0,32L120,42.7C240,53,480,75,720,85.3C960,96,1200,96,1320,96L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        
      </div>
    </>
  )
}

export default index
