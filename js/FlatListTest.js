import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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
    //{
    //     key: '1',
    //     name: '赵四',
    //     title: '亚洲舞王'
    // },
    // {
    //     key: '2',
    //     name: '乾隆',
    //     title: '我是爸爸'
    // },
    // {
    //     key: '3',
    //     name: '孙中山',
    //     title: '国父'
    // },
    // {
    //     key: '4',
    //     name: '李煜',
    //     title: '帝王级人物'
    // },
    // {
    //     key: '5',
    //     name: '周海',
    //     title: '路人甲'
    // }
];
export default class FlatListTest extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <FlatList style={styles.container}
                         data={dataS}
                         keyExtractor={this.keyExtractor}
                         renderItem={({item}) => this.renderItem(item)}
                         ItemSeparatorComponent={() => {
                             return <View style={{height: 1, backgroundColor: 'black'}}/>
                         }}
        />;
    }

    keyExtractor = (item) => '' + item.id;  // string 类型，not a number

    renderItem(item) {
        return <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.title}</Text>
        </View>
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