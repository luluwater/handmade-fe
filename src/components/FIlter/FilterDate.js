import { margin } from '@mui/system'
import moment from 'moment'
import { useState } from 'react'
import ReactDatePicker, { CalendarContainer } from 'react-datepicker'
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../../slices/filterDate-silce'
import './FilterDate.scss'

function FilterDate({ className = '' }) {
  // const [startDate, setStartDate] = useState(new Date())
  // const [endDate, setEndDate] = useState(null)
  const startDate = useSelector((state) => state.filterDateReducer.startPicker)
  const endDate = useSelector((state) => state.filterDateReducer.endPicker)
  const dispatch = useDispatch()
  const onChange = (dates) => {
    const [start, end] = dates
    // setStartDate(start)
    // setEndDate(end)
    dispatch(
      setState({
        startDate: start,
        endDate: end,
      })
    )
  }
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    )
  }
  return (
    <div className={`filter ${className}`}>
      <div className="filter_price_title my-3">日期區間</div>
      <ReactDatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        calendarContainer={MyContainer}
      />
    </div>
  )
}

export default FilterDate
