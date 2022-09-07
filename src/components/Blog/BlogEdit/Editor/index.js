import React from 'react'
import Form from 'react-bootstrap/Form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const UPLOAD_ENDPOINT = 'upload_files'

const Editor = ({
  addTitle,
  handleTitleChange,
  addContent,
  handleContentChange,
  editContent,
}) => {
  /**
   * TODO: 目前是一上傳就把圖片打進路由裡面，現在要把他改成 "按下" 送出按鈕才把檔案送出，並載入。
   * @param {loader} loader
   * @returns 回傳upload 函式
   */
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()
          loader.file.then((file) => {
            body.append('files', file)
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: 'post',
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.filename}`,
                })
              })
              .catch((err) => {
                reject(err)
              })
          })
        })
      },
    }
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader)
    }
  }
  /**
   *  TODO 把 addData 傳出去給後端 server route 後端 server 再把取得的 res.body 存進資料庫
   */
  const submitBlog = () => {
    axios({
      method: 'post',
      url: `${API_URL}/upload_blog`,
      data: {
        content: addContent,
      },
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          value={addTitle}
          onChange={handleTitleChange}
          placeholder="文章標題"
          className="fs-1 border-0 border-start border-gray-dark"
        />
      </Form.Group>
      <div className="mb-md-12 mb-7">
        <CKEditor
          editor={BalloonEditor}
          config={{ placeholder: '輸入內容...' }}
          data={addContent ? addContent : editContent}
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor)
          }}
          onChange={handleContentChange}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </div>
    </>
  )
}

export default Editor
