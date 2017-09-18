import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import {connect} from 'react-redux';
import PersonItem from './PersonItem'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    ListView,
    Platform //for platform specific styling
} from 'react-native';

const mapStateToProps = state => {
    return {people: state.people};
}

class PeopleList extends Component {

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.props.people);
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                enableEmptySections={true}
                dataSource={this.dataSource}
                renderRow=  { (rowData) => <PersonItem people={rowData}/> }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 20: 0, //first is for IOS the second if for android
        minHeight: 55,
        width: '100%',
        padding: 5,
        marginBottom: 5,
        //backgroundColor: 'cornflowerblue'
    }
});


export default connect(mapStateToProps)(PeopleList);