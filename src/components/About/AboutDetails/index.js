// import '../About.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import DetailImg1 from '../../../assets/about_me/karvounis.jpg'
import DetailImg2 from '../../../assets/about_me/barnimages.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const AboutDetails = () => {
  return (
    <>
      <Container className="about_details mt-12 justify-content-center align-items-center">
        <Col className="d-flex justify-content-center align-items-center mb-12">
          <div className="about_details_box ms-8 mt-5" />
          <div className="about_details_title text-center justify-content-center align-items-center">
            逃離城市喧囂 <br /> 用手掌的溫度，享受當下的寧靜
          </div>
          <div className="about_details_box ms-8 mt-5" />
        </Col>
        <Row className="about_details_mobile">
          <Col sm={12} md={6} className="d-flex justify-content-end p-0">
            <div className="about_details_imgBox">
              <img
                className="about_details_img img-fluid"
                src={DetailImg1}
                alt="DetailImg1"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="p-0">
            <div className="about_details_content text-center">
              哲學家 David Hume 把自我比擬為心靈的舞台，
              <br />
              各種知覺感官來回地表演。
              <br />
              <br />
              我們期盼建立起一個這樣的空間，把腦中那些，
              <br />
              哪怕是碎片也好、起承轉合也好，用雙手與技藝實踐。
            </div>
          </Col>
        </Row>
        <Row className="column-revers">
          <Col sm={12} md={6} className="p-0">
            <div className="about_details_content text-center">
              每個人都需要藉由某種方式達到自己的身心平衡，生活累了，
              <br />
              那就來體驗一下不同的生活吧！
              <br />
              <br />
              藉由手做靜下心，感受手中的溫度，享受當下的平靜時刻，
              <br />
              增加生活的樂趣！這就是手手成立的宗旨。
            </div>
          </Col>
          <Col sm={12} md={6} className="p-0">
            <div className="about_details_imgBox">
              <img
                className="about_details_img img-fluid"
                src={DetailImg2}
                alt="DetailImg2"
              />
            </div>
          </Col>
        </Row>
        <div className="about_details_text d-flex justify-content-center mb-12 mt-12">
          歡迎光臨，請在手手盡情享受一場心靈慢活
        </div>
      </Container>
    </>
  )
}
export default AboutDetails
