import { React, useState } from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const Test = () => {
  const [startDate, setStartDate] = useState(new Date())

  const holiday = [
    new Date(2022, 9, 3),
    new Date(2022, 9, 25),
    new Date(2022, 9, 23),
    new Date(2022, 9, 16),
    new Date(2022, 9, 10),
  ]

  console.log('holiday', holiday)

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeDates={holiday}
      inline
    />
  )
}
export default Test
