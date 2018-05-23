import {AsyncStorage} from 'react-native'
import {CUSTOM_KEY} from '../../pages/CustomKeyPage'
import Keys from '../../../res/data/keys';
export default class LocalDataDao{
    fetch(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(CUSTOM_KEY, (error, result) => {
                if (error || !result) {
                    resolve(JSON.stringify(Keys));
                } else {
                    resolve(result);
                }
            });
        });
        // return new Promise((resolve, reject) => {
        //     AsyncStorage.getItem('custom_key', (error, result) => {
        //         if (error) {
        //             reject(error);
        //             return;
        //         }
        //         if (!result) {
        //             resolve(Keys);
        //         } else {
        //             try {
        //                 resolve(JSON.parse(result));
        //             } catch (e) {
        //                 reject(error);
        //             }
        //         }
        //     });
        // });
    }
}