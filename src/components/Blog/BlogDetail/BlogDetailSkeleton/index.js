import { Skeleton } from '@mui/material'

const BlogDetailSkeleton = () => {
  return (
    <>
      <div className="mb-2 d-flex flex-column flex-lg-row gap-4 pb-4 mb-6 border-bottom w-md-75 mx-auto">
        <div className="w-md-100 d-flex flex-column">
          <div className="d-flex  justify-content-center align-items-center mb-2 gap-3">
            <Skeleton
              className="rounded-0 align-self-start text-dark px-3 py-3 m-0 rounded-circle"
              animation="wave"
              variant="rectangular"
            />
            <div>
              <Skeleton
                className="rounded-0 align-self-start py-2 px-3 text-dark px-6 py-2 m-0"
                animation="wave"
                variant="rectangular"
              />
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <Skeleton
              className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark px-6 py-3 m-0"
              animation="wave"
              variant="rectangular"
            />
            <Skeleton
              className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark px-6 py-3 m-0"
              animation="wave"
              variant="rectangular"
            />
          </div>
          <div className="">
            <Skeleton animation="wave" className="py-2 w-35 mx-auto" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" className="w-50 mx-auto" />
            <Skeleton animation="wave" className="w-75 mx-auto" />
            <div className="w-100 w-md-50 mx-auto my-md-3">
              <Skeleton
                className="h-100 d-md-flex img-fluid p-10"
                animation="wave"
                variant="rectangular"
              />
              <Skeleton
                className="h-100 d-md-flex img-fluid p-10"
                animation="wave"
                variant="rectangular"
              />
            </div>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" className="w-75 mx-auto" />
            <Skeleton animation="wave" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailSkeleton
