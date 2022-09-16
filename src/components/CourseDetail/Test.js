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

// {moment(startDate).format('YYYY-MM-DD') ===
// stock?.map((v) => {
//   return moment(v.date).format('YYYY-MM-DD')
// }) ? (
//   stock?.map((item) => {
//     console.log('A', moment(startDate).format('YYYY-MM-DD'))
//     console.log(
//       'B',
//       stock?.map((v) => {
//         return moment(v.date).format('YYYY-MM-DD')
//       })
//     )

//     return (
//       <Button className="col-3 m-2 course_time_btn" key={item.id}>
//         {item.time_start}
//       </Button>
//     )
//   })
// ) : (
//   <Col>
//     <Button className="col-3 m-2 course_time_btn" disabled>
//       10:00
//     </Button>
//     <Button className="col-3 m-2 course_time_btn" disabled>
//       11:00
//     </Button>
//     <Button className="col-3 m-2 course_time_btn" disabled>
//       13:00
//     </Button>
//     <Button className="col-3 m-2 course_time_btn" disabled>
//       15:00
//     </Button>
//     <Button className="col-3 m-2 course_time_btn" disabled>
//       17:00
//     </Button>
//     <Button className="col-3 m-2 course_time_btn" disabled>
//       19:00
//     </Button>
//   </Col>
// )}
