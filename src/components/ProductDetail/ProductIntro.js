import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import './ProductDetail.scss'

function ProductIntro() {
  const intro = `尺寸：口徑約 6.5cm / 高 6cm
若售完或是無庫存：可接單訂製，製作期約30天。陶瓷需經過兩次高溫燒製淬煉，等待絕對值得！
  
1. 切勿單點放置在火爐上加熱，以免作品裂損。
2. 建議以手洗方式清洗，避免碰撞，器皿較能長久使用。
3. 陶器表層有毛孔，油脂及水分容易滲入氣孔內，洗淨後再使用。
4. 部分陶器具開片現象是源自土與釉收縮率有差別，非器物龜裂導致，故不影響使用。
5. 可使用洗碗機、烤箱、微波爐，建議晾乾後收納入櫃。
`

  return (
    <>
      <Row className="d-flex flex-column fw-bold">
        {/* ========== */}
        <Col className="d-flex detail_border_top">
          <Col>
            <p className="detail_store">Round Round 陶藝工作室</p>
            <h2 className="detail_name">石丸波佐見燒 - 森之歌陶杯</h2>
            <h4 className="detail_price">NT.880</h4>
          </Col>
          <Col className="d-flex detail_score mt-7 ms-12">
            <p className="detail_score_title mt-2 mx-2">總評分</p>
            <h2 className="detail_score_number">4.8</h2>
          </Col>
        </Col>
        {/* ========== */}

        <Col className="d-flex detail_border_top detail_amount py-4">
          <h5>數量</h5>
          <Button>+</Button>
          <h5>1</h5>
          <Button>-</Button>
          <Button>加入購物車</Button>
          <Button>愛勳</Button>
        </Col>
        <Col className="detail_border_top">
          <div className="detail_intro " style={{ whiteSpace: 'pre-wrap' }}>
            {intro}
          </div>
        </Col>
      </Row>
    </>
  )
}
export default ProductIntro
