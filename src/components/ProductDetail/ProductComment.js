import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
import './ProductDetail.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowMore from 'react-show-more-button'

import { useGetProductCommentQuery } from '../../services/productApi'
import { useParams } from 'react-router-dom'

function starAmount(num) {
  let starList = []
  for (let i = 0; i < num; i++) {
    starList.push(<FontAwesomeIcon icon="fa-solid fa-star" className="pe-1 " />)
  }
  return starList
}
function star2Amount(num2) {
  let star2List = []
  for (let i = 0; i < num2; i++) {
    star2List.push(<FontAwesomeIcon icon="far fa-star" className="pe-1" />)
  }

  return star2List
}

const ProductComment = () => {
  const { productId } = useParams()
  const { data } = useGetProductCommentQuery(productId)
  return (
    <>
      <Row className="my-10 d-flex justify-content-center">
        <Col className="col-lg-2 col-sm-12">
          <h4 className="detail_comment_title fw-bold">顧客回饋</h4>
        </Col>
        <Col className="col-10 ">
          {/* <ShowMore maxHeight={400} className="showmore"> */}
          {data?.map((item) => {
            return (
              <div className="detail_comment pb-5 mb-8" key={item.id}>
                <Row className="d-flex align-items-baseline">
                  <Col className="col-1 detail_comment_photo">
                    <img
                      src={require(`../../assets/user/profile_1.png`)}
                      alt=""
                    />
                  </Col>
                  <Col className="col-1 p-0">
                    <p className=" detail_comment_name">{item.user_name}</p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-2 detail_comment_score">
                    {starAmount(item.score)}
                    {star2Amount(5 - item.score)}
                  </Col>
                  <Col className="detail_comment_date p-0">{item.date}</Col>
                </Row>
                <p
                  className="detail_comment_content"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {item.content}
                </p>
                <img
                  className="detail_comment_img"
                  src={require(`../../assets/product_comment_img/` +
                    item.img_name[0])}
                  alt=""
                />
              </div>
            )
          })}
          {/* </ShowMore> */}
        </Col>

        {/* <Button className="detail_comment_getmore detail_button fw-bold">
          查看所有評價(5)
        </Button> */}
      </Row>
    </>
  )
}
export default ProductComment
