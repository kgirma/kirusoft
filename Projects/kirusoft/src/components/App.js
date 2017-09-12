/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import firebase from 'firebase';
import Login from './Login.js';
//Redux stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/peopleReducer.js';
//..
import PeopleList from './PeopleList.js';
import LoadIcon from './LoadIcon.js';
import { StatusBar } from 'react-native';
import StatusBarBackground from './StatusBar.js'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

// creating a reducer store
const store = createStore(reducers);

export default class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyDMJouxn24sv01QggcgRbDgj6GBM2kPvjs",
            authDomain: "kirusoft-app.firebaseapp.com",
            databaseURL: "https://kirusoft-app.firebaseio.com",
            projectId: "kirusoft-app",
            storageBucket: "kirusoft-app.appspot.com",
            messagingSenderId: "217781255647"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    statusbarIos() {
        <StatusBarBackground style={{ backgroundColor: 'MidnightBlue' }} />
    }

    renderInitialView() {
        switch (this.state.loggedIn) {
            case true:
                return <PeopleList />;
            case false:
                return <Login />;
            default:
                return <LoadIcon size="large" />;
        }
    }




    render() {
        return (
            <Provider store={store}>
                {this.renderInitialView()}
            </Provider>
        )
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