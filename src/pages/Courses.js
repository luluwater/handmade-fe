import { useEffect } from 'react'
import { Row, Col, Container, FormSelect } from 'react-bootstrap'
import ProductCard from '../components/Products/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  pagination,
  setFilter,
  setShowItemCount,
  setType,
} from '../slices/filterPagination-slice'
import { courseBanner } from '../image'
import Paginate, { scrollToTop } from '../components/Filter/Paginate'
import Filter from '../components/Filter/Filter'
import SortSelect from '../components/Filter/SortSelect'
import { useGetCourseListQuery } from '../services/courseApi'
import CourseBanner from '../components/Products/CourseBanner'
// import { initFilterStore } from '../slices/filterStore-silce'
// import { initFilterPrice } from '../slices/filterPrice-slice'
// import { initFilterDate } from '../slices/filterDate-silce'
// import { initSearchWord } from '../slices/filterKeyword-slice'

function Courses() {
  //api get products data
  const { data, error, isLoading } = useGetCourseListQuery()
  // console.log('data', data)
  const dispatch = useDispatch()

  //取的篩選資料
  const courseList = useSelector((state) => state.paginationReducer.data)
  const rawData = useSelector((state) => state.paginationReducer.rawData)
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
  // console.log(filterPrice)
  //設定篩選資料
  useEffect(() => {
    scrollToTop()
  }, [])
  useEffect(() => {
    if (rawData === data) return
    // dispatch(initFilterPrice())
    // dispatch(initFilterDate())
    // dispatch(initSearchWord())
    // dispatch(initFilterStore())
    dispatch(setShowItemCount(20))
    dispatch(pagination(data))
    dispatch(setType('product'))
  }, [dispatch, data])

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
      <CourseBanner />
      <Container fluid className="m-3 mx-auto ">
        <Row className="gx-0 gy-5 m-160">
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
