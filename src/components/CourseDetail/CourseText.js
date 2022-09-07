import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './CourseDetail.scss'

function CourseText() {
  const info = [
    {
      intro: `日花籃使用不凋花為主要花材，透過不同花材的層次安排與姿態搭配，呈現春天來臨時花草生氣蓬勃的樣貌。`,
      time: `2.5 小時 / 堂`,
      address: `台北市大安區信義路三段 35 號 6 樓`,
      route: `大安森林公園站1號出口步行約1分鐘`,
      note: `- 課程費用不包含作品燒窯費。
- 燒窯費用計算方式：作品體積- 長*寬*高*0.15（不足4公分之邊長以4公分計算，每件最低50元)
- 每堂課提供500克土料，課程時間內不限創作數量，依個人作品數量和大小可以選擇加購。加購價：60元/500克。

1. 為維護其他學員權益，不接受陪同體驗或協力製作。
2. 如欲更改時段請於七日前告知，因天災等不可抗力之因素，可更改預約時段。
3. 燒窯需待作品完全陰乾後進行兩天的素燒，上釉後再進行三天的釉燒，過程繁複，須待四-六週才能取得作品。
4. 手工製作及燒製過程可能產生非預期效果，可接受再報名。
5. 建議修剪指甲會較方便操作。
6. 上課時間彈性為十分鐘，即遲到十分鐘內課程可順延十分鐘。`,
    },
  ]

  return (
    <>
      {info.map((v, i) => {
        return (
          <Row key={v.intro} className="">
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">課程介紹</h4>
              <div className="detail_intro" style={{ whiteSpace: 'pre-wrap' }}>
                {v.intro}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">課程時間</h4>
              <div className="detail_intro" style={{ whiteSpace: 'pre-wrap' }}>
                {v.time}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">上課地點</h4>
              <div className="detail_intro" style={{ whiteSpace: 'pre-wrap' }}>
                {v.address}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">交通方式</h4>
              <div className="detail_intro" style={{ whiteSpace: 'pre-wrap' }}>
                {v.route}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">注意事項</h4>
              <div className="detail_intro" style={{ whiteSpace: 'pre-wrap' }}>
                {v.note}
              </div>
            </Col>
          </Row>
        )
      })}
    </>
  )
}
export default CourseText
