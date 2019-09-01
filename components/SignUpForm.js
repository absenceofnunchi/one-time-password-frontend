import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

const SignUpForm = () => {
    return(
        <>
        <View style={styles.input}>
            <Input label="Enter Your Phone Number" />
        </View>
        <Button title="Submit" />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10
    }
})

export default SignUpForm