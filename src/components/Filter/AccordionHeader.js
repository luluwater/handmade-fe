import React from 'react'
import ToggleIcon from './ToggleIcon'

function AccordionHeader({ active, name, onClick }) {
  return (
    <div onClick={onClick}>
      <div>
        <label>{name}</label>
        <ToggleIcon state={active ? true : false} />
      </div>
    </div>
  )
}
export default AccordionHeader