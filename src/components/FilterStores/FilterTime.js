import './styles.scss'

function FilterTime() {
  return (
    <>
      <div className="filter">
        <div className="filter-title">課程時間</div>
        <div className="filter-times">
          <div>
            <label className="filter-time">
              <input className="filter-input" type="checkbox" /> 1 個小時以內
            </label>
          </div>
          <div>
            <label className="filter-time">
              <input className="filter-input" type="checkbox" /> 1 個小時 ~ 2
              個小時
            </label>
          </div>
          <div>
            <label className="filter-time">
              <input className="filter-input" type="checkbox" /> 2 個小時 ~ 3
              個小時
            </label>
          </div>
          <div>
            <label className="filter-time">
              <input className="filter-input" type="checkbox" /> 3 個小時以上
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default FilterTime
