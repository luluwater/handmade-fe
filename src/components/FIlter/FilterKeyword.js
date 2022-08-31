import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import './FilterKeyword.scss'

function FilterKeyword() {
  return (
    <FormGroup className="d-flex gap-3">
      <FormControl type="text" placeholder="keyword" />
      <Button className="border-gray-dark filterKeyword_search-btn bg-transparent">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </Button>
    </FormGroup>
  )
}

export default FilterKeyword
