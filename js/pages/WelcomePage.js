import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class WelcomePage extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => this.props.navigation.navigate('Home'), 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return <View
            style={styles.container}>
            <Text style={styles.text}>Welcome to this page!</Text>
        </View>
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize:22,
        color: '#98FB98'
    }
});