import '../User.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  changePage,
  nextPage,
  prePage,
} from '../../../slices/user-filterPagination-slice'

function UserPagination() {
  const paginate = useSelector((state) => state.paginationReducer)
  // console.log('paginate', paginate)
  const { totalPage, currentPage } = paginate
  const dispatch = useDispatch()

  const renderPages = (totalPage, currentPage) => {
    const result = []
    for (let i = 1; i <= totalPage; i++) {
      result.push(i)
    }
    return result
  }
  // console.log(totalPage)

  if (totalPage === 1) return
  return (
    <ul className=" d-flex justify-content-center gap-2 list-unstyled text-center mt-6">
      <li
        onClick={() => {
          dispatch(prePage())
        }}
      >
        <Link className="user_page_number px-2 py-1 rounded" to={'#'}>
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </Link>
      </li>
      {renderPages(totalPage, currentPage)?.map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <Link
              to={'#'}
              className={`fw-bold px-2 py-1 rounded ${
                currentPage === pageNumber
                  ? 'bg-secondary text-white rounded-circle'
                  : 'user_page_number'
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
        <Link className="user_page_number px-2 py-1 rounded" to={'#'}>
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </Link>
      </li>
    </ul>
  )
}

export default UserPagination
