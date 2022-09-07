import React, { useState } from 'react'
import Editor from './Editor'
import { Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router'
import {
  useGetBlogQuery,
  useUpdateBlogMutation,
} from '../../../services/blogApi'
import { Toast } from '../../UI/SwalStyle'
import moment from 'moment'
import { useEffect } from 'react'

const BlogEdit = () => {
  const { blogId } = useParams()
  const { data } = useGetBlogQuery(blogId)
  const [updateBlog] = useUpdateBlogMutation()
  const navigate = useNavigate()

  const [addTitle, setAddTitle] = useState('')
  const [addContent, setAddContent] = useState('')

  useEffect(() => {
    setAddContent(data?.blog[0].content)
    setAddTitle(data?.blog[0].title)
  }, [data])

  const handleContentChange = (e, editor) => {
    const data = editor.getData()
    setAddContent(data)
  }
  const handleTitleChange = (e) => {
    setAddTitle(e.target.value)
  }

  const updatedata = {
    blogId: blogId,
    title: addTitle,
    content: addContent,
    create_time: moment().format('YYYY-MM-DD h:mm:ss'),
  }

  const handleEdit = async () => {
    await updateBlog(updatedata)
    await Toast.fire({
      icon: 'success',
      title: '修改成功',
    })
    await navigate(`/blog/${blogId}`)
  }

  return (
    <>
      <Container>
        <div className="text-end my-3">
          <button
            type="button"
            onClick={handleEdit}
            className="btn btn-primary rounded-5 px-5 text-white"
          >
            修改完成
          </button>
        </div>

        <Editor
          addContent={addContent}
          addTitle={addTitle}
          handleContentChange={handleContentChange}
          handleTitleChange={handleTitleChange}
        />
      </Container>
    </>
  )
}

export default BlogEdit
