import React, { useEffect, useState } from 'react'
import { useUserLikesCourseQuery } from '../../../services/userApi'
// import RecommendCard from '../../Store/RecommendCard'
import CartRecommendCard from './CartRecommendCard'


const UserLikeCourse = () => {
  const { data } = useUserLikesCourseQuery()
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
            <div key={'cc' + i}>
              <CartRecommendCard
                type="course"
                cartIcon=""
                productId={item.course_id}
                store={item.store_name}
                name={item.course_name}
                price={item.price}
                imgs={item.img_name}
                category={item.category_en_name}
              />
            </div>
          )
        }
      })}
    </>
  )
}

export default UserLikeCourse
