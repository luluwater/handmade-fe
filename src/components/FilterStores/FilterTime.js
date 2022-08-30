import './FilterStores.scss'

function FilterTime() {
  return (
    <>
      <div className="filter">
        <div className="filter_title">課程時間</div>
        <div className="filter_times">
          <div>
            <label className="filter_time">
              <input className="filter_input" type="checkbox" /> 1 個小時以內
            </label>
          </div>
          <div>
            <label className="filter_time">
              <input className="filter_input" type="checkbox" /> 1 個小時 ~ 2
              個小時
            </label>
          </div>
          <div>
            <label className="filter_time">
              <input className="filter_input" type="checkbox" /> 2 個小時 ~ 3
              個小時
            </label>
          </div>
          <div>
            <label className="filter_time">
              <input className="filter_input" type="checkbox" /> 3 個小時以上
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default FilterTime
