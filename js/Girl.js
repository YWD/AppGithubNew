import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class Girl extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${        navigation.state.params.name    }'s Profile`,
        headerStyle: {
            backgroundColor: '#FFCCCC',
            height: 48,
            // justifyContent: 'space-between'
        },
        headerTitleStyle: {
            flex:1, //important
            color: '#990033',
            textAlign:'center',
            alignSelf:'center'
        },
        headerRight: <TouchableOpacity
            onPress={()=>{
                navigation.pop();
            }}
        >
            <Image style={{width:22,height:22}} source={require('../res/images/ic_star.png')}/>
        </TouchableOpacity>
    });

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>I'm a lively girl</Text>
            <Text style={styles.text}>我的礼物是：{this.props.navigation.getParam('gift', '没有礼物')}</Text>
            <Text style={styles.text} onPress={() => {
                this.props.navigation.navigate('Boy', {
                    gift: '巧克力要不啦'
                });
                this.props.navigation.state.params.callBack('礼物');
                this.props.navigation.pop()
            }}>送他巧克力吧</Text>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 22
    }
});