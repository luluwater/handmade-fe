import BlogBanner from './BlogBanner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogList from './BlogList'
import { Link } from 'react-router-dom'
import FilterKeyword from '../Filter/FilterKeyword'
import Paginate from '../Filter/Paginate'
import { useGetBlogQuery } from '../../services/blogApi'
import { IMG_URL } from '../../utils/config'
import BlogFilter from './BlogFilter'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initFilterDate } from '../../slices/filterDate-silce'
import { initSearchWord } from '../../slices/filterKeyword-slice'
import { initFilterStore } from '../../slices/filterStore-silce'

import {
  pagination,
  setFilter,
  setShowItemCount,
  setType,
} from '../../slices/filterPagination-slice'
import { scrollToTop } from '../../components/Filter/Paginate'

const Blog = () => {
  useEffect(() => {
    scrollToTop()
  }, [])

  const { data } = useGetBlogQuery('all')
  const dispatch = useDispatch()

  const rawData = useSelector((state) => state.paginationReducer.rawData)
  const blogList = useSelector((state) => state.paginationReducer.data)

  const filterStore = useSelector(
    (state) => state.filterStoreReducer.filterStores
  )
  const filterSearchWord = useSelector(
    (state) => state.filterKeywordReducer.searchWord
  )
  const filterDate = useSelector((state) => state.filterDateReducer)

  useEffect(() => {
    if (rawData === data) return
    dispatch(setType('blog'))
    dispatch(initFilterDate())
    dispatch(initSearchWord())
    dispatch(initFilterStore())
    dispatch(setShowItemCount(4))
    dispatch(pagination(data))
  }, [dispatch, data, rawData])

  useEffect(() => {
    dispatch(
      setFilter({
        store: filterStore,
        searchWord: filterSearchWord,
        date: filterDate,
      })
    )
  }, [dispatch, filterStore, filterSearchWord, filterDate])

  const newData = data?.slice(0, 3)

  return (
    <>
      <BlogBanner />
      <Container className="mb-12">
        <Row>
          <Col className="border-right" lg={3}>
            <FilterKeyword />
            <div className="filter w-100 w-md-auto mb-5 mb-md-3">
              <h5 className="filter_title">最新文章</h5>
            </div>
            {newData?.map((item) => {
              const imgUrl = item.img_url[0].img_name
              return (
                <Row className="mb-5">
                  <Col className="d-flex align-items-center">
                    <Link to={`/blog/${item.blog_id}`}>
                      <img
                        className="opacity_img"
                        src={`${IMG_URL}/${imgUrl}`}
                        alt="new blog"
                      />
                    </Link>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <div className="text-cut ">{item.title}</div>
                  </Col>
                </Row>
              )
            })}
            <BlogFilter />
          </Col>
          <Col lg={9}>
            <BlogList blogList={blogList} />
            <Paginate baseUrl={'blog'} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Blog
