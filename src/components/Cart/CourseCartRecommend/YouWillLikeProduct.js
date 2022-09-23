import React, { useEffect, useState } from 'react'
import { useGetProductListQuery } from '../../../services/productApi'
import CartRecommendCard from './CartRecommendCard'
const YouWillLikeProduct = () => {
  const { data, error, isLoading } = useGetProductListQuery()
// /  console.log('data', data)

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
            <div key={'dd' + i}>
              <CartRecommendCard
                type="product"
                cartIcon="true"
                productId={item.id}
                store={item.store_name}
                name={item.name}
                price={item.price}
                imgs={item.img_name}
                category={item.category_en_name}
                amount={item.amount}
              />
            </div>
          )
        }
      })}
    </>
  )
}

export default YouWillLikeProduct
