import React, { useEffect } from 'react'
import AccordionHeader from './AccordionHeader'
// import listData from './data'
import './FilterStore.scss'
import { useState } from 'react'
import { useGetStoreListQuery } from '../../services/storeApi'

function FilterStore() {
  const { data, error, isload } = useGetStoreListQuery()
  // console.log(data)

  const getNewData = () => {
    const result = []
    let obj = {}
    // console.log('obj', !!obj)
    for (let item of data) {
      const innerList = []
      if (Object.keys(obj).length === 0) {
        obj['id'] = item.category_en_name
        obj['category'] = item.category_name
        obj['actove'] = false
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
  let newData = []
  // console.log('1', data)
  useEffect(() => {
    if (Object.keys(data ?? {}).length !== 0) {
      // console.log('2', data)
      newData = getNewData()
      // console.log(newData)
    }
    setState({ lists: newData })
  }, [])  

  const [state, setState] = useState({ lists: newData })
  const handleTile = (list) => {
    setState((prevState) => ({
      lists: prevState.lists.map((item) =>
        item.id === list.id ? { ...item, active: !item.active } : item
      ),
    }))
  }

  const handleChange = (selectedList) => (e) => {
    const { checked, name } = e.target
    setState((prevState) => ({
      lists: prevState.lists.map((list) =>
        list.id === selectedList.id
          ? {
              ...list,
              innerList: list.innerList.map((fruite) =>
                fruite.title === name
                  ? {
                      ...fruite,
                      completed: checked,
                    }
                  : fruite
              ),
            }
          : list
      ),
    }))
  }
  // console.log(state)
  const { lists } = state

  return (
    <>
      <div className="filter">
        <div className="filter_title">所有店家</div>

        {lists?.map((ar, index) => (
          <div key={index}>
            <div className="filter_category">
              <input type="checkbox" style={{ margin: '0 5px' }} />
              <AccordionHeader
                active={ar.active}
                onClick={() => handleTile(ar)}
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
                      onChange={handleChange(ar)}
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
