import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './StoreCard.scss'
import storeLogo from '../../../assets/store/store_pottery_6/陶藝_璐室_logo.jpg'

const StoreCard = ({ id, name, img, category_en_name }) => {
  return (
    <>
      <Card className="StoreCard_card p-0">
        <div className="StoreCard_imgBox">
          <Link to={`/store/${id}`}>
            <img
              src={require(`../../../assets/store/store_${category_en_name}_${id}/${img}`)}
              alt=""
            />
          </Link>
        </div>
        <Link to="/store/1">
          <p className="text-center mt-3 text-gray-darker">| {name} |</p>
        </Link>
      </Card>
    </>
  )
}

export default StoreCard
