import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'

const PaginationContainer = () => {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination
  const pages = Array.from({ length: pageCount }, (v, index) => {
    return index + 1
  })

  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const handlePageCount = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }
  if (pageCount < 2) return null
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn join-item"
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage === pageCount
            handlePageCount(prevPage)
          }}
        >
          Prev
        </button>

        {pages.map((page) => {
          return (
            <button
              key={page}
              className="btn join-item"
              onClick={() => handlePageCount(page)}
            >
              {page}
            </button>
          )
        })}

        <button
          className="btn join-item"
          onClick={() => {
            let nextPage = page + 1
            if (nextPage > pageCount) nextPage === 1
            handlePageCount(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default PaginationContainer
