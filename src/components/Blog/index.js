import BlogBanner from './BlogBanner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogList from './BlogList'
import FilterKeyword from '../FIlter/FilterKeyword'
import Paginate from '../FIlter/Paginate'
import FilterStore from '../FIlter/FilterStore/FilterStore'
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
