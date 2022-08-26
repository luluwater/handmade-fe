import { Row, Col, Container } from 'react-bootstrap'
import Filter from '../components/Products/Filter/Filter'
import ProductCard from '../components/Products/ProductCard/ProductCard'

function Proudcts() {
  return (
    <Container fluid className='m-3'>
      <Row>
        <Col sm={3}>
          <Filter></Filter>
        </Col>
        <Col sm={9}>
          <div className="d-flex flex-wrap  justify-center-end">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Proudcts
