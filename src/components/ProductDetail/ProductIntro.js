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
          <div className="test">
            尺寸：口徑約 6.5cm / 高 6cm
            若售完或是無庫存：可接單訂製，製作期約30天。陶瓷需經過兩次高溫燒製淬煉，等待絕對值得！
            1.切勿單點放置在火爐上加熱，以免作品裂損。
            2.建議以手洗方式清洗，避免碰撞，器皿較能長久使用。
            3.陶器表層有毛孔，油脂及水分容易滲入氣孔內，洗淨後再使用。
            4.部分陶器具開片現象是源自土與釉收縮率有差別，非器物龜裂導致，故不影響使用。
            5.可使用洗碗機、烤箱、微波爐，建議晾乾後收納入櫃。
          </div>
        </Col>
      </Row>
    </>
  )
}
export default ProductIntro
