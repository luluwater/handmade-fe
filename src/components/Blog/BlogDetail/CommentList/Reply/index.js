import Collapse from 'react-bootstrap/Collapse'
import Form from 'react-bootstrap/Form'

const Reply = ({
  open,
  handleSubmit,
  handleChange,
  handleCancel,
  inputValue,
}) => {
  return (
    <Collapse in={open}>
      <form onSubmit={handleSubmit}>
        <Form.Group id="example-collapse-text">
          <Form.Control
            className=" bg-skin-bright"
            as="textarea"
            rows={4}
            value={inputValue}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-end gap-3 align-items-center my-4">
            <button
              onClick={handleCancel}
              className="rounded-2 border-0 bg-secondary text-white px-4 py-1 d-none d-md-block"
            >
              取消
            </button>
            <button
              type="submit"
              className="rounded-2 border-0 bg-secondary-dark text-white px-4 py-1 d-none d-md-block"
            >
              送出
            </button>
          </div>
        </Form.Group>
      </form>
    </Collapse>
  )
}

export default Reply
