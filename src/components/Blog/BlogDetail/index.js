import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BlogDropdown from '../../UI/BlogDropdown'
import RelatedStores from './RelatedStores'
import parse from 'html-react-parser'
import CommentList from './CommentList'
import TextForm from './CommentList/TextForm'
import {
  useGetBlogQuery,
  useDeleteBlogMutation,
} from '../../../services/blogApi'
import { useCreateCommentMutation } from '../../../services/commentAPI'
import { Toast } from '../../UI/SwalStyle'
import { useSelector } from 'react-redux'
import { useGetUserQuery } from '../../../services/userApi'

const BlogDetail = () => {
  const { blogId } = useParams()
  const navigate = useNavigate()
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const sliceAuth = useSelector((state) => state.authReducers)
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  const { data } = useGetBlogQuery(blogId)
  const { data: currentUser } = useGetUserQuery(userData?.id)
  const { data: publishUser } = useGetUserQuery(data?.blog[0]?.user_id)

  const [inputValue, setInputValue] = useState('')
  const [createComment] = useCreateCommentMutation()
  const [deleteBlog] = useDeleteBlogMutation()
  const [showPicker, setShowPicker] = useState(false)

  const comment = {
    id: uuidv4(),
    blog_id: blogId,
    user_id: userData?.id || sliceAuth?.user.id,
    comment_date: moment().format('YYYY-MM-DD h:mm:ss'),
    content: inputValue,
    user: currentUser,
  }

  /**
   * 文字輸入框的文字與輸入中的文字雙向綁定
   * @param {*} e
   */
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  /**
   * 送出 emoji 物件
   * @param {*} event
   * @param {*} emojiObject
   */
  const onEmojiClick = (event, emojiObject) => {
    const textAreaElement = document.getElementById('comment-textarea')
    setChosenEmoji(emojiObject)
    setInputValue(
      inputValue.substring(0, textAreaElement.selectionStart) +
        emojiObject.emoji +
        inputValue.substring(textAreaElement.selectionEnd)
    )
  }
  /**
   * 取消時把 inputValue 清空
   */
  const handleCancel = () => {
    setInputValue('')
  }

  /**
   * 1. Input 資料清空
   * 2. 送資料到資料庫
   * 3. 顯示出 toast
   * @param {event} e 送出表單事件
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await setShowPicker(false)
      await setInputValue('')
      await createComment(comment)
      await Toast.fire({
        icon: 'success',
        title: '已送出留言',
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteBlog = async () => {
    try {
      await deleteBlog(blogId)
      await navigate('/blog')
      await Toast.fire({
        icon: 'success',
        title: '已刪除文章',
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleShowPicker = () => {
    setShowPicker((pre) => !pre)
  }

  const isAuthor = userData?.id === publishUser?.[0]?.id

  const [progress, setProgress] = useState(0)

  const scrollHeight = () => {
    let el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight
    let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    // store percentage in state
    setProgress(Math.floor(percent))
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  })

  let values = {
    size: 75,
    progress,
    trackWidth: 9,
    indicatorWidth: 10,
    labelColor: `#e77656`,
    spinnerMode: false,
    spinnerSpeed: 1,
    trackColor: `#e2dad2`,
    indicatorColor: `#e77656`,
    indicatorCap: `round`,
  }

  const center = values.size / 2,
    radius =
      center -
      (values.trackWidth > values.indicatorWidth
        ? values.trackWidth
        : values.indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - values.progress) / 100)

  return (
    <>
      <div className="position-relative">
        <div className="blog_svg-wrapper">
          <svg className="blog_svg-indicator">
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke={values.trackColor}
              strokeWidth={values.trackWidth}
              fill="transparent"
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke={values.indicatorColor}
              strokeWidth={values.indicatorWidth}
              fill="transparent"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          </svg>

          <div className="position-absolute text-primary top-50 start-50 translate-middle text-center">
            <span className="fw-bold d-block">{`${
              progress > 100 ? 100 : progress
            }%`}</span>
          </div>
        </div>

        {data?.blog.map((item) => {
          return (
            <>
              <div className="d-flex align-items-center justify-content-between my-4">
                <ul className="list-unstyled d-flex text-black m-0 ms-md-4">
                  <li>
                    <Link className="p-3" to="/">
                      首頁
                    </Link>
                    /
                  </li>
                  <li>
                    <Link className="p-3" to="/blog">
                      部落格
                    </Link>
                    /
                  </li>
                  <li>
                    <Link className="p-3 " to={`/blog/${item.blog_id}`}>
                      {item.category_name}
                    </Link>
                  </li>
                </ul>

                <BlogDropdown
                  isAuthor={isAuthor}
                  localUser={userData}
                  isLogin={sliceAuth.isLogin}
                  item={item}
                  handleDeleteBlog={handleDeleteBlog}
                />
              </div>

              <div className="w-75 mx-auto mb-6 mb-lg-8">
                <div className="text-center">
                  <div className="d-flex gap-3 align-items-center justify-content-center mb-4 ">
                    <img
                      className="avatar rounded-circle"
                      src={publishUser?.[0]?.avatar}
                      alt="publish user"
                    />
                    <p className="m-0"> {publishUser?.[0]?.account}</p>
                  </div>
                  <div>
                    {item.tags?.map((item) => {
                      return (
                        <Badge
                          key={item.id}
                          className="rounded-0 mb-2 align-self-start py-2 p-5 text-dark mb-4 mx-2"
                          bg="white"
                        >
                          {item.tag_name}
                        </Badge>
                      )
                    })}
                  </div>

                  <h1 className="fw-bold fs-3 mb-6 text-gray-darker">
                    {item.title}
                  </h1>
                  <h5 className="text-muted fs-5 mb-4">
                    {item.name}
                    <span className="ms-4">
                      {moment(item.blog_create_time).format('YYYY.MM.DD')}
                    </span>
                  </h5>
                  <article className="text-center blog_article">
                    {parse(item.content)}
                  </article>
                </div>
              </div>

              <RelatedStores
                name={item.name}
                intro={item.intro}
                address={item.address}
                route={item.route}
                phone={item.phone}
                opening_hour={item.opening_hour}
                storeId={item.store_id}
                storeImg={item.img_url}
              />

              <div className="container">
                <h6 className=" w-100 fs-3 text-md-start text-center mb-0 ">
                  留言區
                </h6>
                <CommentList />
              </div>
              <div className="mt-4 container">
                <h6 className="pb-2 mb-3 d fs-md-6 fs-md-3 ">我要留言</h6>
                <TextForm
                  localUser={userData}
                  isLogin={sliceAuth.isLogin}
                  handleSubmit={handleSubmit}
                  inputValue={inputValue}
                  handleChange={handleChange}
                  handleCancel={handleCancel}
                  onEmojiClick={onEmojiClick}
                  handleShowPicker={handleShowPicker}
                  showPicker={showPicker}
                />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default BlogDetail
