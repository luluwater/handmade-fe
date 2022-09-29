import '../../../../components/User/User.scss'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  useCourseOrderDetailsQuery,
  useCreateCourseCommentMutation,
} from '../../../../services/userApi'
import { Form, Button, Table } from 'react-bootstrap'
import moment from 'moment'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Toast } from '../../../UI/SwalStyle'
import { AiFillStar } from 'react-icons/ai'
// import StarRating from './star'
// import Comment from '../Comment'

const CoursesDetails = () => {
  const { orderNumber } = useParams()
  const [showUserComment, setShowUserComment] = useState(false)
  const [showOrder, setShowOrder] = useState([])
  const [showHover, setHover] = useState(null)
  const [rating, setRating] = useState(null)
  // console.log('showHover', showHover)
  const { data } = useCourseOrderDetailsQuery(orderNumber)
  // console.log('data', data)
  const [update] = useCreateCourseCommentMutation()

  const handleClick = (user_id, course_id) => {
    setShowOrder([user_id, course_id])
    setShowUserComment(true)
    // console.log('showOrder', showOrder)
  }
  const user_id = showOrder[0]
  // console.log('user_id', user_id)
  const course_id = showOrder[1]
  // console.log('course_id', course_id)
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
        course_id: course_id,
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

  function deleteCard(values) {
    setRating(null)
    setHover(null)
    comment.values.text = ''
    setShowUserComment(false)
  }

  // const showTextError = formik.touched.text && formik.errors.text
  // const isValid = !showTextError
  return (
    <>
      <Table className="ms-8 user_order_list_table">
        <thead>
          <tr className="text-center">
            <th className="user_order_list_title">評價</th>
            <th className="user_order_list_title">圖片</th>
            <th className="user_order_list_title">課程名稱</th>
            <th className="user_order_list_title">預約時段</th>
            <th className="user_order_list_title">人數</th>
            <th className="user_order_list_title">單價</th>
            <th className="user_order_list_title">小計</th>
          </tr>
        </thead>
        {data?.map((item) => {
          const transformCourse = moment(item.date).format(
            'YYYY.MM.DD - hh:mma'
          )
          return (
            <tbody key={item.id}>
              <tr className="text-center align-middle">
                <td>
                  <button
                    colSpan={1}
                    className="user_comment_btn fw-bold"
                    onClick={() => handleClick(item.user_id, item.course_id)}
                  >
                    新增
                  </button>
                </td>
                <td className="text-center">
                  <img
                    className="user_order_list_img"
                    src={require(`../../../../assets/course/course_${item.category_en_name}_${item.course_id}/${item.img_name}`)}
                    alt="course img"
                  />
                </td>
                <td>{item.course_name}</td>
                <td>{transformCourse}</td>
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
                  onClick={deleteCard}
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
export default CoursesDetails
