import React from 'react'
import './ProductCartInfo.scss'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'


const SevenStore = ({ open, onClose }) => {
  if (!open) return null
  return (
    <div className="ProductCartInfo_overlay" onClick={onClose}>
      <div
        className="ProductCartInfo_modalContainer"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="d-flex justify-content-end">
          <span className=" mt-2 mb-0 me-3 " onClick={onClose}>
            X
          </span>
        </div>
        <form>
          <div className="d-flex ">
            <Form.Select
              aria-label="city"
              className="ProductCartInfo_city mx-5 mt-2 mb-5"
            >
              <option>縣市</option>
              <option value="1">台北市</option>
            </Form.Select>
            <Form.Select
              aria-label="dist"
              className="ProductCartInfo_city mt-2 mb-5"
            >
              <option>區域</option>
              <option value="1">中正區</option>
            </Form.Select>
          </div>
          <div>
            <Form.Select
              aria-label="store"
              className="ProductCartInfo_store mx-5"
            >
              <option>門市</option>
              <option value="1">速達門市 | 桃園中壢區一二路三四巷20號</option>
            </Form.Select>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button className="ProductCartInfo_storeBTN d-flex justify-content-center align-items-center mt-2">
              確認
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SevenStore