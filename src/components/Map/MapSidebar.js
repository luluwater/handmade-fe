import { useSelector, useDispatch } from 'react-redux'
import { useGetStoreQuery } from '../../services/storeApi'
import StoreCard from './StoreCard'
import { getStore } from '../../slices/store-slice'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

function MapSidebar() {
  const { data, error, isLoading } = useGetStoreQuery()
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStore(data))
  }, [data])
  const storeData = useSelector((state) => state.storeReducer.store)
  // console.log(storeData)
  return (
    <div className="map_Sidebar bg-skin-bright px-3 mt-md-0 mt-3">
      <h3 className="text-center text-light fw-bold py-3">商家資訊</h3>
      <Row className="gy-2 gx-1">
        {storeData?.map((v) => {
          return (
            <Col key={v.id} md={6}>
              <StoreCard
                id={v.id}
                name={v.name}
                img={v.img}
                category={v.category_en_name}
                intro={v.intro}
                address={v.address}
                phone={v.phone}
                openingHour={v.opening_hour}
                fbUrl={v.FB_url}
                igUrl={v.IG_url}
                lng={v.store_lng}
                lat={v.store_lat}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MapSidebar
