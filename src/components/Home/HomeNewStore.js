import './HomeNews.scss'
import Image1 from '../../assets/store/store_pottery_6/陶藝_璐室_logo.jpg'
import Image2 from '../../assets/store/store_floral_14/花藝＿草地學花＿LOGO.png'
import { Button } from 'react-bootstrap'
function HomeNewStore() {
  return (
    <>
      <div className="home_newStore d-flex flex-column align-items-center">
        <h4 className="home_newStore_title">新駐店家</h4>
        <div className="home_newStore_content">
          <img className="home_newStore_content_pic1" src={Image1} alt="" />
          <div className="home_newStore_content_right">
            <h5 className="home_newStore_content_name">璐室 | 陶藝</h5>
            <div className="home_newStore_content_text">
              你可以醒者，同時決定夢的形狀。
              <br />
              源於 Lucid Dream 的嚮往。
              <br />
              期盼建立起一個空間用雙手實踐。
            </div>
            <Button className="home_newStore_content_button">查看店家</Button>
          </div>
        </div>
        <div className="home_newStore_content">
          <img className="home_newStore_content_pic1" src={Image2} alt="" />
          <div className="home_newStore_content_right">
            <h5 className="home_newStore_content_name">Meadow | 花藝</h5>
            <div className="home_newStore_content_text">
              Meadow － 有野花的草原、牧地地，
              <br />
              是能讓人以舒服自在的方式，
              <br />
              進行各種活動、互相分享的地方。
            </div>
            <Button className="home_newStore_content_button">查看店家</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeNewStore
