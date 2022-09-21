import React, { useEffect, useState } from 'react'
import { useGetCourseListQuery } from '../../../services/courseApi'
import CartRecommendCard from './CartRecommendCard'

const YouWillLikeCourse = () => {
  const { data, error, isLoading } = useGetCourseListQuery()
  const [Card, setCard] = useState([])

  let newData = []

  useEffect(() => {
    if (data) {
      newData = [...data]?.sort(() => 0.5 - Math.random())
      setCard(newData)
    }
  }, [data])

  return (
    <>
      {Card?.map((item, i) => {
        if (i < 4) {
          return (
            <div key={'aa' + i}>
              <CartRecommendCard
                type="course"
                cartIcon=""
                productId={item.id}
                store={item.store_name}
                name={item.name}
                price={item.price}
                imgs={item.imgName}
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
