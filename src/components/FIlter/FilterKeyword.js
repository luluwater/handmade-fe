import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './FilterKeyword.scss'
import { setSearchWord } from '../../slices/filterKeyword-slice'

function FilterKeyword() {
  const searchWord = useSelector(
    (state) => state.filterKeywordReducer.searchWord
  )
  const dispatch = useDispatch()

  return (
    <FormGroup className="d-flex gap-3">
      <FormControl
        type="text"
        placeholder="keyword"
        value={searchWord}
        onChange={(e) => {
          dispatch(setSearchWord(e.target.value))
        }}
      />
      <Button className="border-gray-dark filterKeyword_search-btn bg-transparent">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </Button>
    </FormGroup>
  )
}

export default FilterKeyword
