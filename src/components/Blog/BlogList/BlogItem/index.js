import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

/**
 * 之後跟後端拿資料 prop 改成 blog 們的資料
 * @param {data} param0
 * @returns
 */
const BlogItem = ({ img }) => {
  return (
    <div className="mb-2 d-flex flex-column flex-lg-row gap-6 pb-4 mb-6 border-bottom ">
      <div className="blog_list_img w-100">
        <Link to="/blog/1">
          <img className="h-100 img-fluid" src={img} alt="blog post image" />
        </Link>
      </div>
      <div className="d-flex flex-column">
        <Badge
          className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark"
          bg="skin-bright"
        >
          新店報報
        </Badge>
        <h4 className="fw-bold">
          忠孝敦化時尚陶藝空間：陶創作 X Round
          Round，捏塑揉壓、在陶土鍾挹注掌心的溫度！
        </h4>
        <p className="text-muted">黑色小花貓 2022.06.18</p>
        <p className="blog_list_content">
          在時尚地標忠孝敦化的角落，一間鬧中取靜的陶藝空間孕育而生，利用掌心的陶土讓創意起飛，
          變化成實用陶杯，樸拙卻細膩的手感盤，或者是可愛討喜的牛奶壺和擴香瓶
          ....
        </p>
        <Link to="/" className="blog_list_btn align-self-end text-gray-darker">
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
