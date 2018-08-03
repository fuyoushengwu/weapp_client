import wepy from 'wepy'
import { JWT_TOKEN, STORE_ID, TOP_CLASSIFY_ID, SUB_CLASSIFY_ID, USER_INFO } from '../utils/constant'
import storeapi from '../api/storeapi'
import authapi from '../api/authapi'
import tip from '../utils/tip'
export default class GlobalData {

    static getJWTToken() {
        let result = GlobalData.jwtToken;
        if (!result) {
            result = wepy.getStorageSync(JWT_TOKEN);
        }
        // if (!result) {
        // let loginResponse = await wepy.login();
        // let json = await authapi.getToken(loginResponse.code);
        // let response = json.data || {};
        // if (response.code != 200) {
        // tip.error('服务端执行失败')
        // throw new Error('服务端执行失败');
        // }
        // let tokeResponse = response.data || {};
        // result = "Bearer " + (tokeResponse.token || '');
        // GlobalData.jwtToken = result;
        // wepy.setStorageSync(JWT_TOKEN, result);
        // }
        return result;
    }

    static setJWTToken(jwtToken) {
        if (jwtToken) {
            GlobalData.jwtToken = jwtToken;
            wepy.setStorageSync(JWT_TOKEN, jwtToken);
        }
    }

    static async refreshJWTToken() {

    }

    static async getStoreId() {
        if (GlobalData.storeid) {
            return GlobalData.storeid;
        }
        let storeid = wx.getStorageSync(STORE_ID);
        if (!storeid) {
            let json = await storeapi.getDefaultStoreId();
            let response = json.data || {};
            if (response.code == 200) {
                storeid = response.data.defaultId;
            }
        }
        if (!storeid) {
            return undefined;
        }
        GlobalData.setStoreId(storeid);
        return storeid;
    }

    static setStoreId(storeid) {
        if (storeid) {
            GlobalData.storeid = storeid;
            wx.setStorageSync(STORE_ID, storeid);
        }
    }
    static getTopClassifyId() {
        if (GlobalData.topclassifyid) {
            return GlobalData.topclassifyid;
        }
        let topclassifyid = wx.getStorageSync(TOP_CLASSIFY_ID);
        if (!topclassifyid) {
            topclassifyid = undefined;
        } else {
            GlobalData.setClassifyId(topclassifyid);
        }
        return topclassifyid;
    }

    static setTopClassifyId(topclassifyid) {
        if (topclassifyid) {
            GlobalData.topclassifyid = topclassifyid;
            wx.setStorageSync(TOP_CLASSIFY_ID, topclassifyid)
        }
    }

    static getSubClassifyId() {
        if (GlobalData.subclassifyid) {
            return GlobalData.subclassifyid;
        }
        let subclassifyid = wx.getStorageSync(SUB_CLASSIFY_ID);
        if (!subclassifyid) {
            subclassifyid = undefined;
        } else {
            GlobalData.setClassifyId(subclassifyid);
        }
        return subclassifyid;
    }

    static setSubClassifyId(subclassifyid) {
        if (subclassifyid) {
            GlobalData.subclassifyid = subclassifyid;
            wx.setStorageSync(SUB_CLASSIFY_ID, subclassifyid)
        }
    }

    static getUserInfo() {
        let result = GlobalData.userInfo;
        if (!result) {
            result = wx.getStorageSync(USER_INFO);
        }
        if (!result) {
            wepy.switchTab({
                url: '/pages/info'
            })
            throw "no user registed";
        }
        return result;
    }

    static setUserInfo(userInfo) {
        if (userInfo) {
            GlobalData.userInfo = userInfo;
            GlobalData.userid = userInfo.id;
            GlobalData.nickname = userInfo.nickname;
            GlobalData.phone = userInfo.phone;
            wx.setStorageSync(USER_INFO, userInfo);
        }
    }

    static getUserId() {
        let result = GlobalData.userid;
        if (!result) {
            let userInfo = GlobalData.getUserInfo();
            result = userInfo.id;
        }
        return result;

    }
    static setUserId(userid) {
        if (userid) {
            GlobalData.userid = userid;
        }
        let userInfo = GlobalData.getUserInfo();
        userInfo.id = userid;
    }

    static getNickName() {
        let result = GlobalData.nickname;
        if (!result) {
            let userInfo = GlobalData.getUserInfo();
            result = userInfo.nickname;
        }
        return result;
    }

    static setNickName(nickname) {
        if (nickname) {
            GlobalData.nickname = nickname;
        }
        let userInfo = GlobalData.getUserInfo();
        userInfo.nickname = nickname;
    }
    static getPhone() {
        let result = GlobalData.phone;
        if (!result) {
            let userInfo = GlobalData.getUserInfo();
            result = userInfo.phone;
        }
        return result;
    }

    static setPhone(phone) {
        if (phone) {
            GlobalData.phone = phone;
        }
        let userInfo = GlobalData.getUserInfo();
        userInfo.phone = phone;
    }

}
GlobalData.jwtToken = undefined;
GlobalData.storeid = undefined;
GlobalData.topclassifyid = undefined;
GlobalData.subclassifyid = undefined;
GlobalData.userInfo = undefined;
GlobalData.userid = undefined;
GlobalData.nickname = undefined;
GlobalData.phone = undefined;