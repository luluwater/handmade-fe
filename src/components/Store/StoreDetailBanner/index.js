import React from 'react'
import storeBanner from '../../../assets/store_banner/store_pettery＿6.jpg'
import './StoreDetailBanner.scss'

const index = () => {
  return (
    <>
      <div className="store_detail_banner_imgBox mt-5">
        <img src={storeBanner} alt="" />
        <h1 className="text-white text-center">璐室</h1>
      </div>
    </>
  )
}

export default index
