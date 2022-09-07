import ReactPlayer from 'react-player'
import VideoFile from '../../assets/video/handmade_movie_1280x500.mp4'
import './HomeVideo.scss'
import { Button } from 'react-bootstrap'

function Video() {
  return (
    <>
      <div className="home_svg_top">
        <svg
          id="svg"
          viewBox="0 130 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 152.93333333333334,174.13333333333333 305.8666666666667,148.26666666666668 445,146 C 584.1333333333333,143.73333333333332 709.4666666666667,165.06666666666666 873,178 C 1036.5333333333333,190.93333333333334 1238.2666666666667,195.46666666666667 1440,200 C 1440,200 1440,400 1440,400 Z"
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
      <Button className="home_video_button">DISCOVER MORE</Button>

      <div className="home_svg_bottom">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 130 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 121.46666666666664,240.13333333333335 242.93333333333328,280.2666666666667 416,273 C 589.0666666666667,265.7333333333333 813.7333333333333,211.06666666666666 993,191 C 1172.2666666666667,170.93333333333334 1306.1333333333332,185.46666666666667 1440,200 C 1440,200 1440,400 1440,400 Z"
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
