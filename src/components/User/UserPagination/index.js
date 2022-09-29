import '../User.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  changePage,
  nextPage,
  prePage,
} from '../../../slices/filterPagination-slice'

function UserPagination() {
  const paginate = useSelector((state) => state.paginationReducer)

  const { totalPage, currentPage } = paginate
  const dispatch = useDispatch()

  //取得總頁數陣列去map
  const renderPages = (totalPage) => {
    const result = []
    for (let i = 1; i <= totalPage; i++) {
      result.push(i)
    }
    return result
  }

  if (totalPage < 2) return
  return (
    <ul className="d-flex justify-content-center gap-2 list-unstyled text-center mt-6">
      <li
        onClick={() => {
          dispatch(prePage())
        }}
      >
        <Link
          className="user_page_number px-2 py-1 rounded"
          to={`/user/coupon?page=${currentPage - 1 < 1 ? 1 : currentPage - 1}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </Link>
      </li>
      {renderPages(totalPage)?.map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <Link
              to={`/user/coupon?page=${pageNumber}`}
              className={`fw-bold px-2 py-1 rounded ${
                currentPage === pageNumber
                  ? 'bg-secondary text-white rounded-circle'
                  : 'page_number'
              }`}
              onClick={() => {
                dispatch(changePage(pageNumber))
              }}
            >
              {pageNumber}
            </Link>
          </li>
        )
      })}

      <li
        onClick={() => {
          dispatch(nextPage())
        }}
      >
        <Link
          className="user_page_number px-2 py-1 rounded"
          to={`/user/coupon?page=${
            currentPage + 1 > totalPage ? totalPage : currentPage + 1
          }`}
        >
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </Link>
      </li>
    </ul>
  )
}

export default UserPagination
