import { FormSelect } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSort } from '../../slices/sortSelect-slice'
import './SortSelect.scss'

function SortSelect({ className }) {
  const dispatch = useDispatch()
  return (
    <FormSelect
      className={`sort   ${className}`}
      onChange={(e) => {
        dispatch(setSort(e.target.value))
        // console.log('change',e.target.value)
      }}
    >
      <option value="hot">最熱銷</option>
      <option value="heighPrice">價格 高到低</option>
      <option value="lowerPrice">價格 低到高</option>
    </FormSelect>
  )
}

export default SortSelect
