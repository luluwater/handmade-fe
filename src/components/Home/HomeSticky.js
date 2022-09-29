import React from 'react'
import './HomeSticky.scss'
import HD from '../../assets/HD_04.png'

const HomeSticky = () => {
  return (
    <>
      <div>
        <ul className="home_sticky">
          <img className="home_sticky_logo" src={HD} alt="" />
          <a href="#home_news">
            <li className="home_sticky_li">最新消息</li>
          </a>
          <a href="#home_hot_course">
            <li className="home_sticky_li">熱門課程</li>
          </a>
          <a href="#home_hot_product">
            <li className="home_sticky_li">熱銷商品</li>
          </a>
          <a href="#home_blog">
            <li className="home_sticky_li">文章推薦</li>
          </a>
        </ul>
      </div>
    </>
  )
}

export default HomeSticky
