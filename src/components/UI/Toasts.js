import Toast from 'react-bootstrap/Toast'
import { useDispatch, useSelector } from 'react-redux'
import { displayToast } from '../../slices/reply-slice'

const Toasts = () => {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.replyReducer.displayToast)

  return (
    <Toast
      className="position-fixed ms-12 text-white text-center w-15"
      onClose={() => dispatch(displayToast(false))}
      show={show}
      delay={1000}
      autohide
      bg="gray-darker"
    >
      <Toast.Body>訊息已傳送</Toast.Body>
    </Toast>
  )
}

export default Toasts
