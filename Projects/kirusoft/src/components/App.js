/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import firebase from 'firebase';
import Login from './Login.js';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDMJouxn24sv01QggcgRbDgj6GBM2kPvjs",
            authDomain: "kirusoft-app.firebaseapp.com",
            databaseURL: "https://kirusoft-app.firebaseio.com",
            projectId: "kirusoft-app",
            storageBucket: "",
            messagingSenderId: "217781255647"
        });
    }
    
    render() {
        return <Login/>
    }

    onRegister() {
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EDEDED'
    },
});