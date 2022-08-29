import { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import productApi from '../apis/productApi'
import Filter from '../components/Products/Filter/Filter'
import ProductCard from '../components/Products/ProductCard/ProductCard'

function Proudcts() {
  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    const response = await productApi.get('/api/product')
    console.log(response.data)
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <Container fluid className="m-3 mx-auto ">
      <Row>
        <Col sm={3}>
          <Filter></Filter>
        </Col>
        <Col>
          <div className="d-flex flex-wrap  justify-content-center">
            {products.map((v, i) => {
              console.log(v)
              return (
                <ProductCard
                  key={v.id}
                  productId={v.id}
                  imgsId={v.product_image_id}
                  storeName={v.store_name}
                  name={v.name}
                  price={v.price}
                  isFavorite={false}
                />
              )
            })}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Proudcts
