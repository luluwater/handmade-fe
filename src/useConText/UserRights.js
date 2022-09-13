import { createContext, useContext } from 'react'

export const UserRights = createContext()

export function useUserRights() {
  return useContext(UserRights)
}
