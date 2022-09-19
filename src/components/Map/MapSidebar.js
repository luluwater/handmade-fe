import { useSelector, useDispatch } from 'react-redux'
import { useGetStoreQuery } from '../../services/storeApi'
import StoreCard from './StoreCard'
import { getStore } from '../../slices/store-slice'
import { useEffect } from 'react'

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
    <div className="map_Sidebar">
      <h2 className="text-center text-light fw-bold mt-2">商家資訊</h2>
      {storeData?.map((v) => {
        return (
          <StoreCard
            key={v.id}
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
        )
      })}
    </div>
  )
}

export default MapSidebar
