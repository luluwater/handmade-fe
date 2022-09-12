import FilterKeyword from './FilterKeyword'
import FilterPrice from './FilterPrice'
import FilterStore from './FilterStore/FilterStore'

function Filter() {
  return (
    <>
      <FilterKeyword />
      <FilterStore />
      <FilterPrice />
    </>
  )
}
export default Filter
