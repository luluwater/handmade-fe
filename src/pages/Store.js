import React, { useEffect } from 'react'
import '../styles/style.scss'
import StoreBanner from '../components/Store/StoreBanner'
import StoreCard from '../components/Store/StoreCard'
import { Row, Col } from 'react-bootstrap'
import { useGetStoreQuery } from '../services/storeApi'
import Fitler from '../components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import {
  pagination,
  setFilter,
  setType,
} from '../slices/filterPagination-slice'

const Store = () => {
  const { data } = useGetStoreQuery()
  const dispatch = useDispatch()
  const filterStores = useSelector(
    (state) => state.filterStoreReducer.filterStores
  )
  const storeData = useSelector((state) => state.paginationReducer.data)
  const searchWord = useSelector(
    (state) => state.filterKeywordReducer.searchWord
  )
  useEffect(() => {
    dispatch(pagination(data))
    dispatch(setType('store'))
  }, [dispatch, data])
  useEffect(() => {
    dispatch(
      setFilter({
        searchWord: searchWord,
        store: filterStores,
        price: { min: 0, max: 10000 },
        date: { startDate: null, endDate: null },
        sort: 'hot',
      })
    )
  }, [dispatch, filterStores, searchWord])
  console.log(data)

  return (
    <>
      <StoreBanner />
      <div className="mt-10 StorePage_container">
        <Row className="gx-0">
          <Col md={3} className="mb-3">
            <Fitler haveDate={false} havePrice={false} />
          </Col>
          <Col xs={12} md={9}>
            <Row className="mx-2 mb-5">
              {storeData?.map((item) => {
                return (
                  <Col xs={6} md={3} className="mb-5" key={item.id}>
                    <StoreCard
                      id={item.id}
                      name={item.name}
                      img={item.img}
                      category_en_name={item.category_en_name}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Store
