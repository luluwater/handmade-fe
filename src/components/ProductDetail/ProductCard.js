import Image1_1 from '../../assets/product/product_pottery_39/陶藝_商品_歡樂陶一家_造型把手杯_1.jpg'
import Image1_2 from '../../assets/product/product_pottery_39/陶藝_商品_歡樂陶一家_造型把手杯_2.jpg'
import Image1_3 from '../../assets/product/product_pottery_39/陶藝_商品_歡樂陶一家_造型把手杯_4.jpg'
import Image2_1 from '../../assets/product/product_pottery_49/陶藝_商品_純Object_夜_1.jpg'
import Image2_2 from '../../assets/product/product_pottery_49/陶藝_商品_純Object_夜_2.jpg'
import Image2_3 from '../../assets/product/product_pottery_49/陶藝_商品_純Object_夜_3.jpg'
import Image3_1 from '../../assets/product/product_bakery_106/商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_1.jpg'
import Image3_2 from '../../assets/product/product_bakery_106/商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_3.jpg'
import Image3_3 from '../../assets/product/product_bakery_106/商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_5.jpg'
import Image4_1 from '../../assets/product/product_floral_69/花藝＿商品＿草地學花＿乾燥花玻璃盒＿1.jpg'
import Image4_2 from '../../assets/product/product_floral_69/花藝＿商品＿草地學花＿乾燥花玻璃盒＿4.jpg'
import Image4_3 from '../../assets/product/product_floral_69/花藝＿商品＿草地學花＿乾燥花玻璃盒＿2.jpg'
import cart from '../../assets/cart.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'

import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../services/productApi'

import { useDispatch } from 'react-redux'
import { addProductCart } from '../../slices/productCart-slice'

import { useGetProductListQuery } from '../../services/productApi'

function ProductCard() {
  const { data } = useGetProductListQuery()
  const getData = data?.map((item) => {
    return item.isFavorite
  })
  console.log('gatData', getData?.[38])
  const Info = [
    {
      productId: '39',
      storeId: '8',
      categoryId: '2',
      img: [Image1_1, Image1_2, Image1_3],
      store: '歡樂陶一家',
      name: '造型把手杯',
      category: 'pottery',
      price: '1500',
      link: '/product/detail/39',
      amount: 5,
      isFavorite: getData?.[38],
      imgs: ['陶藝_商品_歡樂陶一家_造型把手杯_1.jpg'],
    },
    {
      productId: '49',
      storeId: '10',
      categoryId: '2',
      img: [Image2_1, Image2_2, Image2_3],
      store: '純 Object',
      name: '夜 - 手作陶盤器',
      category: 'pottery',
      price: '1750',
      link: '/product/detail/49',
      amount: 5,
      isFavorite: getData?.[48],
      imgs: ['陶藝_商品_純Object_夜_1.jpg'],
    },
    {
      productId: '106',
      storeId: '22',
      categoryId: '5',
      img: [Image3_1, Image3_2, Image3_3],
      store: 'Welcome_Bake',
      name: '阿爾薩斯蘋果塔',
      category: 'bakery',
      price: '780',
      link: '/product/detail/106',
      amount: 5,
      isFavorite: getData?.[105],
      imgs: ['商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_1.jpg'],
    },
    {
      productId: '69',
      storeId: '14',
      categoryId: '3',
      img: [Image4_1, Image4_2, Image4_3],
      store: '草地學花',
      name: '乾燥花玻璃盒',
      category: 'floral',
      price: '1400',
      link: '/product/detail/69',
      amount: 5,
      isFavorite: getData?.[68],
      imgs: ['花藝＿商品＿草地學花＿乾燥花玻璃盒＿1.jpg'],
    },
  ]
  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()
  const dispatch = useDispatch()

  return (
    <>
      <h4 className="mb-5 product_detail_card_title text-center mt-10 mb-8  fw-bold">
        商品推薦
      </h4>

      <Container className="product_detail_card mb-12 w-100 d-flex">
        {Info.map((v, i) => {
          return (
            <Col
              md={3}
              xs={6}
              className="product_detail_card_m px-3"
              key={v.name}
            >
              {/* ========== 商品照片 ========== */}
              <a href={v.link}>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  effect={'slide'}
                  speed={800}
                  slidesPerView={1}
                  loop={true}
                  className="product_detail_card_swiper rounded shadow"
                >
                  {v.img.map((v2, i2) => {
                    return (
                      <SwiperSlide>
                        <img
                          key={v2[0]}
                          className="swiper-slide product_detail_card_img"
                          src={v2}
                          alt="products"
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </a>

              {/* ========== 商品照片 ========== */}
              <div className="d-flex justify-content-between">
                <div>
                  <p className="product_detail_card_store m-2 text-truncate">
                    <small>| {v.store} |</small>
                  </p>
                  <a href={v.link}>
                    <h6 className="product_detail_card_text m-1 fw-bold">
                      {v.name}
                    </h6>
                  </a>
                  <h6 className="product_detail_card_text text-primary fw-bold m-1">
                    $ {v.price}
                  </h6>
                </div>

                {/* ========== 收藏 & 購物車 ========== */}

                <div className="d-flex align-items-center me-2">
                  <button
                    onClick={() => {
                      if (v.isFavorite) {
                        removeUserFavoriteProduct({
                          productId: v.productId,
                        })
                      } else {
                        addUserFavoriteProduct({
                          productId: v.productId,
                          storeId: v.storeId,
                          categoryId: v.categoryId,
                        })
                      }
                    }}
                    className="bg-primary product_detail_card_favorite me-2"
                  >
                    <FontAwesomeIcon
                      icon={v.isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                      inverse
                    />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        addProductCart({
                          productId: v.productId,
                          name: v.name,
                          imgs: v.imgs,
                          price: Number(v.price),
                          category: v.category,
                          amount: v.amount,
                          quantity: 1,
                        })
                      )
                    }}
                    className="bg-secondary product_detail_card_favorite border-0 rounded-circle"
                  >
                    <img
                      src={cart}
                      alt=""
                      className="product_detail_card_cart"
                    />
                  </button>
                </div>
              </div>
              {/* ========== 收藏 & 購物車 ========== */}
            </Col>
          )
        })}
      </Container>
    </>
  )
}

export default ProductCard
