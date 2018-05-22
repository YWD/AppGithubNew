import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppHead from "../common/AppHead";
import CustomKeyPage from './CustomKeyPage';  // ‘./’不能省略
import {StackActions} from 'react-navigation';

export default class MinePage extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return <View
            style={styles.container}>
            <AppHead title='Mine'/>
            <Text style={styles.text} onPress={() =>
                /*{
                    // TabNavigator并没有navigate...相关内容，只是用栈的形式管理页面，navigate...相关内容是自己create的
                    // console.log('ywd->navigation.push:' + this.props.navigation.push);
                    console.log('ywd->navigation.navigate:' + this.props.navigation.navigate);
                                   // this.props.navigation.push({
                                   //      routeName:'CustomKeyPage',
                                   //      params: {...this.props},
                                   //  });

                    this.props.navigation.navigate({
                        routeName: 'CustomKeyPage',
                        params: {...this.props},
                    });
                }*/
                navigate({
                    routeName:'KeyPage',
                    params: {...this.props}
                })
            }>Welcome to mine page!</Text>
        </View>;
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 22,
        color: 'black'
    }
});