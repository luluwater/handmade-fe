import { React } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './ProductDetail.scss'
// import Image1 from '../../assets/store/store_metalwork_2/金工_轉角金工_kv2.jpg'
// import Image2 from '../../assets/store/store_pottery_7/陶藝_Round-Round_kv_3.jpg'
// import Image3 from '../../assets/user/profile_1.png'
// import Image4 from '../../assets/user/profile_3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowMore from 'react-show-more-button'

import { useGetProductCommentQuery } from '../../services/productApi'
import { useParams } from 'react-router-dom'

const ProductComment = () => {
  const { productCommentId } = useParams()
  const { data } = useGetProductCommentQuery(productCommentId)
  console.log('TESTTT', data)

  //   const Comment = [
  //     {
  //       id: 1,
  //       photo: Image3,
  //       user: 'lulu123123',
  //       score: 4,
  //       date: '2021.08.16',
  //       img: Image1,
  //       content: `店員真的非常非常非常親切💯💯💯會先介紹環境及設備不會讓你擔心該怎麼操作❤️
  // 就算是完全沒有繪畫天份的人也不用擔心～盡情放鬆的畫就對了👍🏻`,
  //     },
  //     {
  //       id: 2,
  //       photo: Image4,
  //       user: 'RJ123456789',
  //       score: 5,
  //       date: '2022.05.01',
  //       img: Image2,
  //       content: `老師很詳細的介紹每個步驟，就算笨到無可救藥還敲錯，老師都很強的可以幫你救回來，過程也不會過來催促你，讓你可以安心的體驗。
  // 店內環境跟音樂都很舒服，真的彷彿身在大自然一樣。所有的一切都是環保愛地球概念，不使用一般電鍍來讓你的飾品亮晶晶，
  // 而是使用拋光來達到一樣的效果，還可以終身保固，讓你可以更長久配戴這個天然飾品。超級無敵愛這裡，以後有需要飾品一定會第一個想到這裡`,
  //     },
  //   ]
  return (
    <>
      <Row className="my-10 d-flex justify-content-center">
        <Col className="col-lg-2 col-sm-12">
          <h4 className="detail_comment_title fw-bold">顧客回饋</h4>
        </Col>
        <Col className="col-10 ">
          <ShowMore maxHeight={400} className="showmore">
            {data?.map((item) => {
              return (
                <div className="detail_comment pb-8 mb-8" key={item.id}>
                  <Row className="d-flex align-items-baseline">
                    <Col className="col-1 detail_comment_photo">
                      {/* <img src={item.photo} alt="" /> */}
                    </Col>
                    <Col className="col-1 p-0">
                      <p className=" detail_comment_name">{item.user_id}</p>
                    </Col>
                  </Row>
                  {/* <Row className="mb-3">
                    <Col className="col-2 detail_comment_score">
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        size="lg"
                        className="pe-1"
                      />
                      <FontAwesomeIcon
                        icon="far fa-star"
                        size="lg"
                        className="pe-1"
                      />
                    </Col>
                    <Col className="detail_comment_date p-0">{item.date}</Col>
                  </Row> */}
                  <p
                    className="detail_comment_content"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {item.content}
                  </p>
                  {/* <img className="detail_comment_img" src={item.img} alt="" /> */}
                </div>
              )
            })}
          </ShowMore>
        </Col>

        {/* <Button className="detail_comment_getmore detail_button fw-bold">
          查看所有評價(5)
        </Button> */}
      </Row>
    </>
  )
}
export default ProductComment
