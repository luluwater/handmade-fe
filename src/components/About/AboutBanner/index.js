import '../About.scss'
import Banner from '../../../assets/about_me/sikkema.jpg'
import React from 'react'

const AboutBanner = () => {
  return (
    <>
      {/* <h1 className="text-center">這邊是AboutBanner</h1> */}
      <div className="position-relative d-flex justify-content-center align-items-center">
        <h1 className="about_banner_text position-absolute text-white text-center">
          ABOUT <br /> HANDMADE
        </h1>
        <img
          className="about_banner_img img-fluid w-100 h-100 "
          src={Banner}
          alt="banner"
        />
      </div>
    </>
  )
}
export default AboutBanner
