import React from 'react'
import ToggleIcon from './ToggleIcon'

function AccordionHeader({ active, name, onClick }) {
  return (
    <div onClick={onClick}>
      <label>{name}</label>
      <ToggleIcon state={active ? true : false} />
    </div>
  )
}
export default AccordionHeader