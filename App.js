import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'

import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

export default function App() {

  useEffect(() => {
    var firebaseConfig = {
        apiKey: "AIzaSyDYgmdn3snK7a680CVUf8fzKyPbWRYZ7SA",
        authDomain: "one-time-bb6dd.firebaseapp.com",
        databaseURL: "https://one-time-bb6dd.firebaseio.com",
        projectId: "one-time-bb6dd",
        storageBucket: "",
        messagingSenderId: "617157332546",
        appId: "1:617157332546:web:b3767c0a060625e2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  })
  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
