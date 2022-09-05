import React from 'react'
import Form from 'react-bootstrap/Form'
import Picker from 'emoji-picker-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextForm = ({
  inputValue,
  handleSubmit,
  handleChange,
  handleCancel,
  onEmojiClick,
  handleShowPicker,
  showPicker,
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
          <Form.Control
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
              className="rounded-2 border-0 bg-secondary text-white px-4 py-1 d-none d-md-block"
            >
              取消
            </button>
            <button
              type="submit"
              className="rounded-2 border-0 bg-secondary-dark text-white px-4 py-1 d-none d-md-block"
            >
              送出{' '}
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
              😆
            </button>
          </div>
        </Form.Group>
      </form>
    </>
  )
}

export default TextForm
