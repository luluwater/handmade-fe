import './HomeHotCard.scss'
import Image1 from '../../assets/product/product_bakery_112/商品_Fabulous Lab_可麗露_3.jpg'
import Image2 from '../../assets/product/product_leather_80/商品＿Hsu _ Daughter 徐氏父女皮件工作室＿極簡短夾（小山摺款） _ DIY材料盒＿2.jpg'
import Image3 from '../../assets/product/product_pottery_33/陶藝_商品_Round_Round_什物印花盤_2.jpg'
import Image4 from '../../assets/product/product_tufting_145/tufting_商品_Hi-JOY-studio_中型梭織板材料包_3.jpg'
import Image5 from '../../assets/product/product_floral_71/花藝＿商品＿花曜日＿莫蘭迪粉花籃＿2.jpg'
import Image6 from '../../assets/product/product_metalwork_1/金工_商品_以覺學_流水純銀耳扣 Flow Silver EarCuff_kv2.webp'
import { Button } from 'react-bootstrap'
function HomeHotProduct() {
  const Cards = [
    {
      img: Image1,
      name: '可麗露',
      text: '小型的法式甜點，散發著酒香和香草味。',
      price: '$990',
    },
    {
      img: Image2,
      name: '極簡短夾 | DIY材料盒',
      text: '在乎生活細節的你，擁有一個能夠陪你很久的革製皮夾。',
      price: '$3,380',
    },
    {
      img: Image3,
      name: '什物印花盤',
      text: '不拘泥造型及技法上的規範，充分發揮個人的特色和美學意識。',
      price: '$1,500',
    },
    {
      img: Image4,
      name: '中型梭織板材料包',
      text: '讓我們用簡單4個小時的時間，輕鬆體驗織布的樂趣吧！',
      price: '$550',
    },
    {
      img: Image5,
      name: '訂製商品｜莫蘭迪粉花籃',
      text: '隨著不同的心情，每朵花的姿態呈現各自的美。',
      price: '$1,580',
    },
    {
      img: Image6,
      name: '流水純銀耳扣',
      text: '探索傳統工藝，從文化中玩轉出新式的時尚法則。',
      price: '$2,980',
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
export default HomeHotProduct
