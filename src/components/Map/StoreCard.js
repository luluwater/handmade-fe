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
      }}
      role="button"
    >
      {/* <CardHeader className="fw-bold">{name}</CardHeader> */}
      <Card.Body className=" ps-0">
        <Row className="g-0">
          <Col sm={4} className="text-center">
            <div className="w-100">
              <CardImg
                className="border"
                src={require(`../../assets/store/store_${category}_${id}/${img}`)}
              />
            </div>

            <Card.Link href={fbUrl} target={'_blank'}>
              <FontAwesomeIcon
                icon="fa-brands fa-square-facebook"
                size={'lg'}
                className="mt-1"
              />
            </Card.Link>
            <Card.Link href={igUrl} target={'_blank'}>
              <FontAwesomeIcon
                icon="fa-brands fa-square-instagram"
                size={'lg'}
                className="mt-1"
              />
            </Card.Link>
          </Col>
          <Col>
            <CardHeader className="fw-bold h6 ">{name}</CardHeader>
            <Card.Text>地址:{address}</Card.Text>
            <Card.Text>電話:{phone}</Card.Text>
            {/* <Card.Text>營業時間:{openingHour}</Card.Text> */}

            {/* <Card.Text className="map_storeCard_intro small ">
              {intro}
            </Card.Text> */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default StoreCard
