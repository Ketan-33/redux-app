import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}:{children:ReactNode}) => {
  return (
    <UserContext.Provider value={{}}>

    </UserContext.Provider>
  )
}

export default UserProvider

const styles = StyleSheet.create({})