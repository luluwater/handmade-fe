import '../../../../components/User/User.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductOrderDetailsQuery } from '../../../../services/userApi'
import { Table } from 'react-bootstrap'

const ProductsDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useProductOrderDetailsQuery(orderNumber)
  // console.log("data:", data )
  return (
    <>
      <Table className="ms-8 user_order_list_table">
        <thead>
          <tr className="text-center">
            <th></th>
            <th>商品名稱</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
        </thead>
        {data?.map((item) => {
          return (
            <tbody key={item.id}>
              <tr className="text-center align-middle">
                <td>
                  <img
                    className="user_order_list_img"
                    src={require(`../../../../assets/product/product_${item.category_en_name}_${item.product_id}/${item.img_name}`)}
                    alt=""
                  />
                </td>
                <td>{item.product_name}</td>
                <td>{item.amount}</td>
                <td>$ {item.price}</td>
                <td>$ {item.amount * item.price}</td>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </>
  )
}
export default ProductsDetails
