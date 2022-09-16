import { useEffect } from 'react'
import { Row, Col, Container, FormSelect } from 'react-bootstrap'
import ProductCard from '../components/Products/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { pagination, setFilter } from '../slices/filterPagination-slice'
import { courseBanner } from '../image'
import Paginate from '../components/Filter/Paginate'
import Filter from '../components/Filter/Filter'
import SortSelect from '../components/Filter/SortSelect'
import { useGetCourseListQuery } from '../services/courseApi'

function Courses() {
  //api get products data
  const { data, error, isLoading } = useGetCourseListQuery()
  // console.log('data', data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pagination(data))
  }, [dispatch, data])
  //取的篩選資料
  const courseList = useSelector((state) => state.paginationReducer.data)
  const filterStore = useSelector(
    (state) => state.filterStoreReducer.filterStores
  )
  const filterSearchWord = useSelector(
    (state) => state.filterKeywordReducer.searchWord
  )
  const filterPrice = useSelector((state) => state.filterPriceReducer)
  const filterDate = useSelector((state) => state.filterDateReducer)
  const sort = useSelector((state) => state.sortSelectReducer.sortValue)
  // console.log('date', filterDate)
  //設定篩選資料
  useEffect(() => {
    dispatch(
      setFilter({
        store: filterStore,
        searchWord: filterSearchWord,
        price: { min: filterPrice.leftValue, max: filterPrice.rightValue },
        date: filterDate,
        sort: sort,
      })
    )
  }, [dispatch, filterStore, filterSearchWord, filterPrice, filterDate, sort])
  // console.log('pagination', courseList)
  // console.log(
  //   'pagination:filter',
  //   useSelector((state) => state.paginationReducer.filter)
  // )

  return (
    <>
      <div className="position-relative">
        <svg
          id="svg"
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          className="position-absolute top-0"
        >
          <path
            d="M 0,300 C 0,300 0,200 0,200 C 132,177 264,154 437,159 C 610,163 824,194 998,206 C 1172,217 1306,208 1440,200 C 1440,200 1440,300 1440,300 Z"
            stroke="none"
            fill="#f4eee8"
            className="path-top"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
        <svg
          id="svg"
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          className="position-absolute bottom-0"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 132,177 264,154 437,159 C 610,163 824,194 998,206 C 1172,217 1306,208 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            fill="#f4eee8"
            className="path-bottom"
          ></path>
        </svg>
        <img className="banner" src={courseBanner} alt="banner"></img>
        <h1 className="position-absolute top-50 start-50 translate-middle text-white fw-light banner_title">
          COURSE
        </h1>
      </div>
      <Container fluid className="m-3 mx-auto ">
        <Row className="gx-0 gy-5">
          <Col md={'auto'}>
            <Filter />
          </Col>
          <Col>
            <SortSelect className="d-none d-md-block ms-auto mb-3"></SortSelect>
            <div className="d-flex justify-content-center">
              <Row className="product_list gap-4 gap-lg-6">
                {courseList?.map((v, i) => {
                  return (
                    <ProductCard
                      key={v.id}
                      productId={v.id}
                      storeId={v.store_id}
                      categoryId={v.category_id}
                      imgs={v.imgName}
                      category={v.category_en_name}
                      storeName={v.store_name}
                      name={v.name}
                      price={v.price}
                      isFavorite={v.isFavorite}
                      type={'course'}
                    />
                  )
                })}
              </Row>
            </div>
            <Paginate baseUrl={'course'} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Courses
