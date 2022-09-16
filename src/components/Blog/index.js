import BlogBanner from './BlogBanner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogList from './BlogList'
import { Link } from 'react-router-dom'
import FilterKeyword from '../Filter/FilterKeyword'
import Paginate from '../Filter/Paginate'
import FilterStore from '../Filter/FilterStore/FilterStore'
import { useGetBlogQuery } from '../../services/blogApi'
import { IMG_URL } from '../../utils/config'
const Blog = () => {
  const { data } = useGetBlogQuery('all')

  const newData = data?.slice(0, 3)

  return (
    <>
      <BlogBanner />
      <Container className="mb-12">
        <Row>
          <Col className="border-right" lg={3}>
            <FilterKeyword />

            <div className="filter">
              <h5 className="filter_title">最新文章</h5>
            </div>
            {newData?.map((item) => {
              const imgUrl = item.img_url[0].img_name
              console.log(item)
              return (
                <Row className="mb-md-5">
                  <Col className="d-flex align-items-center">
                    <Link to={`/blog/${item.blog_id}`}>
                      <img src={`${IMG_URL}/${imgUrl}`} alt="new blog" />
                    </Link>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <div className="text-cut ">{item.title}</div>
                  </Col>
                </Row>
              )
            })}

            <FilterStore />

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
