import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import './ProductDetail.scss'

function ProductIntro() {
  return (
    <>
      <Row className="d-flex flex-column">
        {/* ========== */}
        <Col className="d-flex">
          <Col>
            <p>Round Round 陶藝工作室</p>
            <h2>石丸波佐見燒 - 森之歌陶杯</h2>
            <p>NT.880</p>
          </Col>
          <Col className="d-flex">
            <p>總評分</p>
            <h2>4.8</h2>
          </Col>
        </Col>
        {/* ========== */}

        <Col className="d-flex">
          <h5>數量</h5>
          <Button>+</Button>
          <h5>1</h5>
          <Button>-</Button>
          <Button>加入購物車</Button>
          <Button>愛勳</Button>
        </Col>
        <Col>
          <p className="test">
            重用性：對於很難抽離狀態邏輯（stateful logic）而難以重用。雖然現行的
            HOC 或 render props
            已可解決這個問題，但還是過於複雜，而且不好寫測試。 class component
            過於複雜、難以理解：class component 的 lifecycle method
            往往像個便利商店般包了很多雜七雜八的事情，例如：在 componentDidMount
            與 componentDidUpdate 加入讀取 API 來抓資料的 action，而
            componentDidMount 可能還包含一些事件綁定，最後還會在
            componentWillUnmount
            把這些事件綁定解除掉…（是不是跟小七店員一樣包山包海什麼都會什麼都做）…我們都知道每個
            function
            只要做一件事情就好，包山包海在這裡就不被鼓勵了，畢竟缺點很多-很難懂也很難維護、容易有
            bug、很難寫測試。
          </p>
        </Col>
      </Row>
    </>
  )
}
export default ProductIntro
