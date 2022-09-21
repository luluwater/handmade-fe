import React from 'react'
import UserAccount from '../components/User/UserAccount'
import { useGetUserQuery } from '../services/userApi'

const UserAccountPage = () => {
  const userDataId = JSON.parse(localStorage.getItem('user'))?.user.id
  const { data } = useGetUserQuery(userDataId)
  // console.log('DATA', data)
  return (
    <>
      {data?.map((item, v) => {
        return (
          <UserAccount
            key={item.id}
            id={item.id}
            account={item.account}
            name={item.name}
            email={item.email}
            phone={item.phone}
            birthday={item.birthday}
            address={item.address}
          />
        )
      })}
    </>
  )
}

export default UserAccountPage
