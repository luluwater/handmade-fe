import React from 'react'
import { useUserLikesCourseQuery } from '../../../services/userApi'
import RecommendCard from '../../Store/RecommendCard'
import { v4 as uuidv4 } from 'uuid'

const UserLikeRecommend = () => {
  const { data } = useUserLikesCourseQuery()
  console.log(data)
  return (
    <>
      {data?.map((item) => {
        console.log('123')
        return (
          <>
            <RecommendCard
              key={uuidv4()}
              type="course"
              id={item.course_id}
              store={item.store_name}
              name={item.course_name}
              price={item.price}
              img={item.img_name}
              category={item.category_en_name}
            />
          </>
        )
      })}
    </>
  )
}

export default UserLikeRecommend