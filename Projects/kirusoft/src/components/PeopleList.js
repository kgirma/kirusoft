
import React, { Component } from 'react';
import Button from 'apsl-react-native-button';

import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.usercomps}>
                <Image style={styles.usr_img} source={require('../img/user.png')} />
                <View style={styles.usr_txt}>
                    <Text style={styles.usr_txt_username}>Username</Text>
                    <Text style={styles.usr_txt_email}>email</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    usr_img: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    usr_txt: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10 //gap between the image and the text
    },

    usr_txt_username: {
        fontSize: 13,

    },

    usr_txt_email: {
        fontSize: 11,

    },

    usercomps: {
        flex: 1,
        flexDirection: 'row',
    }
});