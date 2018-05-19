import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state={
            gift: ''
        }
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>I'm a boy of responsibility</Text>
            <Text style={styles.text} onPress={() => {
                this.props.navigation.navigate('Girl', {
                    gift: '一枝玫瑰',
                    name: 'Girl',
                    callBack:(gift)=>{
                        this.setState({
                            gift: gift
                        })
                    }
                })
            }}>I'll send a rose to a girl</Text>
            <Text style={styles.text}>哈哈，我收到了：{this.props.navigation.getParam('gift', '滚，没有')}，还有{this.state.gift}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    text: {
        fontSize: 22
    }
});