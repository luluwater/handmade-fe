import BlogBanner from './BlogBanner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogList from './BlogList'
import FilterKeyword from '../Filter/FilterKeyword'
import Paginate from '../Filter/Paginate'
import FilterStore from '../Filter/FilterStore/FilterStore'
import { useGetStoreQuery } from '../../services/storeApi'
// import { DateRangePicker } from 'react-date-range'

const Blog = () => {
  const { data } = useGetStoreQuery()
  console.log(data)

  return (
    <>
      <BlogBanner />
      <Container className="mb-12">
        <Row>
          <Col className="border-right" lg={3}>
            <FilterKeyword />
            <FilterStore />
            {/* <DateRangePicker /> */}
            <Paginate />
          </Col>
          <Col lg={9}>
            <BlogList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Blog
