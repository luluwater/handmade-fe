import React, { useEffect } from 'react'
import AccordionHeader from './AccordionHeader'
// import listData from './data'
import './FilterStore.scss'
import { useState } from 'react'
import { useGetStoreListQuery } from '../../services/storeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFilterStore,
  handleToggoleTitle,
  handleToggole,
  handleSelecteAll,
} from '../../slices/filterStore-silce'

function FilterStore() {
  const { data, error, isload } = useGetStoreListQuery()
  // console.log(data)
  const dispatch = useDispatch()
  const getNewData = () => {
    const result = []
    let obj = {}
    // console.log('obj', !!obj)
    for (let item of data) {
      const innerList = []
      if (Object.keys(obj).length === 0) {
        obj['id'] = item.category_en_name
        obj['category'] = item.category_name
        obj['active'] = false
        obj['checked'] = false
        obj['innerList'] = [
          {
            id: item.id,
            completed: false,
            title: item.name,
          },
        ]
        // console.log('first')
        continue
      }
      if (obj.category === item.category_name) {
        obj.innerList.push({
          id: item.id,
          completed: false,
          title: item.name,
        })
      } else {
        result.push({ ...obj })
        obj = {}
      }
      // result.push({ ...obj })
      // console.log('obj', obj)
      // console.log('obj', Object.keys(obj))
    }
    // console.log('getNewData', result)
    return result
  }
  // console.log('1', data)
  useEffect(() => {
    let newData = []
    if (Object.keys(data ?? {}).length !== 0) {
      newData = getNewData()
    }
    dispatch(addFilterStore(newData))
  }, [dispatch, data])

  const state = useSelector((state) => state.filterStoreReducer.list)

  const lists = state
  console.log('lists', lists)

  return (
    <>
      <div className="filter">
        <div className="filter_title">所有店家</div>

        {lists?.map((ar, index) => (
          <div key={index}>
            <div className="filter_category">
              <input
                type="checkbox"
                style={{ margin: '0 5px' }}
                onClick={() => {
                  dispatch(handleSelecteAll(ar))
                }}
              />
              <AccordionHeader
                active={ar.active}
                onClick={() => {
                  dispatch(handleToggoleTitle(ar))
                }}
                name={ar.category}
              />
            </div>

            {ar.active &&
              ar.innerList.map((inner) => (
                <div key={inner.id}>
                  <label className="filter_stores">
                    <input
                      className="filter_input"
                      type="checkbox"
                      onChange={(e) => {
                        const { checked, name } = e.target
                        dispatch(handleToggole({ ar, checked, name }))
                      }}
                      checked={inner.completed}
                      name={inner.title}
                      id={inner.title}
                    />
                    {inner.title}
                  </label>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default FilterStore
