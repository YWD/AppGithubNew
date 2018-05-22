import React from 'react'
import {TouchableOpacity, Image,Text} from 'react-native'

export default class ViewUtil {
    static renderLeftBackView(onPress) {
        return <TouchableOpacity
            style={{padding:10}}
            onPress={onPress}>
            <Image style={{width: 25, height: 25,}}
                   source={require('../../res/images/ic_arrow_back_white_36pt.png')}
            />
        </TouchableOpacity>;
    }
    static renderRightTextView(text,onPress) {
        return <Text style={{color:'white', padding:10,fontSize:16}} onPress={onPress}>{text}</Text>
    }
}