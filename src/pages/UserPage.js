import React from 'react'
import { Outlet } from 'react-router'
import { Container, Row } from 'react-bootstrap'
import FilterPage from '../components/User/FilterPage'
import UserCard from '../components/User/UserCard'
import { useGetUserQuery } from '../services/userApi'
// import UserAccount from '../components/User/UserAccount'

const UserPage = () => {
  const userDataId = JSON.parse(localStorage.getItem('user'))?.user.id
  const { data } = useGetUserQuery(userDataId)
  // console.log('userDataId', userDataId)
  // console.log('DATA', data)
  return (
    <>
      {data?.map((item, v) => {
        return <FilterPage key={item.id} account={item.account} />
      })}
      <Container className="d-flex">
        {data?.map((item, v) => {
          return (
            <UserCard key={item.id} account={item.account} email={item.email} />
          )
        })}
        <Outlet />
      </Container>
    </>
  )
}

export default UserPage
