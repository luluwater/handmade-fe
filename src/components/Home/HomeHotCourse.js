import './HomeHotCard.scss'
import Image1 from '../../assets/course/course_pottery_12/陶藝_課程_璐室_陶藝拉坯體驗_1.jpg'
import Image2 from '../../assets/course/course_floral_21/花藝＿課程＿花研＿春日花籃＿1.jpg'
import Image3 from '../../assets/course/course_tufting_53/tufting_課程_小紅花Little Red Fafa_常規_kv_1.jpg'
import Image4 from '../../assets/course/course_leather_33/課程＿Shekinah 手工皮革＿十二生肖吊飾＿2.jpg'
import Image5 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_1.jpg'
import Image6 from '../../assets/course/course_floral_28/花藝＿課程＿草地學花＿原木乾燥桌花＿1.jpg'

import { Button } from 'react-bootstrap'
function HomeHotCourse() {
  const Cards = [
    {
      img: Image1,
      name: '陶藝拉坯體驗',
      text: '自己製作的生活陶器皿，自用或作為贈禮都充滿獨特性。',
      price: '$1,400',
    },
    {
      img: Image6,
      name: '原木乾燥桌花',
      text: '一起在乾燥花的陪伴下，享受一個愜意的手作時光吧！',
      price: '$1,600',
    },
    {
      img: Image3,
      name: '常規手做地毯課',
      text: '在這裡人人都可以是藝術家，絕對讓您收穫滿滿的成就感！',
      price: '$3,300',
    },
    {
      img: Image5,
      name: '基礎海綿蛋糕研修班',
      text: '探討甜點界的學問。不用再看烤箱的臉色玩烘培！',
      price: '$2,200',
    },
    {
      img: Image2,
      name: '春日花籃手作課程',
      text: '用一個早晨或午後的時光，享受花的陪伴。',
      price: '$2,480',
    },
    {
      img: Image4,
      name: '十二生肖吊飾',
      text: '開運十二生肖可愛吊飾，招財納福平安快樂。',
      price: '$1,500',
    },
  ]
  return (
    <>
      <div className="d-flex">
        {Cards.map((v, i) => {
          return (
            <>
              <div
                className="home_hotCard d-flex flex-column align-items-center"
                key={v.name}
              >
                <img className="home_hotCard_pic" src={v.img} alt="" />
                <h5 className="home_hotCard_name">{v.name}</h5>
                <div className="home_hotCard_text">{v.text}</div>
                <Button className="home_hotCard_button">{v.price}</Button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default HomeHotCourse
