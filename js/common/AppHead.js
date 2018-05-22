import React, {Component} from 'react';
import {View, StyleSheet, Text, Platform, StatusBar} from 'react-native';
import PropTypes from 'prop-types';

const TILE_BAR_HEIGHT_IOS = 44;
const TILE_BAR_HEIGHT_ANDROID = 48;

export default class AppHead extends Component {

    static propTypes = {
        title: PropTypes.string,
        leftView: PropTypes.element,
        rightView: PropTypes.element,
        centerView: PropTypes.element
    };

    render() {
        let leftView = this.props.leftView ? this.props.leftView : <View/>;
        let rightView = this.props.rightView ? this.props.rightView : <View/>;
        let centerView = this.props.centerView ? this.props.centerView : <Text style={{justifyContent:'center', color:'white',fontSize:22}}>{this.props.title}</Text>;
        return <View>
            <StatusBar backgroundColor='#2196f3'/>
            <View style={styles.titleBar}>
                {leftView}
                {centerView}
                {rightView}
            </View>
        </View>

    }
};

const styles = StyleSheet.create({
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2196f3',
        height: Platform.OS==='ios' ? TILE_BAR_HEIGHT_IOS : TILE_BAR_HEIGHT_ANDROID,
    },
    text: {
        fontSize: 22,
        color: '#98FB98'
    }
});