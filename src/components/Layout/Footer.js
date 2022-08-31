import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLine,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="list-unstyled d-flex justify-content-center align-items-center pt-5">
          <li>
            <FontAwesomeIcon
              icon={faFacebookF}
              size="2xl"
              className="awesomeIcon"
              fixedWidth
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faYoutube}
              size="2xl"
              className="awesomeIcon"
              fixedWidth
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="awesomeIcon"
              fixedWidth
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLine}
              size="2xl"
              className="awesomeIcon"
              fixedWidth
            />
          </li>
        </ul>
        <div className="d-flex">
          <p>會員制度</p>
          <p>服務條款</p>
          <p>訂閱電子報</p>
          <p>品牌招募</p>
        </div>
      </div>
    </>
  )
}

export default Footer
