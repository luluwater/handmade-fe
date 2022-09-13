import { FormSelect } from 'react-bootstrap'

function SortSelect({ className }) {
  return (
    <FormSelect className={`sort ms-auto ${className}`}>
      <option value="category">類別</option>
      <option value="price">價格 高至低</option>
    </FormSelect>
  )
}

export default SortSelect
