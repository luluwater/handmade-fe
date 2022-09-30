import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Paginate.scss'
import {
  changePage,
  nextPage,
  prePage,
} from '../../slices/filterPagination-slice'

export function scrollToTop() {
  window.scrollTo(0, 0)
}

function Paginate({ baseUrl }) {
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
    <ul className=" d-flex justify-content-center gap-2 list-unstyled text-center mt-6">
      <li
        onClick={() => {
          dispatch(prePage())
        }}
      >
        <Link
          className="page_number px-2 py-1 rounded"
          to={`/${baseUrl}?page=${currentPage - 1 < 1 ? 1 : currentPage - 1}`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </Link>
      </li>
      {renderPages(totalPage)?.map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <Link
              to={`/${baseUrl}?page=${pageNumber}`}
              className={`fw-bold px-2 py-1 rounded ${
                currentPage === pageNumber
                  ? 'bg-secondary text-white rounded-circle'
                  : 'page_number'
              }`}
              onClick={() => {
                dispatch(changePage(pageNumber))
                scrollToTop()
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
          className="page_number px-2 py-1 rounded"
          to={`/${baseUrl}?page=${
            currentPage + 1 > totalPage ? totalPage : currentPage + 1
          }`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </Link>
      </li>
    </ul>
  )
}

export default Paginate