import React from 'react'
import UserAccount from '../components/User/UserAccount'
import { useGetUserQuery } from '../services/userApi'

const UserAccountPage = () => {
  const { data } = useGetUserQuery()
  console.log('DATA', data)
  return (
    <>
      {data?.map((item, v) => {
        return (
          <UserAccount
            key={item.id}
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
