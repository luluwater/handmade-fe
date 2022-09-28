import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
import './CourseDetail.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowMore from 'react-show-more-button'

import { useGetCourseCommentQuery } from '../../services/courseApi'
import { useParams } from 'react-router-dom'
import moment from 'moment'

function starAmount(num) {
  let starList = []
  for (let i = 0; i < num; i++) {
    starList.push(
      <FontAwesomeIcon key={i} icon="fa-solid fa-star" className="pe-1 " />
    )
  }
  return starList
}
function star2Amount(num2) {
  let star2List = []
  for (let i = 0; i < num2; i++) {
    star2List.push(
      <FontAwesomeIcon key={i} icon="far fa-star" className="pe-1" />
    )
  }

  return star2List
}

const CourseCommentTest = () => {
  const { courseId } = useParams()
  const { data } = useGetCourseCommentQuery(courseId)
  return (
    <>
      <Row className="my-10 d-flex justify-content-center C_border">
        <Col className="col-lg-2 col-sm-12">
          <h4 className="detail_comment_title fw-bold">顧客回饋</h4>
        </Col>
        <Col className="col-10 ">
          <ShowMore maxHeight={375} className="showmore" defaultAnchor={true}>
            {data?.map((item) => {
              return (
                <div className="detail_comment pb-5 mb-8" key={item.id}>
                  <Row className="d-flex align-items-baseline">
                    <Col className="col-1 detail_comment_photo">
                      <img
                        className="comment_avatar"
                        src={item.avatar}
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
                    <Col className="detail_comment_date p-0">
                      {moment(item.pubilsh_time).format('YYYY-MM-DD')}
                    </Col>
                  </Row>
                  <p
                    className="detail_comment_content"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {item.content}
                  </p>
                  {item.img_name.length > 0 ? (
                    <img
                      className="detail_comment_img"
                      src={require(`../../assets/course_comment_img/` +
                        item.img_name[0])}
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                </div>
              )
            })}
          </ShowMore>
        </Col>
      </Row>
    </>
  )
}
export default CourseCommentTest
