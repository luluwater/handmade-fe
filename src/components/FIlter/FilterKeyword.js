import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './FilterKeyword.scss'
import { setInputValue, setSearchWord } from '../../slices/filterKeyword-slice'

function FilterKeyword() {
  const inputValue = useSelector(
    (state) => state.filterKeywordReducer.inputValue
  )
  const dispatch = useDispatch()

  return (
    <FormGroup className="filter d-flex gap-3 mb-3 mx-auto mx-md-0 w-90">
      <FormControl
        type="text"
        placeholder="請輸入關鍵字"
        value={inputValue}
        onChange={(e) => {
          dispatch(setInputValue(e.target.value))
        }}
      />
      <Button
        className="border-gray-dark filterKeyword_search-btn bg-transparent"
        onClick={() => {
          dispatch(setSearchWord(inputValue))
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </Button>
    </FormGroup>
  )
}

export default FilterKeyword
