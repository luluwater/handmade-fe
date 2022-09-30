import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLeftValue, setRightValue } from '../../slices/filterPrice-slice'
import './FilterPrice.scss'
function FilterPrice({ className }) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.filterPriceReducer)
  return (
    <div className={`filter  ${className}`}>
      <div className="filter_price_title mb-2">價格區間</div>
      <div className="filter_price">
        <p className="d-flex gap-2 ms-3">
          <span>{data.leftValue}</span>~<span>{data.rightValue}</span>
          (TWD)
        </p>
        <input
          type="range"
          min="0"
          max={data.max}
          value={data.leftValue}
          onChange={(e) => {
            dispatch(setLeftValue(e.target.value))
          }}
        ></input>
        <input
          type="range"
          min="0"
          max={data.max}
          value={data.rightValue}
          onChange={(e) => {
            dispatch(setRightValue(e.target.value))
          }}
        ></input>

        <div className="slider">
          <div className="track"></div>
          <div
            className="range"
            style={{ left: data.leftStyle, right: data.rightStyle }}
          ></div>
          <div className="thumb left" style={{ left: data.leftStyle }}></div>
          <div className="thumb right" style={{ right: data.rightStyle }}></div>
        </div>
      </div>
    </div>
  )
}

export default FilterPrice