import React, { useState } from 'react'
import parse from 'html-react-parser'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const API_URL = 'http://localhost:8080'
const UPLOAD_ENDPOINT = 'upload_files'

const Editor = () => {
  const [addData, setVal] = useState('')
  const [addedData, showData] = useState('')

  const handleChange = (e, editor) => {
    const data = editor.getData()
    console.log(data)
    setVal(data)
  }

  /**
   * TODO 目前是一上傳就把圖片打進路由裡面，現在要把他改成 "按下" 送出按鈕才把檔案送出，並載入。
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
        content: addData,
      },
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <div className="">
        <CKEditor
          editor={ClassicEditor}
          config={{
            extraPlugins: [uploadPlugin],
          }}
          data={addData}
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor)
          }}
          onChange={handleChange}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </div>
      <button className="btn btn-info" type="submit" onClick={submitBlog}>
        {addedData ? 'Hide Data' : 'Show Data'}
      </button>
      <div>{addData ? parse(addData) : ''}</div>
    </>
  )
}

export default Editor
