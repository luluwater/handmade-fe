import { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useGetStoreQuery } from '../../services/storeApi'
import { addFilterStore } from '../../slices/filterStore-silce'
import FilterDate from './FilterDate'
import FilterKeyword from './FilterKeyword'
import FilterPrice from './FilterPrice'
import FilterStore from './FilterStore/FilterStore'
import SortSelect from './SortSelect'

export const getNewData = (data) => {
  const result = []
  let obj = {}
  const init = (obj, item) => {
    obj['id'] = item.category_en_name
    obj['category'] = item.category_name
    obj['active'] = false
    obj['checked'] = false
    obj['innerList'] = [
      {
        id: item.id,
        completed: false,
        title: item.name,
      },
    ]
  }
  for (let item of data) {
    if (Object.keys(obj).length === 0) {
      init(obj, item)
      continue
    }
    if (obj.category === item.category_name) {
      obj.innerList.push({
        id: item.id,
        completed: false,
        title: item.name,
      })
    } else {
      result.push({ ...obj })
      obj = {}
      init(obj, item)
    }
    if (item.id === data.length) result.push({ ...obj })
  }
  return result
}

function Filter({ haveDate = true, havePrice = true }) {
  const { data, error, isload } = useGetStoreQuery()

  //處理資料格式

  const dispatch = useDispatch()

  useEffect(() => {
    let newData = []
    if (Object.keys(data ?? {}).length !== 0) {
      newData = getNewData(data)
    }
    dispatch(addFilterStore(newData))
    // console.log('rawData', data)
    // console.log('newData', newData)
  }, [dispatch, data])

  const state = useSelector((state) => state.filterStoreReducer.list)
  const [showFilterStore, setShowFilterStore] = useState(false)
  const [showFilterOther, setShowFilterOther] = useState(false)

  const toggleShowFilterStore = () => setShowFilterStore(!showFilterStore)
  const toggleShowFilterOther = () => setShowFilterOther(!showFilterOther)
  return (
    <>
      <FilterKeyword />
      <FilterStore state={state} className="d-none d-md-block" />
      {haveDate ? <FilterDate className="d-none d-md-block" /> : ''}
      {havePrice ? <FilterPrice className="d-none d-md-block" /> : ''}

      <div className="d-flex justify-content-around">
        <Button
          onClick={toggleShowFilterStore}
          className="text-white filter-store-btn rounded-5 px-3 fw-bold letter-spacing-2"
        >
          商品類別
        </Button>
        {havePrice ? (
          <Button
            onClick={toggleShowFilterOther}
            className="text-white filter-store-btn rounded-5 px-3 fw-bold letter-spacing-2 bg-gray-dark border-0"
          >
            更多條件
          </Button>
        ) : (
          ''
        )}
        {havePrice ? (
          <SortSelect className="w-25 me-0 d-md-none"></SortSelect>
        ) : (
          ''
        )}
      </div>

      <Modal
        show={showFilterStore}
        onHide={toggleShowFilterStore}
        dialogClassName="modal-100w"
      >
        <ModalHeader closeButton>
          <ModalTitle></ModalTitle>
        </ModalHeader>
        <ModalBody>
          <FilterStore state={state} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
      <Modal
        show={showFilterOther}
        onHide={toggleShowFilterOther}
        dialogClassName="modal-auto-h"
      >
        <ModalHeader closeButton></ModalHeader>
        <ModalBody>
          <ModalTitle className="filter_title text-center text-gray-darker">
            更多條件
          </ModalTitle>
          <FilterPrice />
          {haveDate ? <FilterDate /> : ''}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  )
}
export default Filter
