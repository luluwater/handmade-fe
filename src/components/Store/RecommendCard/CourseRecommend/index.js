import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RecommendCard from '../index'
import { useParams } from 'react-router-dom'
import { useGetStoreCourseQuery } from '../../../../services/storeApi'

const CourseRecommend = () => {
  const { storeId } = useParams()
  const { data } = useGetStoreCourseQuery(storeId)

  return (
    <>
      <Row className="mb-5">
        {data?.map((item) => {
          return (
            <Col
              key={item.name}
              xs={6}
              className="d-flex justify-content-center"
            >
              <RecommendCard
                type="course"
                cartIcon=""
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

export default CourseRecommend
