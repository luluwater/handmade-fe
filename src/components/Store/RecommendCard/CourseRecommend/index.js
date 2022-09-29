import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import RecommendCard from '../index'
import { useParams } from 'react-router-dom'
import { useGetCourseListQuery } from '../../../../services/courseApi'
import { useGetStoreCourseQuery } from '../../../../services/storeApi'

const CourseRecommend = () => {
  const { storeId } = useParams()
  const { data } = useGetCourseListQuery()
  const [card, setCard] = useState([])

  useEffect(() => {
    if (data) {
      let newData = data?.filter((item) => item.store_id === Number(storeId))
      setCard(newData)
      console.log('data', data)
      console.log('card', card)
    }
  }, [data])  

  return (
    <>
      <Row className="mb-5">
        {card?.map((item) => {
          return (
            <Col
              key={item.name}
              xs={6}
              className="d-flex justify-content-center"
            >
              <RecommendCard
                type="course"
                cartIcon=""
                productId={item.id}
                store={item.store_name}
                name={item.name}
                price={item.price}
                img={item.imgName}
                category={item.category_en_name}
                isFavorite={item.isFavorite}
                storeId={item.store_id}
                categoryId={item.category_id}
                amount={item.amount}
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default CourseRecommend
