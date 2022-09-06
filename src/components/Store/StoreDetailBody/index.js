import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './StoreDetailBody.scss'
import StoreSwiperKV from '../StoreSwiperKV'
import CourseRecommend from '../RecommendCard/CourseRecommend'
import ProductRecommend from '../RecommendCard/ProductRecommend'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router-dom'
import { useGetStoreDetailQuery } from '../../../services/storeApi'

const StoreDetailBody = () => {
  const { storeId } = useParams()
  const { data } = useGetStoreDetailQuery(storeId)

  return (
    <>
      {data?.map((item) => {
        return (
          <section key={item.id} className="StoreDetailBody">
            <div className="d-flex StoreDetailBody_sloganBox d-flex justify-content-center">
              <h2 className="StoreDetailBody_slogan text-center ">
                {item.slogan}
              </h2>
            </div>

            <StoreSwiperKV />

            <article className="StoreDetailBody_Intro">
              <p className="text-center">
                {item.intro}
              </p>
            </article>

            <div className="StoreDetailBody_storeInfoBox align-items-center">
              <ul className="list-unstyled StoreDetailBody_storeInfo">
                <li>
                  <h5>店家資訊</h5>
                </li>
                <li>
                  <strong>地址：</strong>
                  <span>{item.address}</span>
                </li>
                <li>
                  <strong>交通方式：</strong>
                  <span>
                    {item.route}
                  </span>
                </li>
                <li>
                  <strong>聯絡電話：</strong>
                  <span>{item.phone}</span>
                </li>
                <li>
                  <strong>營業時間：</strong>
                  <span>{item.opening_hour}</span>
                </li>
              </ul>
              <div className="StoreDetailBody_storeMapBox">MAP</div>
            </div>

            <div className="StoreDetailBody_SNS d-flex justify-content-center">
              <Link to={item.FB_url}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="3x"
                  className="StoreDetailBody_awesomeIcon"
                  fixedWidth
                />
              </Link>

              <Link to={item.IG_url}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="3x"
                  className="StoreDetailBody_awesomeIcon"
                  fixedWidth
                />
              </Link>
            </div>

            <Row className="StoreDetailBody_recommendBox justify-content-center ">
              <Col xs={12} md={5} className="StoreDetailBody_courseRecommend">
                <p className="text-center my-4">課程推薦</p>
                <CourseRecommend />
              </Col>

              <Col xs={12} md={5} className="StoreDetailBody_courseRecommend">
                <p className="text-center my-4">商品推薦</p>
                <ProductRecommend />
              </Col>
            </Row>
          </section>
        )
      })}
    </>
  )
}

export default StoreDetailBody
