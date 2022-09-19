import React from 'react'
import Form from 'react-bootstrap/Form'
import Picker from 'emoji-picker-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const TextForm = ({
  inputValue,
  handleSubmit,
  handleChange,
  handleCancel,
  onEmojiClick,
  handleShowPicker,
  showPicker,
  localUser,
  isLogin,
}) => {
  return (
    <>
      <form className="position-relative" onSubmit={handleSubmit}>
        {showPicker && (
          <Picker
            className="position-absolute bottom-0 end-0"
            onEmojiClick={onEmojiClick}
          />
        )}
        <Form.Group>
          {localUser || isLogin ? (
            <>
              <Form.Control
                disabled={false}
                required
                id="comment-textarea"
                className="bg-skin-bright"
                as="textarea"
                rows={4}
                value={inputValue}
                onChange={handleChange}
                placeholder="輸入留言..."
              />
              <div className="d-flex justify-content-end gap-3 align-items-center my-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-2 border-0 bg-secondary text-white px-4 py-1 d-md-block"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="rounded-2 border-0 bg-secondary-dark text-white px-4 py-1 d-md-block"
                >
                  送出
                  <FontAwesomeIcon
                    icon="fa-solid fa-paper-plane"
                    className="ms-2"
                  />
                </button>
                <button
                  onClick={handleShowPicker}
                  type="button"
                  className="btn border border-0"
                >
                  <FontAwesomeIcon icon="fa-regular fa-face-smile" />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="position-relative my-4 ">
                <Form.Control
                  disabled
                  required
                  id="comment-textarea"
                  className="bg-skin-bright mb-4"
                  as="textarea"
                  rows={4}
                  placeholder="請先登入後留言..."
                />
                <Link className="text-end" to="/login">
                  <button
                    type="submit"
                    className="rounded-2 border-0 bg-primary text-white px-4 py-1 d-md-block ms-auto"
                  >
                    登入
                    <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                  </button>
                </Link>
              </div>
            </>
          )}
        </Form.Group>
      </form>
    </>
  )
}

export default TextForm
