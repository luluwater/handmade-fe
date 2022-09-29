import React, { useEffect } from 'react'
import FilterStore from '../../Filter/FilterStore/FilterStore'
import { useDispatch, useSelector } from 'react-redux'
import { getNewData } from '../../Filter/Filter'
import { useGetStoreQuery } from '../../../services/storeApi'
import { addFilterStore } from '../../../slices/filterStore-silce'
import FilterDate from '../../Filter/FilterDate'

const BlogFilter = () => {
  const { data } = useGetStoreQuery()
  const dispatch = useDispatch()

  const currentState = useSelector((state) => state.filterStoreReducer.list)

  useEffect(() => {
    let newData = []
    if (Object.keys(data ?? {}).length !== 0) {
      newData = getNewData(data)
    }
    dispatch(addFilterStore(newData))
  }, [dispatch, data])

  return (
    <>
      <FilterStore state={currentState} className="d-none d-md-block" />
      <FilterDate className="d-none d-md-block" />
    </>
  )
}

export default BlogFilter
