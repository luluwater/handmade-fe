import { Navigation } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'

function ProductCard() {
  return (
    <Card className="card m-2">
      <Swiper
        modules={[Navigation]}
        navigation
        effect={'slide'}
        speed={800}
        slidesPerView={1}
        loop
        className="card_swiper"
      >
        <SwiperSlide>
          <img
            src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/300423879_212047957811720_5762218249920350653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-x--Hs8R1GcAX9fXW9k&_nc_ht=scontent.ftpe8-1.fna&oh=00_AT-LP92pq_0gPqMJZKlGtmmdimvnEWW-4KGvuYfi20yYzg&oe=630D9EBE"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/300423879_212047957811720_5762218249920350653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-x--Hs8R1GcAX9fXW9k&_nc_ht=scontent.ftpe8-1.fna&oh=00_AT-LP92pq_0gPqMJZKlGtmmdimvnEWW-4KGvuYfi20yYzg&oe=630D9EBE"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/300423879_212047957811720_5762218249920350653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-x--Hs8R1GcAX9fXW9k&_nc_ht=scontent.ftpe8-1.fna&oh=00_AT-LP92pq_0gPqMJZKlGtmmdimvnEWW-4KGvuYfi20yYzg&oe=630D9EBE"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      {/* // className='d-flex justify-content-between align-items-center' */}
      <Row className="justify-content-between align-items-center mx-1">
        <Col className='mt-2'>
          <p className="mb-1">|路室|</p>
          <h6 className="mb-1">陶藝手作體驗</h6>
          <p className="text-primary fw-bold">$1200</p>
        </Col>
        <Col sm={4} className="text-end">
          <button className="bg-primary card_faverite">
            <FontAwesomeIcon icon="far fa-heart" inverse size="1x" />
          </button>
        </Col>
      </Row>
    </Card>
  )
}
export default ProductCard
