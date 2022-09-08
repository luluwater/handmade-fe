import '../News.scss'
import Banner from '../../../assets/news/News_pic2.jpg'
import React from 'react'

const NewsBanner = () => {
  return (
    <>
      {/* <h1 className="text-center">這邊是AboutBanner</h1> */}
      <div className="position-relative d-flex justify-content-center align-items-center">
        <h1 className="news_banner_text position-absolute text-white text-center">
          LATEST <br /> NEWS
        </h1>
        <img
          className="news_banner_img img-fluid w-100 h-100 "
          src={Banner}
          alt="news"
        />
      </div>
    </>
  )
}
export default NewsBanner
