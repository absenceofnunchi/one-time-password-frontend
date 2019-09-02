import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

const ROOT_URL = 'https://us-central1-one-time-bb6dd.cloudfunctions.net'

const SignInForm = () => {
    const { phone, setPhone } = useState('')
    const { code, setCode } = useState('')

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post(`${ROOT_URL}/createUser`, { phone, code })
            firebase.auth().signInWithCustomToken(data.token)
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <>
        <View style={styles.input}>
            <Input 
                label="Enter Your Phone Number" 
                onChangeText={setPhone}
                value={phone}
            />
        </View>
        <View style={styles.input}>
            <Input 
                label="Enter Your Code" 
                onChangeText={setCode}
                value={code}
            />
        </View>
        <Button 
            title="Submit" 
            onPress={handleSubmit}
        />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10
    }
})

export default SignInForm