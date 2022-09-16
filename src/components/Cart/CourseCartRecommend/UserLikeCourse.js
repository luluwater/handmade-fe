import React, { useEffect, useState } from 'react'
import { useUserLikesCourseQuery } from '../../../services/userApi'
// import RecommendCard from '../../Store/RecommendCard'
import CartRecommendCard from './CartRecommendCard'
import { v4 as uuidv4 } from 'uuid'

const UserLikeCourse = () => {
  const { data, error, isLoading } = useUserLikesCourseQuery()

  const [randomData, setRandomData] = useState()

  if (!randomData) {
    let newData = []
    newData = [...data]?.sort(() => 0.5 - Math.random())
    setRandomData(newData)
  }

  return (
    <>
      {randomData?.map((item, i) => {
        if (i < 3) {
          return (
            <div key={uuidv4()}>
              <CartRecommendCard
                type="course"
                cartIcon=""
                id={item.course_id}
                store={item.store_name}
                name={item.course_name}
                price={item.price}
                img={item.img_name}
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
