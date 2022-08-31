import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import NewsCardImg1 from '../../../assets/news/News_pic4.jpg'
import NewsCardImg2 from '../../../assets/news/News_pic5.jpg'
import NewsCardImg3 from '../../../assets/news/News_pic6.jpg'
import NewsCardImg4 from '../../../assets/news/News_pic7.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import '../News.scss'

const NewsCard = () => {
  return (
    <>
      <Row>
        <h4 className="mb-5 news_card_title text-center mt-8 fw-bold">限定課程推薦</h4>
      </Row>
      <Container className="news_card mb-12">
        <Row className="p-5">
          <Col>
            <img className="news_card_img" src={NewsCardImg1} alt="NewsCard" />
            <div className="d-flex justify-content-between">
              <div>
                <p className="m-2 text-truncate">
                  <small>| 浪花 |</small>
                </p>
                <h5 className="news_card_text m-1">粉橘高架花籃</h5>
                <h5 className="news_card_text text-primary fw-bold m-1">
                  $ 3600
                </h5>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
                {/* button要再換成購物車 */}
                <button className="bg-primary news_card_favorite">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <img className="news_card_img" src={NewsCardImg2} alt="NewsCard" />
            <div className="d-flex justify-content-between">
              <div>
                <p className="m-2 text-truncate">
                  <small>| Round Round |</small>
                </p>
                <h5 className="news_card_text m-1">理容院開張</h5>
                <h5 className="news_card_text text-primary fw-bold m-1">
                  $ 1000
                </h5>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
                {/* button要再換成購物車 */}
                <button className="bg-primary news_card_favorite">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <img className="news_card_img" src={NewsCardImg3} alt="NewsCard" />
            <div className="d-flex justify-content-between">
              <div>
                <p className="m-2 text-truncate">
                  <small>| HU A HU 呼啊呼 |</small>
                </p>
                <h5 className="news_card_text m-1">簇絨滿版抱枕</h5>
                <h5 className="news_card_text text-primary fw-bold m-1">
                  $ 123
                </h5>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
                {/* button要再換成購物車 */}
                <button className="bg-primary news_card_favorite">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <img className="news_card_img" src={NewsCardImg4} alt="NewsCard" />
            <div className="d-flex justify-content-between">
              <div>
                <p className="m-2 text-truncate">
                  <small>| Minifeast |</small>
                </p>
                <h5 className="news_card_text m-1">白鑽純銀項鍊</h5>
                <h5 className="news_card_text text-primary fw-bold m-1">
                  $ 4580
                </h5>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
                {/* button要再換成購物車 */}
                <button className="bg-primary news_card_favorite">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    // inverse
                    // size="lg"
                  />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NewsCard
