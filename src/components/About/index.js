// import AboutBanner from './AboutBanner'
// import AboutDetails from './AboutDetails'
import FilterPage from './FilterPage'
import UserCard from './UserCard'
import UserAccount from './UserAccount'
import { Row, Col, Container } from 'react-bootstrap'
import UserPassword from './UserPassword'

const About = () => {
  return (
    <>
      {/* <AboutBanner /> */}
      <FilterPage />
      <Container className="d-flex">
        <UserCard />
        <UserAccount />
      </Container>
      {/* <AboutDetails /> */}
    </>
  )
}

export default About
