import { useEffect } from 'react'
import { Row, Col, Container, FormSelect } from 'react-bootstrap'
import { useGetProductListQuery } from '../services/productApi'
import ProductCard from '../components/Products/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  pagination,
  setFilter,
  setShowItemCount,
  setType,
} from '../slices/filterPagination-slice'
import Paginate, { scrollToTop } from '../components/FIlter/Paginate'
import Filter from '../components/FIlter/Filter'
import SortSelect from '../components/FIlter/SortSelect'
// import { initFilterPrice } from '../slices/filterPrice-slice'
// import { initFilterDate } from '../slices/filterDate-silce'
// import { initSearchWord } from '../slices/filterKeyword-slice'
// import { initFilterStore } from '../slices/filterStore-silce'
import ProductBanner from '../components/Products/ProductBanner'

function Proudcts() {
  //api get products data
  const { data, error, isLoading } = useGetProductListQuery()
  const dispatch = useDispatch()

  //取的篩選資料
  const rawData = useSelector((state) => state.paginationReducer.rawData)
  const sort = useSelector((state) => state.sortSelectReducer.sortValue)
  const productList = useSelector((state) => state.paginationReducer.data)
  const filterStore = useSelector(
    (state) => state.filterStoreReducer.filterStores
  )
  const filterSearchWord = useSelector(
    (state) => state.filterKeywordReducer.searchWord
  )
  const filterPrice = useSelector((state) => state.filterPriceReducer)
  useEffect(() => {
    if (rawData === data) return
    scrollToTop()
    // console.log('get rawData')
    dispatch(pagination(data))
    // dispatch(initFilterPrice())
    // dispatch(initFilterDate())
    // dispatch(initSearchWord())
    // dispatch(initFilterStore())
    dispatch(setShowItemCount(20))
    dispatch(setType('product'))
  }, [dispatch, data])
  //設定篩選資料
  useEffect(() => {
    dispatch(
      setFilter({
        store: filterStore,
        searchWord: filterSearchWord,
        price: { min: filterPrice.leftValue, max: filterPrice.rightValue },
        sort: sort,
      })
    )
  }, [dispatch, filterStore, filterSearchWord, filterPrice, sort])
  console.log('pagination', productList)
  // console.log(
  //   'pagination:filter',
  //   useSelector((state) => state.paginationReducer.filter)
  // )

  return (
    <>
      <ProductBanner />
      <Container fluid className="m-3 mx-auto ">
        <Row className="gx-0 gy-5 m-160">
          <Col md={'auto'}>
            <Filter haveDate={false} />
          </Col>
          <Col>
            <SortSelect className="d-none d-md-block ms-auto mb-3"></SortSelect>
            <div className="d-flex justify-content-center">
              <Row className="product_list gap-4 gap-lg-6">
                {productList?.map((v, i) => {
                  return (
                    <ProductCard
                      key={v.id}
                      productId={v.id}
                      storeId={v.store_id}
                      categoryId={v.category_id}
                      imgs={v.img_name}
                      category={v.category_en_name}
                      storeName={v.store_name}
                      name={v.name}
                      price={v.price}
                      isFavorite={v.isFavorite}
                      amount={v.amount}
                      type={'product'}
                    />
                  )
                })}
              </Row>
            </div>
            <Paginate baseUrl={'shop'} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Proudcts
