import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import LoadIcon from './LoadIcon.js';
import firebase from 'firebase';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this));
            });
    }

    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        })
    }

    onAuthFailed() {
        this.setState({
            error: 'Sorry, The user name or password is incorrect.',
            loading: false
        })
    }

    renderLoader() {
        if (this.state.loading) { //in other terms 'if true'
            return <LoadIcon size="large" />
        }
        else {
            return <Button onPress={this.onButtonPress.bind(this)} style={{ justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#51A4C1', borderRadius: 0, borderWidth: 0 }} textStyle={{ fontSize: 18, color: 'white' }}>Login</Button>
        }
    }

    render() {
        const { container, logincomhldr, btninpt } = styles;
        return (
            <View style={styles.container}>
                <Image source={require('../img/buckler.png')} style={styles.backimg} />
                <View style={styles.main_logincomhldr}>
                    <View style={styles.logincomhldr}>
                        <Image source={require('../img/logo.png')} style={styles.logo} />
                        <View style={styles.inp_holder}>
                            <TextInput autoCapitalize={'none'} keyboardType={'email-address'} style={styles.inpt} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Email'} value={this.state.email} onChangeText={email => this.setState({ email })}/>
                            <TextInput secureTextEntry={true} style={styles.inpt} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Password'} value={this.state.password} onChangeText={password => this.setState({ password })}/>
                            <Text style={styles.error}>{this.state.error}</Text>
                            <View style={styles.btninpt}>
                                {this.renderLoader()}
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.legaltext}>Copyright © 2017 Kirusoft Dev. All rights reserved.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'center'
    },

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