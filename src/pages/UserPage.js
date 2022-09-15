import React from 'react'
import { Outlet } from 'react-router'
import { Container } from 'react-bootstrap'
import FilterPage from '../components/User/FilterPage'
import UserCard from '../components/User/UserCard'
import { useGetUserQuery } from '../services/userApi'
// import UserAccount from '../components/User/UserAccount'

const UserPage = () => {
  const { data } = useGetUserQuery()
  // console.log('DATA', data)
  return (
    <>
      <FilterPage />
      <Container className="d-flex">
        {data?.map((item, v) => {
          return <UserCard key={item.id} name={item.name} email={item.email} />
        })}
        <Outlet />
      </Container>
    </>
  )
}

export default UserPage
