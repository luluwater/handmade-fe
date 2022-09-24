import React, { useEffect, useState } from 'react'
import { useUserLikesCourseQuery } from '../../../services/userApi'
// import RecommendCard from '../../Store/RecommendCard'
import CartRecommendCard from './CartRecommendCard'

const UserLikeCourse = ({ userId }) => {
  const { data } = useUserLikesCourseQuery(userId)
  // const [card, setCard] = useState([])

  // useEffect(() => {
  //   if (data) {
  //     if (card.length == 0) {
  //       let newData = [...data]?.sort(() => 0.5 - Math.random()).slice(0, 4)
  //       setCard(newData)
  //     } else {
  //       let newData = card.map((c) => {
  //         return data.find((course) => {
  //           return course.id == data.id
  //         })
  //       })
  //       setCard([...newData])
  //     }
  //   }
  // }, [data])

  return (
    <>
      {data?.length > 0 ? (
        data?.map((item, i) => {
          if (i < 4) {
            return (
              <div key={'cc' + i}>
                <CartRecommendCard
                  type="course"
                  dataFrom="user"
                  cartIcon=""
                  productId={item.course_id}
                  store={item.store_name}
                  name={item.course_name}
                  price={item.price}
                  imgs={item.img_name}
                  category={item.category_en_name}
                  isFavorite={true}
                  storeId={item.store_id}
                  categoryId={item.category_id}
                />
              </div>
            )
          }
        })
      ) : (
        <h3 className="my-10">目前尚未有收藏喔</h3>
      )}
    </>
  )
}

export default UserLikeCourse
