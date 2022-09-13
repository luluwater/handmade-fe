import { FormSelect } from 'react-bootstrap'

function SortSelect({ className }) {
  return (
    <FormSelect className={`sort ms-auto mb-3 ${className}`}>
      <option value="hot">最熱銷</option>
      <option value="price height-lower">價格 高到低</option>
      <option value="price lower-height">價格 低到高</option>
    </FormSelect>
  )
}

export default SortSelect
