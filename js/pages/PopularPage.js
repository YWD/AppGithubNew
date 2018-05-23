import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, RefreshControl, Image, TouchableOpacity,DeviceEventEmitter} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import HttpUtil from '../utils/HttpUtil';
import AppHead from "../common/AppHead";
import LocalDataDao from "../expand/dao/LocalDataDao";
import LanguageDao,{FLAG_LANGUAGE} from '../expand/dao/LanguageDao'
export default class PopularPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keys: [],
        };
        this.localDataDao = new LocalDataDao();
        // this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.loadKeys();
        DeviceEventEmitter.addListener('popular_tab_key_change',()=>this.loadKeys())
    }

    loadKeys() {
        this.localDataDao.fetch().then(result => {
            this.setState({
                keys: JSON.parse(result)
            })
        });
    }

    render() {
        if (this.state.keys.length < 1) return null;
        return (<View style={styles.container}>
            <AppHead title={'热门'}/>
            <ScrollableTabView renderTabBar={() => <ScrollableTabBar/>}
                               tabBarActiveTextColor='white'
                               tabBarBackgroundColor='#2196f3'
                               tabBarInactiveTextColor='mintcream'
                               tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2, flex: 1}}
            >
                {/*<ProjectInfo tabLabel="java"/>*/}
                {/*<ProjectInfo tabLabel="java"/>
                <Text tabLabel="native">tab page 3</Text>
                <Text tabLabel="double text">tab page 2</Text>*/}
                {this.renderChildPage()}
            </ScrollableTabView>
        </View>);
    }

    renderChildPage() {
        if (this.state.keys.length < 1) return null;
        let views = [];
        for (let i = 0; i < this.state.keys.length; i++) {
            if (this.state.keys[i].checked) {
                views.push(<ProjectInfo tabLabel={this.state.keys[i].name} key={i}/>);
            }
        }
        return views;
    }
};

const REQUEST_URL = 'https://api.github.com/search/repositories?q=';
const REQUEST_SUFFIX = '&sort=stars';

class ProjectInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            data: {}
        }
    }

    componentWillMount() {
        this.onRefresh();
    }

    onRefresh() {
        HttpUtil.get(this.generateRequestUrl())
            .then((result) => {
                // console.log('ywd' + JSON.stringify(result));
                this.setState({
                    data: result,
                    refreshing: false
                })
            })
    }

    generateRequestUrl() {
        return REQUEST_URL + this.props.tabLabel + REQUEST_SUFFIX;
    }

    render() {
        return <FlatList style={styles.container}
                         data={this.state.data.items}
                         keyExtractor={this.keyExtractor}
                         renderItem={({item}) => {
                             if (item) {
                                 // console.log('ywd-> item.name:' + item.name);
                                 return this.renderItem(item);      // 箭头语法，函数有多条语句，最后一条语句必须加return
                             } else {
                                 return null;
                             }
                         }}
                         refreshControl={
                             <RefreshControl
                                 refreshing={this.state.refreshing}
                                 // onRefresh={this.onRefresh.bind(this)}   也可以
                                 onRefresh={() => this.onRefresh()}
                             />
                         }
        />;

    }

    keyExtractor = (item) => '' + item.id;  // string 类型，not a number

    renderItem(item) {
        return <TouchableOpacity style={styles.itemContainer}>
            <Text style={{fontSize: 18, color: 'black'}}>{item.full_name}</Text>
            <Text>{item.description}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}><Text>Author:</Text><Image
                    style={{width: 16, height: 16}} source={{uri: item.owner.avatar_url}}/></View>
                <Text>Stars:{item.stargazers_count}</Text>
                <Image style={{width: 22, height: 22}} source={require('../../res/images/ic_star.png')}/>
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 22,
        color: '#98FB98'
    },
    itemContainer: {
        paddingLeft: 10,
        paddingRight: 10,
    },
});