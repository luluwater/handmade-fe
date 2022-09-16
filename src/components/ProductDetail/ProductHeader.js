import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductPic from './ProductPic'
import ProductIntro from './ProductIntro'
import './ProductDetail.scss'
import { useGetProductDetailQuery } from '../../services/productApi'
import { useParams } from 'react-router-dom'

const ProductHeader = () => {
  const { productId } = useParams()
  const { data } = useGetProductDetailQuery(productId)

  return (
    <>
      <div className="d-flex justify-content-center p-0 w-100">
        <Row style={{ width: '1560px' }} className="py-5 borderButtom">
          {data?.map((item) => {
            return (
              <Col lg={6} sm={12} key={item.id}>
                <ProductPic
                  id={item.id}
                  category={item.category_en_name}
                  img={item.img_name}
                />
              </Col>
            )
          })}
          {data?.map((item) => {
            return (
              <Col lg={6} sm={12} key={item.id}>
                <ProductIntro
                  productId={item.id}
                  imgs={item.img_name}
                  store={item.store_name}
                  name={item.name}
                  price={item.price}
                  intro={item.intro}
                  amount={item.amount}
                  category={item.category_en_name}
                  storeId={item.store_id}
                  categoryId={item.category_id}
                  isFavorite={item.isFavorite}
                  type={'product'}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}

export default ProductHeader
