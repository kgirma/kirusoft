import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const LoadIcon = ({ size }) => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles = StyleSheet.create({
loader:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
}
});

export default LoadIcon; //exports this on a call on a different script