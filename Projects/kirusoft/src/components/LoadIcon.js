import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const LoadIcon = ({ size }) => {
    return (
        <View style={styles.Loader}>
            <ActivityIndicator size={size || 'small'} />
        </View>
    )
}

const styles = StyleSheet.create({
Loader:{
    width: '100%',
    height: '100%'
}

});

export default LoadIcon; //exports this on a call on a different script