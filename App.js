/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {createStackNavigator} from 'react-navigation';

import Boy from './js/Boy';
import Girl from './js/Girl';
import FlatListTest from "./js/FlatListTest";

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'popular'}
                        selectedTitleStyle={{color: 'red'}}
                        title="Popular"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'popular'})}>
                        <View style={styles.page1}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'trending'}
                        title="Trending"
                        selectedTitleStyle={{color: 'yellow'}}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'trending'})}>
                        <View style={styles.page2}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selectedTitleStyle={{color: 'blue'}}
                        selected={this.state.selectedTab === 'favorite'}
                        title="Favorite"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                         source={require('./res/images/ic_favorite.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'favorite'})}>
                        <View style={styles.page3}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selectedTitleStyle={{color: 'green'}}
                        selected={this.state.selectedTab === 'mine'}
                        title="Mine"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'green'}]}
                                                         source={require('./res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'mine'})}>
                        <View style={styles.page4}/>
                    </TabNavigator.Item>
                </TabNavigator>*/}
                {/*<Pages/>*/}
                <FlatListTest/>
            </View>
        );
    }
}

const Pages = createStackNavigator(
    {
        Boy: {
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
        }
    },
    {
        initialRouteName: 'Boy',
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 22,
        height: 22
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page3: {
        flex: 1,
        backgroundColor: 'blue'
    },
    page4: {
        flex: 1,
        backgroundColor: 'green'
    }
});
