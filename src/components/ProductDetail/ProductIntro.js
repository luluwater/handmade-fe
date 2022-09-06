import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProductDetail.scss'

function ProductIntro() {
  const info = [
    {
      id: 1,
      store: 'Round Round 陶藝工作室',
      name: '石丸波佐見燒 - 森之歌陶杯',
      price: 'NT.880',
      score: '4.8',
    },
  ]
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
      <Row className="d-flex flex-column fw-bold detail_RWD">
        {/* ========== */}
        {info.map((v, i) => {
          return (
            <Col className="d-flex detail_top" key={v.id}>
              <Col sm={12} lg={8}>
                <p className="detail_store">{v.store}</p>
                <h2 className="detail_name">{v.name}</h2>
                <h4 className="detail_price">{v.price}</h4>
              </Col>
              <Col className="d-flex detail_score mt-6 ms-lg-12 col-sm-12 me-sm-0">
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  size="sm"
                  className="detail_score_star"
                />
                <p className="detail_score_title mt-2 mx-2">總評分</p>
                <h2 className="detail_score_number">{v.score}</h2>
              </Col>
            </Col>
          )
        })}

        {/* ========== */}

        <Col className="d-flex detail_amount py-4">
          <div className="detail_amount_title">數量</div>
          <Button className="detail_amount_minus  detail_button">-</Button>
          <h5 className="detail_amount_number">1</h5>
          <Button className="detail_amount_plus  detail_button">+</Button>
          <Button className="detail_button detail_cart">加入購物車</Button>
          <Button className="detail_button detail_heart">
            <FontAwesomeIcon icon={'far fa-heart'} />
          </Button>
        </Col>
        <Col className="detail_intro">
          <div style={{ whiteSpace: 'pre-wrap' }}>{intro}</div>
        </Col>
      </Row>
    </>
  )
}
export default ProductIntro
