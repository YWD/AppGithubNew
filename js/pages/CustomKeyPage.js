import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, AsyncStorage,DeviceEventEmitter} from 'react-native';
import AppHead from "../common/AppHead";
import ViewUtil from '../utils/ViewUtil';
import Keys from '../../res/data/keys';
import CheckBox from 'react-native-check-box'

export const CUSTOM_KEY = 'custom_key';

export default class CustomKeyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
        this.getKeyData();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    //no UI
    componentWillMount() {
    }

    getKeyData() {
        try {   // 异步操作，返回值？，Promise对象用法
            AsyncStorage.getItem(CUSTOM_KEY).then((result, error) => {
                if (error || !result) {
                    this.setState({
                        datas: Keys
                    });
                    AsyncStorage.setItem(CUSTOM_KEY, JSON.stringify(this.state.datas));
                } else {
                    this.setState({
                        datas: JSON.parse(result)
                    });
                }
            });
        } catch (error) {
            // Error saving data
        }
    }

    renderKeys() {
        if (this.state.datas.length < 1) return;
        let keysData = this.state.datas;
        let views = [];
        for (let i = 0; i < keysData.length; i += 2) {
            let item;
            if (i === keysData.length - 1) {
                item = <View style={{flexDirection: 'row', flex: 1}} key={i / 2}>
                    {this.renderCheckBox(keysData[i])}
                </View>;
            } else {
                item = <View style={{flexDirection: 'row'}} key={i / 2}>
                    {this.renderCheckBox(keysData[i])}
                    {this.renderCheckBox(keysData[i + 1])}
                </View>;
            }
            views.push(item);
        }
        return views;
    }

    renderCheckBox(data) {
        if (data) {
            return <CheckBox
                style={{flex: 1, padding: 10,}}
                isChecked={data.checked}
                onClick={() => this.onClickCheckBox(data)}
                checkedImage={<Image source={require('../../res/images/ic_check_box.png')}/>}
                unCheckedImage={<Image source={require('../../res/images/ic_check_box_outline_blank.png')}/>}
                leftText={data.name}/>;
        } else {
            return <CheckBox
                style={{flex: 1, padding: 10, opacity, display: 'none'}}
                onClick={() => this.onClickCheckBox(data)}
                checkedImage={<Image source={require('../../res/images/ic_check_box.png')}/>}
                unCheckedImage={<Image source={require('../../res/images/ic_check_box_outline_blank.png')}/>}
                leftText={data.name}/>;
        }
    }

//leftView '()=>'没有，会有update error，函数会直接调用
    render() {
        return <View
            style={styles.container}>
            <AppHead title='Custom Key' leftView={ViewUtil.renderLeftBackView(() => this.onBackPress())}
                     rightView={ViewUtil.renderRightTextView('Save', () => {
                         this.onSave()
                     })}/>
            {this.renderKeys()}
            <Text style={{fontSize: 22}} onPress={() => this.clearData()}>清除数据</Text>
        </View>;
    }

    onBackPress() {
        this.props.navigation.pop();
    }

    onSave() {
        AsyncStorage.setItem(CUSTOM_KEY, JSON.stringify(this.state.datas));
        DeviceEventEmitter.emit('popular_tab_key_change');
    }

    onClickCheckBox(data) {
        for (let i = 0; i < this.state.datas.length; i++) {
            if (this.state.datas[i] === data) {
                this.state.datas[i].checked = !this.state.datas[i].checked
            }
        }
    }

    clearData() {
        AsyncStorage.clear();
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