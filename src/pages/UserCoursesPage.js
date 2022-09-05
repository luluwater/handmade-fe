import React from 'react'
import { Outlet } from 'react-router'
import { Container } from 'react-bootstrap'
import FilterPage from '../components/User/FilterPage'
import UserCard from '../components/User/UserCard'
import UserOrders from '../components/User/UserOrders'

const UserCoursesPage = () => {
  return (
    <>
      <FilterPage />
      <Container className="d-flex">
        <UserCard />
        <UserOrders />
      </Container>
      <Outlet />
    </>
  )
}

export default UserCoursesPage
