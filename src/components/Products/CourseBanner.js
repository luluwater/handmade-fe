import { courseBanner } from '../../image'

function CourseBanner() {
  return (
    <div className="position-relative d-none d-md-block">
      <svg
        id="svg"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        className="position-absolute top-0"
      >
        <path
          d="M 0,400 C 0,400  0,390  0,385 C 97,380  194,375  328,370 C 461,360  630,370  773,375 C 915,385  1030,395  1137,395 C 1243,390  1341,385  1440,370 C 1440,400  1440,400  1440,400 Z"
          stroke="none"
          fill="#f4eee8"
          // className="path-top"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <svg
        id="svg"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        className="position-absolute bottom-0"
      >
        <path
          d="M 0,400 C 0,400 0,300 0,275 C 132,277 264,254 437,259 C 610,263 824,274 998,270 C 1172,267 1306,258 1440,250 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          fill="#f4eee8"
          // className="path-bottom"
        ></path>
      </svg>
      <img className="banner" src={courseBanner} alt="banner"></img>
      <h1 className="position-absolute top-50 start-50 translate-middle text-white fw-light banner_title">
        COURSE
      </h1>
    </div>
  )
}

export default CourseBanner
