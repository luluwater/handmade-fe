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

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const StoreDetailBody = () => {
  const { storeId } = useParams()
  const { data } = useGetStoreDetailQuery(storeId)

  const defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 0],
  })
  Leaflet.Marker.prototype.options.icon = defaultIcon

  return (
    <>
      {data?.map((item) => {
        return (
          <section key={item.img} className="StoreDetailBody">
            <div className="d-flex StoreDetailBody_sloganBox d-flex justify-content-center">
              <h2 className="StoreDetailBody_slogan text-center ">
                {item.slogan}
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <StoreSwiperKV
                id={item.id}
                category={item.category_en_name}
                kvImg={item.kv_imgs}
              />
            </div>

            <article
              className="StoreDetailBody_Intro"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <p className="text-center">{item.intro}</p>
            </article>

            <div
              className="StoreDetailBody_storeInfoBox align-items-center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
            >
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
                  <span>{item.route}</span>
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
              <div className="StoreDetailBody_storeMapBox">
                <MapContainer
                  center={[item.store_lat, item.store_lng]}
                  zoom={25}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[item.store_lat, item.store_lng]}>
                    {/* <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                  </Marker>
                </MapContainer>
              </div>
            </div>

            <div className="StoreDetailBody_SNS d-flex justify-content-center">
              <a href={item.FB_url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="3x"
                  className="StoreDetailBody_awesomeIcon"
                  fixedWidth
                />
              </a>

              <a href={item.IG_url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="3x"
                  className="StoreDetailBody_awesomeIcon"
                  fixedWidth
                />
              </a>
            </div>
            <div StoreDetailBody_SNSLine></div>

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
