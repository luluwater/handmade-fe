import React, { useEffect, useState } from 'react'
import { useGetProductListQuery } from '../../../services/productApi'
import CartRecommendCard from './CartRecommendCard'
const YouWillLikeProduct = () => {
  const [card, setCard] = useState([])
  const { data, error, isLoading } = useGetProductListQuery()

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
        return (
          <div key={'dd' + i}>
            <CartRecommendCard
              type="product"
              dataFrom="data"
              cartIcon="true"
              productId={item.id}
              store={item.store_name}
              name={item.name}
              price={item.price}
              imgs={item.img_name}
              category={item.category_en_name}
              amount={item.amount}
              isFavorite={item.isFavorite}
              storeId={item.store_id}
              categoryId={item.category_id}
            />
          </div>
        )
      })}
    </>
  )
}

export default YouWillLikeProduct
