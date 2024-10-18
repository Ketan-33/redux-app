import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import UserContext from './context/UserContext'

const Home = () => {
    const { userName } = useContext(UserContext)
    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <Button onPress={() => dispatch({ type: INCREMENT })} title='Increment' />
            <Button onPress={() => dispatch(decrement())} title='Decrement' /> */}
            <Text style={styles.text}> Hello {userName}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
})