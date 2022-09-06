import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dropdown from 'react-bootstrap/Dropdown'

import CommentList from './CommentList'
import TextForm from './CommentList/TextForm'
import { useGetBlogQuery } from '../../../services/blogApi'
import { useCreateCommentMutation } from '../../../services/commentAPI'

import { Toast } from '../../UI/SwalStyle'
// import Dropdown from 'react-bootstrap/Dropdown'

const BlogDetail = () => {
  const { blogId } = useParams()
  const { data } = useGetBlogQuery(blogId)
  const [inputValue, setInputValue] = useState('')
  const [createComment] = useCreateCommentMutation()
  const [showPicker, setShowPicker] = useState(false)

  const [chosenEmoji, setChosenEmoji] = useState(null)

  // TODO: user_id 從 local stroage 裡拿出
  const comment = {
    id: uuidv4(),
    blog_id: blogId,
    user_id: '3',
    comment_date: moment().format('YYYY-MM-DD h:mm:ss'),
    content: inputValue,
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

  const handleShowPicker = () => {
    setShowPicker((pre) => !pre)
  }

  return (
    <>
      <div className="position-relative">
        {data?.blog.map((item) => {
          return (
            <>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <ul className="list-unstyled d-flex text-black m-0">
                  <li>
                    <Link className="text-dark p-3" to="/">
                      首頁
                    </Link>
                    /
                  </li>
                  <li>
                    <Link className="text-dark p-3" to="/blog">
                      部落格
                    </Link>
                    /
                  </li>
                  <li>
                    <Link
                      className="text-secondary-dark p-3 "
                      to={item.blog_id}
                    >
                      {item.category_name}
                    </Link>
                  </li>
                </ul>

                <Dropdown className="me-3">
                  <Dropdown.Toggle
                    className="bg-skin-brighter btn-outline-skin-brighter border-0"
                    id="dropdown-basic"
                  >
                    <FontAwesomeIcon
                      className="fs-2 me-8 text-gray-darker"
                      icon="fa-solid fa-ellipsis"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      className="d-flex gap-3 align-items-center justify-content-center"
                      href="/blog/create"
                    >
                      <span>新增文章</span>
                      <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="d-flex gap-3 align-items-center justify-content-center"
                      href="#/action-2"
                    >
                      <span>修改文章</span>
                      <FontAwesomeIcon icon="fa-solid fa-pen" />
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="blog_dropdown_delete d-flex gap-3 align-items-center justify-content-center"
                      href="#/action-2"
                    >
                      <span>刪除文章</span>
                      <FontAwesomeIcon icon="fa-solid fa-delete-left" />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="container mb-6 mb-lg-8">
                <div className="text-center ">
                  <Badge
                    className="rounded-0 mb-2 align-self-start py-2 p-5 text-dark mb-4"
                    bg="white"
                  >
                    {item.tag}
                  </Badge>
                  <h1 className="fw-bold fs-3 mb-6">{item.title}</h1>
                  <h5 className="text-muted fs-5 mb-4">
                    {item.name}
                    <span className="ms-4">
                      {moment(item.create_time).format('YYYY.MM.DD')}
                    </span>
                  </h5>

                  <div className="text-end mb-3 fs-6">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon="fa-solid fa-heart"
                    />
                    <span className="ms-2">收藏數{item.favorite_amount}</span>
                  </div>
                  <article>{item.content}</article>
                </div>
              </div>
              <div className="text-center mt-9 mb-4 fs-3 d-none d-md-block">
                / <spna class="mx-2">相關店家 </spna>/
              </div>
              <div className="bg-skin-bright d-lg-flex mx-6 py-5 px-3 px-md-10 gap-6  mb-7">
                <div className="position-relative">
                  <img
                    className="h-100 mb-5"
                    src="https://images.unsplash.com/photo-1657299170237-2d4cd59b5156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />{' '}
                  {/* TODO:修改推薦店家 */}
                  <h5 class="position-absolute top-50 start-50 translate-middle text-white fs-2">
                    如是著物
                  </h5>
                </div>
                <div>
                  <div className="my-3 text-cut">{item.intro}</div>
                  <p>地址：{item.address}</p>
                  <p>交通方式：{item.route}</p>
                  <p>連絡電話：{item.phone}</p>
                  <p>營業時間：{item.opening_hour}</p>
                </div>
              </div>
              <div className="container">
                <h6 className=" w-100 fs-3 text-md-start text-center mb-0 ">
                  留言區
                </h6>
                <CommentList />
              </div>
              <div className="mt-4 container">
                <h6 className="pb-2 mb-3 d fs-md-6 fs-md-3 ">我要留言</h6>
                <TextForm
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
