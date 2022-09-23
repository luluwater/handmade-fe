// import '../About.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import NewsImg1 from '../../../assets/news/News_pic3.jpg'
import NewsImg2 from '../../../assets/news/News_pic1.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const NewsDetails = () => {
  return (
    <>
      <Container className="news_details mt-12 justify-content-center align-items-center">
        <Col className="d-flex justify-content-center align-items-center mb-12">
          <div className="news_details_box me-8 mt-5" />
          <div className="news_details_title text-center justify-content-center align-items-center">
            擁有多重角色的女性，需要時常轉換身分
            <br />
            難免背負著許多壓力、重得失衡
            <br />
            時間久了，更是遺忘了自己也擁有 ME time 的權力。
          </div>
          <div className="news_details_box ms-10 mt-5" />
        </Col>
        <Col>
          <div className="news_details_title text-center justify-content-center align-items-center mb-12">
            「美好的生活，是需要自己刻畫。」
          </div>
        </Col>
        <Row data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
          <Col sm={12} md={6} className="d-flex justify-content-end p-0">
            <div className="news_details_imgBox">
              <img
                className="news_details_img img-fluid"
                src={NewsImg1}
                alt="NewsImg1"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="p-0">
            <div className="contentFix news_details_content text-center">
              今年，在這個屬於每一位女性的紀念日裡，
              <br />
              ［HANDMADE手手］獻上平衡斜槓生活學，
              <br />
              致每個在多重角色中努力的女性們，
              <br />
              在經營家庭、專注工作時也能享受生活，
              <br />
              與我們一同實踐美好的生活理念，
              <br />
              在斜槓人生中站穩平衡，從容面對生活中的不同身分！
            </div>
          </Col>
        </Row>
        <Row
          className="column-revers"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <Col sm={12} md={6} className="p-0">
            <div className="content2Fix  news_details_content text-center">
              ［HANDMADE 手手］邀請擁有無與倫比創造力的妳，
              <br />
              把自己歸零、擺脫生活中的所有身分，
              <br />
              與我們攜手度過愜意放鬆的手做體驗，
              <br />
              享受專屬於自己或是與閨蜜們的美好時光。
            </div>
          </Col>
          <Col sm={12} md={6} className="p-0">
            <div className="news_details_imgBox">
              <img
                className="news_details_img img-fluid"
                src={NewsImg2}
                alt="NewsImg2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NewsDetails
