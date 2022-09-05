import React from 'react'

import './CourseDetail.scss'

function CourseText() {
  const intro = `尺寸：口徑約 6.5cm / 高 6cm
若售完或是無庫存：可接單訂製，製作期約30天。陶瓷需經過兩次高溫燒製淬煉，等待絕對值得！
  
1. 切勿單點放置在火爐上加熱，以免作品裂損。
2. 建議以手洗方式清洗，避免碰撞，器皿較能長久使用。
3. 陶器表層有毛孔，油脂及水分容易滲入氣孔內，洗淨後再使用。
4. 部分陶器具開片現象是源自土與釉收縮率有差別，非器物龜裂導致，故不影響使用。
5. 可使用洗碗機、烤箱、微波爐，建議晾乾後收納入櫃。
`

  return (
    <>
      <div className="detail_intro">
        <div style={{ whiteSpace: 'pre-wrap' }}>{intro}</div>
      </div>
    </>
  )
}
export default CourseText
