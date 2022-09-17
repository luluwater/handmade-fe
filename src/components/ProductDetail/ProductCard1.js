import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'

////////// data //////////
import { useGetProductListQuery } from '../../services/productApi'

function ProductCard1() {
  const { data } = useGetProductListQuery()
  const getData = data?.map((item) => {
    return item.isFavorite
  })
  console.log('getData', getData)
  return (
    <>
      <h4 className="mb-5 product_detail_card_title text-center mt-10 mb-8  fw-bold">
        商品推薦
      </h4>
      <Container className="product_detail_card mb-12 w-100 d-flex"></Container>
    </>
  )
}

export default ProductCard1
