import React from 'react'
import StoreDetailBanner from '../components/Store/StoreDetailBanner'
import StoreDetailBody from '../components/Store/StoreDetailBody'
// import { useParams } from 'react-router-dom'

// import { useGetStoreDetailQuery } from '../services/storeApi'

const StoreDetail = () => {
  // const { storeId } = useParams()
  // console.log('storeId', storeId)
  // const { data, error, isLoading } = useGetStoreDetailQuery(storeId)
  // console.log('data', data)

  return (
    <>
      <StoreDetailBanner />
      <StoreDetailBody />
    </>
  )
}

export default StoreDetail
