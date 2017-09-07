/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
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
        return (
            <Login styles={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({

    btninpt: {
        width: 164.21,
        height: 42.21,
        marginTop: 37.8
    },

    backimg: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    main_logincomhldr: {
        margin: 15,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logincomhldr: {
        maxHeight: 302,
        width: 256,
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inp_holder: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 256,
        height: 184,
    },

    inpt: {
        marginBottom: 10.1,
        width: 256.21,
        height: 42.21,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 5
    },

    logo: {
        height: 29,
        width: 165,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EDEDED'
    },

    legaltext: {
        opacity: .6,
        fontSize: 12,
        textAlign: 'center',
        color: '#95989A',
        marginBottom: 5,
        backgroundColor: 'rgba(193, 66, 66, 0)'
    }

});