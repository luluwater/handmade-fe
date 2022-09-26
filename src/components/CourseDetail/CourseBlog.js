import './CourseBlog.scss'
import React from 'react'
import Image1 from '../../assets/blog/一器一花/花藝＿部落格＿一器一花＿相約在瀰漫著京都春夏氣息的詩意午後＿3.jpg'
import Image3 from '../../assets/blog/草地學花/花藝＿部落格＿草地學花＿台北人氣花藝教室分享＿1.jpg'

import { Row } from 'react-bootstrap'

function CourseBlog() {
  const NewBlog = [
    {
      img: Image1,
      name: '一器一花｜相約在瀰漫著京都春夏氣息的詩意午後',
      date: '黑色小花貓 2022.05.16',
      link: '/blog/9992f7bf-d2fc-44de-9a88-5d233af973c9',
    },
    {
      img: Image3,
      name: '台北人氣花藝教室分享「草地學花 Meadow」',
      date: '黑色小花貓 2022.06.18',
      link: '/blog/fb92c52e-0947-4311-ad56-c93dba244c12',
    },
  ]

  return (
    <>
      <Row className="mt-0 px-2 mb-10">
        <h4 className="home_blog_title">推薦文章</h4>
        <div className="d-flex justify-content-between home_blog_card">
          {NewBlog.map((v, i) => {
            return (
              <div key={v.name} className="home_blog">
                <a href={v.link}>
                  <img className="home_blog_pic" src={v.img} alt="" />
                </a>
                <a href={v.link}>
                  <h5 className="home_blog_name">{v.name}</h5>
                </a>
                <div className="home_blog_date">{v.date}</div>
              </div>
            )
          })}
        </div>
      </Row>
    </>
  )
}
export default CourseBlog
