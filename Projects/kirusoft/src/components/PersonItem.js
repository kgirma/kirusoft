
import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    ListView
} from 'react-native';
import * as actions from '../actions';


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
        padding: 5,
        flex: 1,
        flexDirection: 'row',
    }
});

const PersonItem = (props) => {
    return (
        <View style={styles.usercomps}>
            <Image style={styles.usr_img} source={require('../img/user.png')} />
            <View style={styles.usr_txt}>
                <Text style={styles.usr_txt_username}>{props.people.first_name} {props.people.last_name}</Text>
                <Text style={styles.usr_txt_email}>{props.people.email}</Text>
            </View>
        </View>
    );
};


export default connect(null, actions)(PersonItem);
