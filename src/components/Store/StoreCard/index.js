import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './StoreCard.scss'
import storeLogo from '../../../assets/store/store_pottery_6/陶藝_璐室_logo.jpg'

const index = () => {
  return (
    <>
      <Card className="StoreCard_card p-0">
        <div className="StoreCard_imgBox">
          <Link to="/">
            <img src={storeLogo} alt="" />
          </Link>
        </div>
        <Link to="/">
          <p className="text-center mt-3 text-gray-darker">| 璐室 |</p>
        </Link>
      </Card>
    </>
  )
}

export default index
