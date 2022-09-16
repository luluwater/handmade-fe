import {
  Button,
  Col,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useGetcategoryListQuery } from '../../services/categoryApi'
import { setFilterCategory } from '../../slices/store-slice'

function MapSearchBar() {
  const { data } = useGetcategoryListQuery()
  const dispatch = useDispatch()

  console.log('category', data)
  return (
    <Row
      className="mapSearchBar align-items-center px-5 m-0"
      onChange={(e) => {
        dispatch(setFilterCategory(e.target.value))
      }}
    >
      <Col sm={'auto'}>
        <FormGroup as={Row} className="align-items-center g-2">
          <FormLabel column sm={'auto'} className="fw-bold text-light fs-5">
            類別:
          </FormLabel>
          <Col>
            <FormSelect className="rounded-5">
              <option value="all">全部</option>
              {data?.map((v) => (
                <option key={v.id} value={v.category_en_name}>
                  {v.category_name}
                </option>
              ))}
            </FormSelect>
          </Col>
        </FormGroup>
      </Col>
      <Col sm={2}>
        <FormGroup as={Row} className="align-items-center g-2">
          <FormLabel column sm={'auto'} className="fw-bold text-light fs-5">
            捷運線:
          </FormLabel>
          <Col>
            <FormSelect className="rounded-5">
              <option value="all">全部</option>
            </FormSelect>
          </Col>
        </FormGroup>
      </Col>
      <Col sm={2}>
        <FormGroup as={Row} className="align-items-center g-2">
          <FormLabel column sm={'auto'} className="fw-bold text-light fs-5">
            捷運站:
          </FormLabel>
          <Col>
            <FormSelect className="rounded-5">
              <option value="all">全部</option>
            </FormSelect>
          </Col>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default MapSearchBar
