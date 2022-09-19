import './HomeCategory.scss'
import React from 'react'
import Image1 from '../../assets/store/store_metalwork_2/金工_轉角金工_kv2.jpg'
import Image2 from '../../assets/store/store_pottery_7/陶藝_Round-Round_kv_3.jpg'
import Image3 from '../../assets/store/store_floral_14/花藝＿草地學花＿KV＿1.jpg'
import Image4 from '../../assets/store/store_leather_16/store_leather_HsuDaughter_kv3.jpg'
import Image5 from '../../assets/store/store_bakery_21/烘焙_花貓_kv_4.jpg'
import Image6 from '../../assets/store/store_tufting_28/tufting_Nu-Studio_kv_4.jpg'

import { useDispatch } from 'react-redux'
import { handleSelecteAll } from '../../slices/filterStore-silce'
import { Link } from 'react-router-dom'

function HomeCategory() {
  const dispatch = useDispatch()

  const Category = [
    { id: 1, img: Image1, name: '金工', category: 'metalwork' },
    { id: 2, img: Image2, name: '陶藝', category: 'pottery' },
    { id: 3, img: Image3, name: '花藝', category: 'floral' },
    { id: 4, img: Image4, name: '皮革', category: 'leather' },
    { id: 5, img: Image5, name: '烘焙', category: 'backery' },
    { id: 6, img: Image6, name: 'Tufting', category: 'tufting' },
  ]
  return (
    <>
      <div className="d-flex justify-content-between home_category mb-10">
        {Category.map((v, i) => {
          return (
            <div key={v.img} className="home_category_box">
              <Link
                to="/course"
                onClick={() => {
                  dispatch(handleSelecteAll(v.category))
                }}
              >
                <img className="home_category_pic" src={v.img} alt="" />
                <h5 className="home_category_name">{v.name}</h5>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HomeCategory
