import {
  Button,
  Col,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useGetcategoryListQuery } from '../../services/categoryApi'
import {
  setFilterCategory,
  setMRT_Line,
  setMRT_Station,
} from '../../slices/store-slice'
import MRT from '../../utils/TRTC-Station.json'
import MRT_Line from '../../utils/TRTC-Line.json'
import { useEffect, useRef } from 'react'

function MapSearchBar() {
  const { data } = useGetcategoryListQuery()
  const dispatch = useDispatch()
  const mrt_line = useSelector((state) => state.storeReducer.mrt_line)
  // console.log('line', mrt_line)
  // console.log('category', data)
  const mapSearchBarRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 152 ||
        document.documentElement.scrollTop > 152
      ) {
        mapSearchBarRef.current.classList.add('mapSearchBar_shrink')
      } else {
        mapSearchBarRef.current.classList.remove('mapSearchBar_shrink')
      }
    })
    return () => window.removeEventListener('scroll')
  }, [])
  return (
    <Row
      className="mapSearchBar align-items-center px-5 m-0"
      ref={mapSearchBarRef}
    >
      <Col sm={'auto'}>
        <FormGroup as={Row} className="align-items-center g-2">
          <FormLabel column sm={'auto'} className="fw-bold text-light fs-5">
            類別:
          </FormLabel>
          <Col>
            <FormSelect
              className="rounded-5"
              onChange={(e) => {
                dispatch(setFilterCategory(e.target.value))
              }}
            >
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
      <Col sm={'auto'}>
        <FormGroup as={Row} className="align-items-center g-2">
          <FormLabel column sm={'auto'} className="fw-bold text-light fs-5">
            捷運線:
          </FormLabel>
          <Col>
            <FormSelect
              className="rounded-5"
              onChange={(e) => {
                dispatch(setMRT_Line(e.target.value))
              }}
            >
              <option value="all">全部</option>
              {MRT_Line.map((v) => (
                <option key={v.LineNo} value={v.LineNo}>
                  {v.LineName.Zh_tw}
                </option>
              ))}
            </FormSelect>
          </Col>
        </FormGroup>
      </Col>
      {/* <Col sm={2}>
        <FormGroup as={Row} className="align-items-center g-2">
          <FormLabel column sm={'auto'} className="fw-bold text-light fs-5">
            捷運站:
          </FormLabel>
          <Col>
            <FormSelect
              className="rounded-5"
              onChange={(e) => {
                dispatch(setMRT_Station(e.target.value))
              }}
            >
              <option value="all">全部</option>
              {MRT.map((v) => {
                const length = mrt_line.length
                if (v.StationID.substring(0, length) !== mrt_line) return
                return (
                  <option value={v.StationID}>{v.StationName.Zh_tw}</option>
                )
              })}
            </FormSelect>
          </Col>
        </FormGroup>
      </Col> */}
    </Row>
  )
}

export default MapSearchBar
