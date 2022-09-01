import { useGetStoreListQuery } from '../../services/storeApi'
import StoreCard from './StoreCard'

function MapSidebar() {
  const { data, error, isLoading } = useGetStoreListQuery()
  console.log(data)
  return (
    <>
      <h1>List</h1>
      {data?.map((v) => {
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
    </>
  )
}

export default MapSidebar
