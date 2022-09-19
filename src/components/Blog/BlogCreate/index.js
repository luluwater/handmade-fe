import React, { useState } from 'react'
import Editor from '../BlogEdit/Editor'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import parse from 'html-react-parser'
import { useCreateBlogMutation } from '../../../services/blogApi'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { useNavigate } from 'react-router'
import { Toast } from '../../UI/SwalStyle'
import Tags from '../../UI/Picker'
import { useGetSelectQuery } from '../../../services/untilApi'

const BlogCreate = () => {
  const [createBlog] = useCreateBlogMutation()

  const { data } = useGetSelectQuery()

  const [addContent, setAddContent] = useState('')
  const [addTitle, setAddTitle] = useState('')
  const [addCategory, setAddCategory] = useState('')
  const [addStore, setAddStore] = useState('')
  const [show, setShow] = useState(false)
  const [blogId, setBlogId] = useState(uuidv4())
  const [addTagName, setAddTagName] = useState([])

  const navigate = useNavigate()

  const handleContentChange = (e, editor) => {
    const data = editor.getData()
    setAddContent(data)
  }
  const handleTitleChange = (e) => {
    setAddTitle(e.target.value)
  }
  const handleCategoryChange = (e) => {
    setAddCategory(e.target.value)
  }
  const handleStoreChange = (e) => {
    setAddStore(e.target.value)
  }

  const newTags = addTagName.map((tagName) => {
    const newTag = {
      tagId: uuidv4(),
      blog_id: blogId,
      tag_name: tagName,
    }
    return newTag
  })

  // const localUser = JSON.parse(localStorage.getItem('user')).user

  //TODO: 目前 LOCAL 的 USER 不然就是SLICE 裡的 USER
  const insertData = {
    id: blogId,
    user_id: '2',
    title: addTitle,
    content: addContent,
    category_id: addCategory,
    store_id: addStore,
    tags: newTags,
    create_time: moment().format('YYYY-MM-DD h:mm:ss'),
  }

  const filterStore = data?.store.filter((item) => {
    return item.category_id.toString() === addCategory
  })

  const handleSubmit = async () => {
    try {
      await createBlog(insertData)
      await navigate(`/blog/${blogId}`, { replace: true })
      await Toast.fire({
        icon: 'success',
        title: '建立成功',
      })
    } catch (e) {
      console.log(e)
    }
  }

  function handleShow() {
    setShow(true)
  }

  return (
    <div className="container my-8">
      <Form>
        <div className="text-end">
          {addContent && addTitle ? (
            <button
              type="button"
              onClick={() => handleShow()}
              className="btn btn-primary rounded-5 px-5 text-white"
            >
              發布
            </button>
          ) : (
            <button
              type="button"
              disabled
              onClick={() => handleShow()}
              className="btn btn-primary rounded-5 px-5 text-white"
            >
              發布
            </button>
          )}
        </div>

        {/* Title and content editor */}
        <div>
          <Editor
            blogId={blogId}
            addContent={addContent}
            handleContentChange={handleContentChange}
            addTitle={addTitle}
            handleTitleChange={handleTitleChange}
          />
        </div>

        {/* Modal */}
        <Modal
          className="p-0"
          show={show}
          fullscreen={true}
          onHide={() => setShow(false)}
        >
          <Modal.Header className="border-0 mt-4" closeButton></Modal.Header>
          <div className="d-flex"></div>
          <Container>
            <Row className="d-flex flex-column flex-md-row">
              <Col className="max-w-md-50">
                <Modal.Body className="py-md-12 px-m">
                  <h4 className="mb-3 fs-5 fw-bolder">部落格預覽</h4>

                  <h5 className="border-bottom border-gray-dark pb-2 fs-5 fw-bolder">
                    {addTitle}
                  </h5>
                  <div className="py-2 border-bottom border-gray-dark">
                    <p className="m-0 text-cut text-muted">
                      {addContent ? parse(addContent) : ''}
                    </p>
                  </div>
                </Modal.Body>
              </Col>
              <Col>
                {/* Modal */}
                <Modal.Body className="py-md-12 px-md-6 overflow-hidden">
                  <h4 className="mb-3 fs-5 ">
                    <span className="text-muted">發布人：</span>
                    {/* {localUser.account} */}
                  </h4>
                  <div className="d-flex flex-column gap-md-6 gap-5">
                    <Form.Select
                      onClick={handleCategoryChange}
                      className="bg-skin-brighter border-gray-dark"
                      aria-label="選擇類別"
                    >
                      {data?.category.map((v) => {
                        return <option value={v.id}>{v.category_name}</option>
                      })}
                    </Form.Select>

                    <Form.Select
                      onClick={handleStoreChange}
                      className="bg-skin-brighter border-gray-dark"
                      aria-label="選擇店家"
                    >
                      {filterStore?.length === 0 ? (
                        <option>選擇店家</option>
                      ) : (
                        <>
                          {filterStore?.map((v) => {
                            return <option value={v.id}>{v.name}</option>
                          })}
                        </>
                      )}
                    </Form.Select>
                    <Tags
                      className="w-100"
                      blogId={blogId}
                      setAddTagName={setAddTagName}
                    />
                  </div>
                  <div className="text-end ">
                    {addStore && addCategory ? (
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="btn btn-primary rounded-5 px-5 text-white  mt-8"
                      >
                        確認發布
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled
                        type="button"
                        className="btn btn-primary rounded-5 px-5 text-white  mt-8"
                      >
                        確認發布
                      </button>
                    )}
                  </div>
                </Modal.Body>
              </Col>
            </Row>
          </Container>
        </Modal>
      </Form>
    </div>
  )
}

export default BlogCreate
