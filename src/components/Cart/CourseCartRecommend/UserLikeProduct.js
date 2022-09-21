import React, { useEffect, useState } from 'react'
import { useUserLikesProductQuery } from '../../../services/userApi'
import CartRecommendCard from './CartRecommendCard'
import { v4 as uuidv4 } from 'uuid'

const UserLikeProduct = () => {
  const { data } = useUserLikesProductQuery()
  const [newData, setNewData] = useState([])

  useEffect(() => {
    if (data) {
      setNewData([...data]?.sort(() => 0.5 - Math.random()))
    }
  }, [data])
  
  // let newData = []

  // if (data) {
  //   newData = [...data]?.sort(() => 0.5 - Math.random())
  // }

  return (
    <>
      {newData?.map((item, i) => {
        if (i < 4) {
          return (
            <div key={uuidv4()}>
              <CartRecommendCard
                type="product"
                cartIcon="true"
                id={item.product_id}
                store={item.store_name}
                name={item.product_name}
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

export default UserLikeProduct
