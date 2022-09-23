import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const ShopNow = () => {
  return (
    <>
      <Row>
        <Col className="mb-4" md={4}>
          <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
            <img
              className="bot-widgets-showNow_img rounded-3"
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
              alt="hot product"
            />
          </div>
        </Col>
        <Col className="mb-4" md={4}>
          <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
            <img
              className="bot-widgets-showNow_img rounded-3"
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
              alt="hot product"
            />
          </div>
        </Col>
        <Col className="mb-4" md={4}>
          <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
            <img
              className="bot-widgets-showNow_img rounded-3"
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
              alt="hot product"
            />
          </div>
        </Col>
        <Col className="mb-4" md={4}>
          <Link to="/">
            <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
              <img
                className="bot-widgets-showNow_img rounded-3"
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                alt="hot product"
              />
            </div>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default ShopNow
