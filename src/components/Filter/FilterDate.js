import moment from 'moment'
import ReactDatePicker, { CalendarContainer } from 'react-datepicker'
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../../slices/filterDate-silce'
import './FilterDate.scss'

function FilterDate({ className = '' }) {
  const momentStartDate = useSelector(
    (state) => state.filterDateReducer.startDate
  )
  const momentEndDate = useSelector((state) => state.filterDateReducer.endDate)

  //整理、轉換資料格式 moment -> Date物件
  const startDate = momentStartDate ? new Date(momentStartDate) : new Date()
  const endDate =
    momentEndDate === 'Invalid date' || !momentEndDate
      ? null
      : new Date(momentEndDate)

  const dispatch = useDispatch()
  const onChange = (dates) => {
    const [start, end] = dates

    //轉換資料格式  Date物件 -> moment
    dispatch(
      setState({
        startDate: moment(start).format('YYYY-M-D'),
        endDate: end ? moment(end).format('YYYY-M-D') : null,
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