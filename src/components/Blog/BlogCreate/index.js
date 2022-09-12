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

const BlogCreate = () => {
  const [createBlog] = useCreateBlogMutation()

  const [addContent, setAddContent] = useState('')
  const [addTitle, setAddTitle] = useState('')
  const [addCategory, setAddCategory] = useState('')
  const [addStore, setAddStore] = useState('')
  const [addTags, setAddTags] = useState({})
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
  // const handleTagsChange = (e) => {
  //   setAddTags(e.target.value)
  // }

  /**
   * TODO: 拿到資料!!!
   * 1. Title     --> ok
   * 2. content    --> ok
   * 3. current User   --> not yet
   * 4. category ( 非必填 ) --> ok
   * 5. store ( 建立於category之上 ) --> not yet
   * 6. tag?? ( 感覺有點麻煩 ) --> not yet
   * 7. 發布時間 current time --> ok
   *  useNavgative
   * @param {event} e
   */
  const blogId = uuidv4()

  const insertData = {
    id: blogId,
    //TODO:LOCAL 裡拿
    user_id: '2',
    title: addTitle,
    content: addContent,
    category_id: addCategory,
    store_id: addStore,
    // tags: addTags,
    create_time: moment().format('YYYY-MM-DD h:mm:ss'),
  }

  const handleSubmit = async () => {
    try {
      await createBlog(insertData)
      // await navigate(`/blog/${blogId}`, { replace: true })
      await Toast.fire({
        icon: 'success',
        title: '建立成功',
      })
    } catch (e) {
      console.log(e)
    }
  }

  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(true)
  }

  //TODO 寫一隻 API 把 TAGS 打進後端
  // addTagName?.map((item) => {
  //   console.log(item)
  // })
  console.log(addTagName)

  return (
    <div className="container my-8">
      <Form>
        <div className="text-end">
          <button
            type="button"
            onClick={() => handleShow()}
            className="btn btn-primary rounded-5 px-5 text-white"
          >
            發布
          </button>
        </div>

        {/* Title and content editor */}
        <div>
          <Editor
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
                <Modal.Body className="py-md-12 px-md-6">
                  <h4 className="mb-3 fs-5 fw-bolder">部落格預覽</h4>
                  <div className="bg-primary mb-5" style={{ height: '250px' }}>
                    <img
                      class="blog_preview_img w-100 h-100"
                      src="http://localhost:8080/blog_55b9bc84-1067-4970-a942-0aa0f0702aa3.jpg"
                      alt=""
                    />
                  </div>
                  <h5 className="border-bottom pb-2 fs-5 fw-bolder">
                    {addTitle}
                  </h5>
                  <div className="py-2 border-bottom ">
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
                    <span className="text-muted">發布人：</span>黑色小花貓
                  </h4>
                  <div className="d-flex flex-column gap-md-6 gap-5">
                    <Form.Select
                      onClick={handleCategoryChange}
                      className="bg-skin-brighter border-0"
                      aria-label="Default select example"
                    >
                      <option>選擇類別</option>
                      <option value="1">金工</option>
                      <option value="2">陶藝</option>
                      <option value="3">花藝</option>
                      <option value="4">皮革</option>
                      <option value="5">烘焙</option>
                      <option value="6">簇絨</option>
                    </Form.Select>

                    <Form.Select
                      onClick={handleStoreChange}
                      className="bg-skin-brighter border-0"
                      aria-label="Default select example"
                    >
                      <option>選擇店家</option>
                      <option value="1">以覺學</option>
                      <option value="2">轉角金工</option>
                      <option value="3">光在金工</option>
                      <option value="4">Minifeast</option>
                      <option value="5">Silver Spring</option>
                    </Form.Select>
                    <Tags blogId={blogId} setAddTagName={setAddTagName} />
                  </div>
                  <div className="text-end ">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary rounded-5 px-5 text-white  mt-8"
                    >
                      確認發布
                    </button>
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
