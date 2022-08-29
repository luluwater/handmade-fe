// import BlogBanner from './BlogBanner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogList from './BlogList'

const Blog = () => {
  return (
    <>
      {/* <BlogBanner /> */}
      <h1
        style={{ height: '130px' }}
        className="bg-black text-white text-center mb-8"
      >
        這裡是分類
      </h1>
      <Container className="mb-12">
        <Row>
          <Col className="border-right" lg={3}>
            lg=3
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
