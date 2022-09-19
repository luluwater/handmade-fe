import React from 'react'
import AccordionHeader from './AccordionHeader'
// import listData from './data'
import './FilterStore.scss'

import { useDispatch } from 'react-redux'
import {
  handleToggoleTitle,
  handleToggole,
  handleSelecteAll,
} from '../../../slices/filterStore-silce'
function FilterStore({ state, className = '' }) {
  const dispatch = useDispatch()
  const lists = state

  return (
    <>
      <div className={`filter ${className}`}>
        <div className="filter_title">所有店家</div>

        {lists?.map((ar, index) => (
          <div key={index}>
            <div
              className="filter_category"
              onClick={() => {
                dispatch(handleToggoleTitle(ar))
              }}
            >
              <input
                type="checkbox"
                style={{ margin: '0 5px' }}
                onChange={() => {
                  dispatch(handleSelecteAll(ar.id))
                }}
                checked={ar.checked}
              />
              <AccordionHeader active={ar.active} name={ar.category} />
            </div>

            {ar.active &&
              ar.innerList.map((inner) => (
                <label className="filter_stores d-block" key={inner.id}>
                  <input
                    className="filter_input"
                    type="checkbox"
                    onChange={(e) => {
                      dispatch(
                        handleToggole({
                          category: ar.id,
                          checked: e.target.checked,
                          name: e.target.name,
                        })
                      )
                    }}
                    checked={inner.completed}
                    name={inner.title}
                    id={inner.title}
                  />
                  {inner.title}
                </label>
              ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default FilterStore
