import React, { useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import './credit_card.scss'

const CreditCart = () => {
  useEffect(() => {
    TPDirect.setupSDK(
      11327,
      'app_whdEWBH8e8Lzy4N6BysVRRMILYORF6UxXbiOFsICkz0J9j1C0JUlCHv1tVJC',
      'sandbox'
    )
    let fields = {
      number: {
        element: '#number',
        placeholder: '**** **** **** ****',
      },
      expirationDate: {
        element: '#date',
        placeholder: 'MM/YY',
      },
      ccv: {
        element: '#ccv',
        placeholder: '後三碼',
      },
    }
    TPDirect.card.setup({
      fields: fields,
      styles: {
        // Style all elements
        input: {
          color: 'gray',
        },
        // Styling ccv field
        'input.cvc': {
          'font-size': '16px',
        },
        // Styling expiration-date field
        'input.expiration-date': {
          // 'font-size': '16px'
        },
        // Styling card-number field
        'input.card-number': {
          // 'font-size': '16px'
        },
        // style focus state
        ':focus': {
          // 'color': 'black'
        },
        // style valid state
        '.valid': {
          color: 'green',
        },
        // style invalid state
        '.invalid': {
          color: 'red',
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        '@media screen and (max-width: 400px)': {
          input: {
            color: 'orange',
          },
        },
      },
    })
  }, [])

  TPDirect.card.onUpdate((update) => {
    if (update.canGetPrime) {
      //全部欄位皆為正確 可以呼叫 getPrime
      
    }


  })

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label for="number">信用卡卡號</Form.Label>
            <div id="number"></div>
            {/* 可填入： 4242 4242 4242 4242 */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cardExpirationDate">
            <Form.Label for="cardExpirationDate">卡片到期日</Form.Label>
            <div id="date"></div>
            {/* 可填入： 01/23 */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cardCcv">
            <Form.Label for="cardCcv">ccv確認碼</Form.Label>
            <div id="ccv"></div>
            {/* 可填入： 123 */}
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default CreditCart
