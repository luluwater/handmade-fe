import ReactPlayer from 'react-player'
import VideoFile from '../../assets/video/handmade_movie_1280x500.mp4'
import './HomeVideo.scss'
import { Button } from 'react-bootstrap'

function Video() {
  return (
    <>
      <div className="home_svg_top">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 165 1440 85"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 140.40000000000003,195.86666666666667 280.80000000000007,191.73333333333332 445,184 C 609.1999999999999,176.26666666666668 797.2,164.93333333333334 967,167 C 1136.8,169.06666666666666 1288.4,184.53333333333333 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#F4EEE8"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
      <ReactPlayer
        url={VideoFile}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        className="home_video"
      />
      <Button href="/course" className="home_video_button">
        DISCOVER MORE
      </Button>

      <div className="home_svg_bottom">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 125 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 185.2,173.46666666666667 370.4,146.93333333333334 544,153 C 717.6,159.06666666666666 879.5999999999999,197.73333333333332 1027,211 C 1174.4,224.26666666666668 1307.2,212.13333333333333 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#F4EEE8"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </>
  )
}
export default Video
