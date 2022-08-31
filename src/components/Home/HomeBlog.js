import './HomeBlog.scss'
import React from 'react'
import Image1 from '../../assets/blog/一器一花/花藝＿部落格＿一器一花＿相約在瀰漫著京都春夏氣息的詩意午後＿3.jpg'
import Image2 from '../../assets/blog/忠孝敦化時尚陶藝空間/陶藝_部落格_RoundRound_忠孝敦化時尚陶藝空間！_4.jpg'
import Image3 from '../../assets/blog/草地學花/花藝＿部落格＿草地學花＿台北人氣花藝教室分享＿1.jpg'
import Image4 from '../../assets/blog/blog_tufting_1/blog_tufting_1_8.jpg'

function HomeBlog() {
  const NewBlog = [
    {
      img: Image1,
      name: '一器一花｜相約在瀰漫著京都春夏氣息的詩意午後',
      date: '黑色小花貓 2022.05.16',
    },
    {
      img: Image3,
      name: '台北人氣花藝教室分享「草地學花 Meadow」',
      date: '黑色小花貓 2022.06.18',
    },
  ]
  const HotBlog = [
    {
      img: Image4,
      name: '一次就上手！小紅書上最火「Tufting手作地毯」台灣也玩得到，做完立即讓你帶回家。',
      date: '黑色小花貓 2022.06.10',
    },
    {
      img: Image2,
      name: '忠孝敦化時尚陶藝空間！陶創作 ╳ Round Round，捏塑揉壓、在陶土中挹注掌心的溫度。',
      date: '黑色小花貓 2021.12.05',
    },
  ]
  return (
    <>
      <h4 className="home_blog_title">最新文章</h4>
      <div className="d-flex justify-content-between">
        {NewBlog.map((v, i) => {
          return (
            <div key={v.name} className="home_blog">
              <img className="home_blog_pic" src={v.img} alt="" />
              <a href="#/">
                <h5 className="home_blog_name">{v.name}</h5>
              </a>
              <div className="home_blog_date">{v.date}</div>
            </div>
          )
        })}
      </div>
      <h4 className="home_blog_title">熱門文章</h4>
      <div className="d-flex justify-content-between">
        {HotBlog.map((v, i) => {
          return (
            <div key={v.name} className="home_blog2">
              <img className="home_blog_pic" src={v.img} alt="" />
              <a href="#/">
                <h5 className="home_blog_name">{v.name}</h5>
              </a>
              <div className="home_blog_date">{v.date}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default HomeBlog
