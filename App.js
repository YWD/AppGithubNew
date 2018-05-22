/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import WelcomePage from './js/pages/WelcomePage';
import HomePage from './js/pages/HomePage';
import CustomKeyPage from "./js/pages/CustomKeyPage";

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Pages/>
           /* <View style={styles.container}>

            </View>*/
        );
    }

}

const MainStack = createStackNavigator(
    {
        Home:{
            screen: HomePage,
        },
        KeyPage:{   //要跳转的页面必须注册，我尼玛
            screen: CustomKeyPage,
        }
    },
    {
        headerMode: 'none',
    }
);

const Pages = createSwitchNavigator(
    {
        Welcome:{
            screen:WelcomePage,
        },
        Main:{
            screen:MainStack,
            // mode:'modal'     //may cause one navigator error, 可能是abandon目录里也有创建navigator吧
        }
        /*Boy: {
            screen: Boy,
            navigationOptions: {
                title: 'Boy',
                headerStyle: {
                    backgroundColor: '#FF9900',
                    height: 48,
                    // justifyContent: 'space-between'
                },
                headerTitleStyle: {
                    color: '#336699',
                    // alignSelf: 'center',    //无效
                    flex: 1,
                    textAlign: 'center',
                }
            }
        },
        Girl: {
            screen: Girl,
            // navigationOptions: ({navigation}) => ({
            //     title: `${navigation.state.params.name}'s Profile`,
            //     headerStyle: {
            //         backgroundColor: '#FFCCCC',
            //         height: 48,
            //         justifyContent: 'space-between'
            //     },
            //     headerTitleStyle: {
            //         color: '#990033',
            //         justifyContent: 'center'
            //     },
            //     headerRight: <TouchableOpacity
            //         onPress={() => {
            //             navigation.pop();
            //         }}
            //     >
            //         <Image source={require('./res/images/ic_star.png')}/>
            //     </TouchableOpacity>
            // })
        }*/
    },
    {
        initialRouteName: 'Main',
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
