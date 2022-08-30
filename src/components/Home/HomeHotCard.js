import './HomeHotCard.scss'
import Image1 from '../../assets/course/course_pottery_12/陶藝_課程_璐室_陶藝拉坯體驗_3.jpg'
import { Button } from 'react-bootstrap'
function HotCard() {
  return (
    <>
      <div className="home_hotCard d-flex flex-column align-items-center">
        <img className="home_hotCard_pic" src={Image1} />
        <div className="home_hotCard_name">拉胚基礎班</div>
        <div className="home_hotCard_text">
          自己製作的生活陶器皿，自用或作為贈禮都充滿獨特性。
        </div>
        <Button className="home_hotCard_button">$1,200</Button>
      </div>
    </>
  )
}
export default HotCard
