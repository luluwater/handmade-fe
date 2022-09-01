import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import './Map.scss'
function StoreCard({
  name,
  intro,
  address,
  phone,
  openingHour,
  fbUrl,
  igUrl,
  lng,
  lat,
}) {
  return (
    <Card className="storeCard text-gray-darker">
      <CardHeader className="text-weight-bold">{name}</CardHeader>
      <Card.Body>
        <Card.Text>地址:{address}</Card.Text>
        <Card.Text>電話:{phone}</Card.Text>
        <Card.Text>地址:{address}</Card.Text>
        <Card.Link href={fbUrl}>FB</Card.Link>
        <Card.Link href={igUrl}>IG</Card.Link>
        <Card.Text className="storeCard_intro small ">{intro}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StoreCard
