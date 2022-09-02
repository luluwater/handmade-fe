import React from 'react'
import AccordionHeader from './AccordionHeader'
import listData from './data'
import './FilterStores.scss'
import { useState } from 'react'

function ForFilter() {
  const [state, setState] = useState({ lists: listData })
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

  const { lists } = state

  return (
    <>
      <div className="filter">
        <div className="filter_title">所有店家</div>

        {lists.map((ar, index) => (
          <div key={index}>
            <div className="filter_category">
              <input type="checkbox" style={{ margin: '0 5px' }} />
              <AccordionHeader
                active={ar.active}
                onClick={() => handleTile(ar)}
                name={ar.name}
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
export default ForFilter
