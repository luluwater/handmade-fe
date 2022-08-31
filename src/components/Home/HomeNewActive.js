import './HomeNews.scss'
import Image1 from '../../assets/store/store_pottery_6/陶藝_璐室_BN.jpg'
import { Button } from 'react-bootstrap'
function HomeNewActive() {
  return (
    <>
      <div className="home_newStore d-flex flex-column align-items-center">
        <h4 className="home_newStore_title">活動資訊</h4>
        <div className="home_newStore_content">
          <img className="home_newStore_content_pic2" src={Image1} alt="" />
          <div className="home_newStore_content_bottom">
            <h5 className="home_newStore_content_name">
              世界女孩日 | The day of Girl
            </h5>
            <div className="home_newStore_content_text">
              <br />
              美好的生活，是需要自己去刻畫的。
              <br />
              <span> </span>
              <br />
              在這個屬於每一位女性的紀念日裡，獻上平衡斜槓生活學，致每位女性，與我們一同實踐美好的生活理念，從容面對生活中的不同身分！
              <br />
              邀請擁有無與倫比創造力的妳，把自己歸零、擺脫生活中的所有身分，與我們攜手度過愜意放鬆的手做體驗，享受專屬於自己或是與閨蜜們的美好時光。
              <br />
              <br />
            </div>
            <Button className="home_newStore_content_button">看更多</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeNewActive
