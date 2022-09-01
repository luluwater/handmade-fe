import { useSelector, useDispatch } from 'react-redux'
import { useGetStoreListQuery } from '../../services/storeApi'
import StoreCard from './StoreCard'
import { getStore } from '../../slices/store-slice'
import { useEffect } from 'react'

function MapSidebar() {
  const { data, error, isLoading } = useGetStoreListQuery()
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStore(data))
  }, [data])
  const [storeData] = useSelector((state) => state.storeReducer.store)
  console.log(storeData);
  return (
    <div className="map_Sidebar">
      <h1>List</h1>
      {storeData?.map((v) => {
        return (
          <StoreCard
            key={v.id}
            name={v.name}
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
