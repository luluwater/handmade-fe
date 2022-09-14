import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../slices/counter-slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Button } from 'react-bootstrap'
import './ProductDetail.scss'

export default function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.value)
  return (
    <Col className="d-flex detail_amount py-4">
      <div className="detail_amount_title">數量</div>
      <Button
        className="detail_amount_minus  detail_button"
        onClick={() => dispatch(decrement(1))}
      >
        -
      </Button>
      <h5 className="detail_amount_number">{count}</h5>
      <Button
        className="detail_amount_plus  detail_button"
        onClick={() => dispatch(increment(1))}
      >
        +
      </Button>
      <Button className="detail_button detail_cart">加入購物車</Button>
      <Button className="detail_button detail_heart">
        <FontAwesomeIcon icon={'far fa-heart'} />
      </Button>
    </Col>
  )
}
//  <div>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch(increment(1))}>+</button>
//       <button onClick={() => dispatch(decrement(1))}>-</button>
//     </div>
