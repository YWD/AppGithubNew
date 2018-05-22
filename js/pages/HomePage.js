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
// import TabNavigatorItem from 'react-native-tab-navigator';
// import {createStackNavigator} from 'react-navigation';
import Toast, {DURATION} from 'react-native-easy-toast';
import PopularPage from "./PopularPage";
import MinePage from "./MinePage";
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
                 <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'popular'}
                        selectedTitleStyle={{color: '#2196f3'}}
                        title="Popular"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#2196f3'}]}
                                                         source={require('../../res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({selectedTab: 'popular'})}>
                        <PopularPage style={styles.page1}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'trending'}
                        title="Trending"
                        selectedTitleStyle={{color: 'yellow'}}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'trending'})}>
                        <View style={styles.page2}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selectedTitleStyle={{color: 'blue'}}
                        selected={this.state.selectedTab === 'favorite'}
                        title="Favorite"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                         source={require('../../res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'favorite'})}>
                        <View style={styles.page3}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selectedTitleStyle={{color: 'green'}}
                        selected={this.state.selectedTab === 'mine'}
                        title="Mine"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'green'}]}
                                                         source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => {
                            // console.log('ywd->navigator' + this.props.navigator);
                            // console.log('ywd->navigation:' + this.props.navigation);
                            this.setState({selectedTab: 'mine'})
                        }}>
                        <MinePage {...this.props} style={styles.page4} />
                    </TabNavigator.Item>
                </TabNavigator>
                <Toast ref="toast"/>
            </View>
        );
    }

    showToast(message) {
        this.refs.toast.show(message);
    }
}

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
