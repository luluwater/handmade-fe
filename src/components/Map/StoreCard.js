import { CardImg, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import './Map.scss'
import Leaflet from 'leaflet'
import { useDispatch } from 'react-redux'
import { setCenter } from '../../slices/store-slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function StoreCard({
  id,
  name,
  img,
  category,
  intro,
  address,
  phone,
  openingHour,
  fbUrl,
  igUrl,
  lng,
  lat,
  isActive,
}) {
  const dispatch = useDispatch()
  return (
    <Card
      className="map_storeCard m-1"
      onClick={() => {
        dispatch(setCenter([lat, lng]))
        window.location.href = '#map'
      }}
      role="button"
    >
      {/* <CardHeader className="fw-bold">{name}</CardHeader> */}
      <Card.Body className=" ps-0">
        <Row className="g-0 align-items-center">
          <Col sm={4} md={12} className="text-center">
            <div className="w-100">
              <CardImg
                className="border rounded-0"
                src={require(`../../assets/store/store_${category}_${id}/${img}`)}
              />
            </div>
          </Col>
          <Col className="mx-5 mt-3">
            <Card.Title className="fw-bold h6 text-md-center ">
              | {name} |
            </Card.Title>

            <Card.Text className="row gx-1">
              <label className="col-auto">地址 : </label>
              <p className="col m-0">{address}</p>
            </Card.Text>
            <Card.Text>電話:{phone}</Card.Text>

            <div className="text-center mt-2">
              <Card.Link href={fbUrl} target={'_blank'}>
                <FontAwesomeIcon
                  icon="fa-brands fa-square-facebook"
                  size={'lg'}
                />
              </Card.Link>
              <Card.Link href={igUrl} target={'_blank'}>
                <FontAwesomeIcon
                  icon="fa-brands fa-square-instagram"
                  size={'lg'}
                />
              </Card.Link>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default StoreCard
