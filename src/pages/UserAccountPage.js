import React from 'react'
import { Outlet } from 'react-router'
import { Container } from 'react-bootstrap'
import FilterPage from '../components/User/FilterPage'
import UserCard from '../components/User/UserCard'
// import UserAccount from '../components/User/UserAccount'

const UserAccountPage = () => {
  return (
    <>
      <FilterPage />
      <Container className="d-flex">
        <UserCard />
        <Outlet />
      </Container>
    </>
  )
}

export default UserAccountPage
