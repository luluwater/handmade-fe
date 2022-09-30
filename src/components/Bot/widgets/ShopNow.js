import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const ShopNow = () => {
  // TODO:有空換成隨機
  return (
    <Container>
      <Row>
        <Col className="mb-2" md={6}>
          <Link to={`/product/detail/1`}>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img
                className="bot-widgets-showNow_img rounded-3"
                src={require(`../../../assets/product/product_leather_82/商品＿Shekinah 手工皮革＿精緻版小小靴＿3.jpg`)}
                alt="hot product"
              />
            </div>
            <p className="text-dark text-center mt-2">流水純銀耳扣</p>
          </Link>
        </Col>
        <Col className="mb-2" md={6}>
          <Link to={`/product/detail/26`}>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img
                className="bot-widgets-showNow_img rounded-3"
                src={require(`../../../assets/product/product_pottery_32/陶藝_商品_Round_Round_你ok我ok扁花器_3.jpg`)}
                alt="hot product"
              />
            </div>
            <p className="text-dark text-center mt-2">你ok我ok扁花器</p>
          </Link>
        </Col>
        <Col className="mb-2" md={6}>
          <Link to={`/product/detail/26`}>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img
                className="bot-widgets-showNow_img rounded-3"
                src={require(`../../../assets/product/product_floral_64/花藝＿商品＿芙拉＿乾燥禮物花盒＿2.jpg`)}
                alt="hot product"
              />
            </div>
            <p className="text-dark text-center mt-2">乾燥禮物花盒</p>
          </Link>
        </Col>
        <Col className="mb-2" md={6}>
          <Link to={`/product/detail/26`}>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img
                className="bot-widgets-showNow_img rounded-3"
                src={require(`../../../assets/product/product_tufting_130/tufing_商品_HU-A-HU-呼阿呼_心心毛氈托盤_1.jpg`)}
                alt="hot product"
              />
            </div>
            <p className="text-dark text-center mt-2">心心毛氈托盤</p>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default ShopNow
