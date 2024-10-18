import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import UserContext from './context/UserContext'

const index = () => {

    const { userName, setUserName } = useContext(UserContext)

    return (
        <View style={styles.container}>
            <StatusBar />
            <TextInput
                value={userName}
                onChangeText={(t) => setUserName?.(t)}
                style={styles.input}
            />
            <Button onPress={() => router.push("/home")} title='Go to home' />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 10,
        paddingHorizontal: 8,
        width: "80%",
        marginBottom: 16,
        borderRadius: 4,
        backgroundColor: "#fff"
    }
})