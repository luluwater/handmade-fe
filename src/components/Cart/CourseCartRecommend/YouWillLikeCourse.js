import React, { useEffect } from 'react'
import { useGetCourseListQuery } from '../../../services/courseApi'
import RecommendCard from '../../Store/RecommendCard'
import CartRecommendCard from './CartRecommendCard'
import { v4 as uuidv4 } from 'uuid'

const YouWillLikeCourse = () => {
  const { data, error, isLoading } = useGetCourseListQuery()

  let newData = []

  if (data) {
    newData = [...data]?.sort(() => 0.5 - Math.random())
  }

  return (
    <>
      {newData?.map((item, i) => {
        if (i < 4) {
          return (
            <div key={uuidv4()}>
              <CartRecommendCard
                type="course"
                cartIcon=""
                id={item.id}
                store={item.store_name}
                name={item.name}
                price={item.price}
                img={item.imgName}
                category={item.category_en_name}
              />
            </div>
          )
        }
      })}
    </>
  )
}

export default YouWillLikeCourse
