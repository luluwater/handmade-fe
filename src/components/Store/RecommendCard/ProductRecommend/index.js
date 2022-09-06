import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RecommendCard from '../index'
import { useParams } from 'react-router-dom'
import { useGetProductCourseQuery } from '../../../../services/storeApi'

const ProductRecommend = () => {
  const { storeId } = useParams()
  const { data } = useGetProductCourseQuery(storeId)
  console.log(data)
  return (
    <>
      <Row className="mb-5">
        {data?.map((item, i) => {
          if (i < 2)
            return (
              <Col
                key={item.name}
                xs={6}
                className="d-flex justify-content-center"
              >
                <RecommendCard
                  type="product"
                  id={item.id}
                  store={item.store_name}
                  name={item.name}
                  price={item.price}
                  img={item.imgName}
                  category={item.category_en_name}
                />
              </Col>
            )
        })}
      </Row>
    </>
  )
}
export default ProductRecommend
