import React, {Component} from 'react';
import {View, StyleSheet, Text, Image,AsyncStorage} from 'react-native';
import AppHead from "../common/AppHead";
import ViewUtil from '../utils/ViewUtil';
import Keys from '../../res/data/keys';
import CheckBox from 'react-native-check-box'

const CUSTOM_KEY = 'custom_key';

export default class CustomKeyPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    //no UI
    componentWillMount() {
    }

    getKeyData() {
        try {
            this.datas = AsyncStorage.getItem(CUSTOM_KEY).then(result => JSON.parse(result));
            if (this.datas) {
                return this.datas;
            } else {
                AsyncStorage.setItem(CUSTOM_KEY, JSON.stringify(Keys));
                this.datas = Keys;
                return this.datas;
            }
        } catch (error) {
            // Error saving data
        }
    }

    renderKeys() {
        let keysData = this.getKeyData();
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
                style={{flex: 1, padding: 10, }}
                isChecked={data.checked}
                onClick={() => this.onClickCheckBox(data)}
                checkedImage={<Image source={require('../../res/images/ic_check_box.png')}/>}
                unCheckedImage={<Image source={require('../../res/images/ic_check_box_outline_blank.png')}/>}
                leftText={data.name}/>;
        } else {
            return <CheckBox
                style={{flex: 1, padding: 10, opacity, display:'none'}}
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
            <Text style={{fontSize:22}} onPress={this.clearData()}>清除数据</Text>
        </View>;
    }

    onBackPress() {
        this.props.navigation.pop();
    }

    onSave() {
        try{
            AsyncStorage.setItem(CUSTOM_KEY, JSON.stringify(this.datas));
        } catch (e) {
        }
    }

    onClickCheckBox(data) {
        for(let i = 0; i < this.datas.length; i++){
            if (this.datas[i] === data) {
                this.datas[i].checked = !this.datas[i].checked
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