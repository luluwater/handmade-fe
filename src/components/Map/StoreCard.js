import { CardImg, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import './Map.scss'
import Leaflet from 'leaflet'
import { useDispatch } from 'react-redux'
import { setCenter } from '../../slices/store-slice'
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
    >
      {/* <CardHeader className="fw-bold">{name}</CardHeader> */}
      <Card.Body className=" ps-0">
        <Row className="g-0">
          <Col sm={4} className="text-center">
            <CardImg
              className="border"
              src={require(`../../assets/store/store_${category}_${id}/${img}`)}
            />

            <Card.Link href={fbUrl}>FB</Card.Link>
            <Card.Link href={igUrl}>IG</Card.Link>
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
