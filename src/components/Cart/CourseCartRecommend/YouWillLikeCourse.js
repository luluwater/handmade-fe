import React, { useEffect, useState } from 'react'
import { useGetCourseListQuery } from '../../../services/courseApi'
import CartRecommendCard from './CartRecommendCard'

const YouWillLikeCourse = () => {
  const [card, setCard] = useState([])
  const { data, error, isLoading } = useGetCourseListQuery()

  useEffect(() => {
    if (data) {
      if (card.length == 0) {
        let newData = [...data]?.sort(() => 0.5 - Math.random()).slice(0, 4)
        setCard(newData)
      } else {
        let newData = card.map((v) => {
          return data.find((product) => {
            return product.id == v.id
          })
        })
        setCard([...newData])
      }
    }
  }, [data])

  return (
    <>
      {card?.map((item, i) => {
        if (i < 4) {
          return (
            <div key={'aa' + i}>
              <CartRecommendCard
                type="course"
                dataFrom="data"
                cartIcon=""
                productId={item.id}
                store={item.store_name}
                name={item.name}
                price={item.price}
                imgs={item.imgName}
                category={item.category_en_name}
                isFavorite={item.isFavorite}
                storeId={item.store_id}
                categoryId={item.category_id}
              />
            </div>
          )
        }
      })}
    </>
  )
}

export default YouWillLikeCourse
