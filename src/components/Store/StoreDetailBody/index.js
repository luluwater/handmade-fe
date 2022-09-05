import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './StoreDetailBody.scss'
import StoreSwiperKV from '../StoreSwiperKV'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const index = () => {
  return (
    <>
      <section className="StoreDetailBody">
        <div className="d-flex StoreDetailBody_sloganBox d-flex justify-content-center">
          <h2 className="StoreDetailBody_slogan text-center ">
            把自我比擬為心靈的舞台，各種知覺感官來回地表演。
            我們期盼建立起一個這樣的空間，把腦中那些，
            哪怕是碎片也好、起承轉合也好，用雙手與技藝實踐。
          </h2>
        </div>

        <StoreSwiperKV />

        <article className="StoreDetailBody_Intro">
          <p className="text-center">
            「你可以醒著，但同時在這裡決定夢的形狀。」 哲學家 David Hume
            把自我比擬為心靈的舞台，各種知覺感官來回地表演。我們期盼建立起一個這樣的空間，把腦中那些，哪怕是碎片也好、起承轉合也好，用雙手與技藝實踐。
          </p>
        </article>

        <div className="StoreDetailBody_storeInfoBox align-items-center">
          <ul className="list-unstyled StoreDetailBody_storeInfo">
            <li>
              <h5>店家資訊</h5>
            </li>
            <li>
              <strong>地址：</strong>
              <span>台北市中正區金門街1-8號1號</span>
            </li>
            <li>
              <strong>交通方式：</strong>
              <span>
                古亭站二號出口往羅斯福路三段方向直行，步行約5分鐘，右轉至金門街
              </span>
            </li>
            <li>
              <strong>聯絡電話：</strong>
              <span>0958-259-166</span>
            </li>
            <li>
              <strong>營業時間：</strong>
              <span>Tue-Sat. 10:30 - 18:00</span>
            </li>
          </ul>
          <div className="StoreDetailBody_storeMapBox">MAP</div>
        </div>

        <div className="StoreDetailBody_SNS d-flex justify-content-center">
          <Link to="/">
            <FontAwesomeIcon
              icon={faFacebookF}
              size="3x"
              className="StoreDetailBody_awesomeIcon"
              fixedWidth
            />
          </Link>

          <Link to="/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              className="StoreDetailBody_awesomeIcon"
              fixedWidth
            />
          </Link>
        </div>

        <div>
          <Row className="StoreDetailBody_recommendBox">
            <Col
              xs={12}
              md={6}
              className="StoreDetailBody_courseRecommend"
            ></Col>
            <Col
              xs={12}
              md={6}
              className="StoreDetailBody_productRecommend"
            ></Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default index
