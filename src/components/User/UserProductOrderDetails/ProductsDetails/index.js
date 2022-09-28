import '../../../../components/User/User.scss'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  useProductOrderDetailsQuery,
  useCreateProductCommentMutation,
} from '../../../../services/userApi'
import { Form, Button, Table } from 'react-bootstrap'
import moment from 'moment'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Toast } from '../../../UI/SwalStyle'
import { AiFillStar } from 'react-icons/ai'

const ProductsDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useProductOrderDetailsQuery(orderNumber)
  // console.log('data:', data)
  const [showUserComment, setShowUserComment] = useState(false)
  const [showOrder, setShowOrder] = useState([])
  const [showHover, setHover] = useState(null)
  const [rating, setRating] = useState(null)
  // console.log('showHover', showHover)
  const [update] = useCreateProductCommentMutation()

  const handleClick = (user_id, product_id) => {
    setShowOrder([user_id, product_id])
    setShowUserComment(true)
    // console.log('showOrder', showOrder)
  }
  const user_id = showOrder[0]
  // console.log('user_id', user_id)
  const product_id = showOrder[1]
  // console.log('product_id', product_id)
  const pubilsh_time = moment(Date.now()).format('YYYY.MM.DD')
  //  console.log('pubilsh_time', pubilsh_time)

  const comment = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string().required('此欄位不得為空'),
    }),
    onSubmit: async (values) => {
      await update({
        user_id: user_id,
        product_id: product_id,
        content: values.text,
        pubilsh_time: pubilsh_time,
        score: showHover,
      })
    },
  })

  const handleClosed = async () => {
    try {
      await Toast.fire({
        icon: 'success',
        title: '已新增評論',
      })
      await setShowUserComment(false)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Table className="ms-8 user_order_list_table">
        <thead>
          <tr className="text-center">
            <th className="user_order_list_title">評價</th>
            <th className="user_order_list_title">圖片</th>
            <th className="user_order_list_title">商品名稱</th>
            <th className="user_order_list_title">數量</th>
            <th className="user_order_list_title">單價</th>
            <th className="user_order_list_title">小計</th>
          </tr>
        </thead>
        {data?.map((item) => {
          return (
            <tbody key={item.id}>
              <tr className="text-center align-middle">
                <td>
                  <button
                    colSpan={1}
                    className="user_comment_btn fw-bold"
                    onClick={() => handleClick(item.user_id, item.product_id)}
                  >
                    新增
                  </button>
                </td>
                <td>
                  <img
                    className="user_order_list_img"
                    src={require(`../../../../assets/product/product_${item.category_en_name}_${item.product_id}/${item.img_name}`)}
                    alt=""
                  />
                </td>
                <td>{item.product_name}</td>
                <td>{item.amount}</td>
                <td className="user_order_list_title">$ {item.price}</td>
                <td className="user_order_list_title">
                  $ {item.amount * item.price}
                </td>
              </tr>
            </tbody>
          )
        })}
      </Table>
      {showUserComment && (
        <div className="user_comment_card d-flex justify-content-center align-items-center">
          <form onSubmit={comment.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="star" className="fw-bold my-2">
                訂單評價
              </Form.Label>
              <div className="star_wrapper mb-2">
                <div>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                      <label key={i}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={(e) => {
                            e.preventDefault()
                            setRating(ratingValue)
                          }}
                          // onChange={ratingValue}
                          className="star"
                        />
                        <AiFillStar
                          className={`star_fa-star ${
                            ratingValue <= (showHover || 0)
                              ? 'star_main'
                              : 'star_noSelect'
                          }`}
                          onMouseEnter={() => setHover(ratingValue)}
                        />
                      </label>
                    )
                  })}
                </div>
              </div>
              <Form.Label htmlFor="text" className="fw-bold my-2">
                訂單回饋
              </Form.Label>
              <Form.Control
                type="text"
                name="text"
                onChange={comment.handleChange}
                onBlur={comment.handleBlur}
                value={comment.values.text}
              />
              {/* {showTextError && (
                <div className="mt-2 text-danger mb-0">
                  {formik.errors.text}
                </div>
              )} */}
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  type="button"
                  onClick={() => setShowUserComment(false)}
                  className="fw-bold user_password_btn mt-5 me-5"
                >
                  取消
                </Button>
                <Button
                  className="fw-bold user_password_btn mt-5"
                  type="submit"
                  onClick={handleClosed}
                >
                  儲存
                </Button>
              </div>
            </Form.Group>
          </form>
        </div>
      )}
    </>
  )
}
export default ProductsDetails
