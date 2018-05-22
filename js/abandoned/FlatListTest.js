import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, RefreshControl} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

const dataS = [
    {
        key: '1',
        name: '赵四',
        title: '亚洲舞王'
    },
    {
        key: '2',
        name: '乾隆',
        title: '我是爸爸'
    },
    {
        key: '3',
        name: '孙中山',
        title: '国父'
    },
    {
        key: '4',
        name: '李煜',
        title: '帝王级人物'
    },
    {
        key: '5',
        name: '周海',
        title: '路人甲'
    }
];
export default class FlatListTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true
        };
    }

    componentDidMount() {
        this.onRefresh();
    }

    render() {
        return <FlatList style={styles.container}
                         data={dataS}
                         keyExtractor={this.keyExtractor}
                         renderItem={({item}) => this.renderItem(item)}
                         ItemSeparatorComponent={() => {
                             return <View style={{height: 1, backgroundColor: 'black'}}/>
                         }}
                         ListFooterComponent={() => {
                             return <Image
                                 style={{width: 500, height: 150}} // uri网络图片，require本地图片
                                 source={{uri: 'https://images.gr-assets.com/hostedimages/1406479536ra/10555627.gif'}}/>   // android不是gif，gradle配置fb animated-gif
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

    onRefresh() {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 2000)
    }

    keyExtractor = (item) => '' + item.id;  // string 类型，not a number

    renderItem(item) {
        return <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
                this.props.onItemClick(item.name);
                // this.refs.toast.show(item.name);     undefined is not an object
            }}
        >
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.title}</Text>
            {/*<Toast ref="toast"/>*/}
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemContainer: {
        paddingLeft: 15,
        height: 48
    },
    text: {
        fontSize: 18,
        color: 'black',
    }
});