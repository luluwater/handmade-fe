import './HomeCategory.scss'
import React from 'react'
import Image1 from '../../assets/store/store_metalwork＿2/金工_轉角金工_kv2.jpg'
import Image2 from '../../assets/store/store_pottery_7/陶藝_Round-Round_kv_3.jpg'
import Image3 from '../../assets/store/store_floral_14/花藝＿草地學花＿KV＿1.jpg'
import Image4 from '../../assets/store/store_leather_16/store_leather_HsuDaughter_kv3.jpg'
import Image5 from '../../assets/store/store_bakery_21/烘焙_花貓_kv_4.jpg'
import Image6 from '../../assets/store/store_tufting_28/tufting_Nu-Studio_kv_4.jpg'
function HomeCategory() {
  const Category = [
    { img: Image1, name: '金工' },
    { img: Image2, name: '陶藝' },
    { img: Image3, name: '花藝' },
    { img: Image4, name: '皮革' },
    { img: Image5, name: '烘焙' },
    { img: Image6, name: 'Tufting' },
  ]
  return (
    <>
      {Category.map((v, i) => {
        return (
          <div key={v.img}>
            <img className="home_category_pic" src={v.img} alt="" />
            <h5 className="home_category_name">{v.name}</h5>
          </div>
        )
      })}
    </>
  )
}

export default HomeCategory
