import wepy from 'wepy'
import { JWT_TOKEN, TOP_CLASSIFY_ID, SUB_CLASSIFY_ID, USER_INFO } from '../utils/constant'
export default class GlobalData {

    static getJWTToken() {
        let result = GlobalData.jwtToken;
        if (!result) {
            result = wepy.getStorageSync(JWT_TOKEN);
        }
        return result;
    }

    static setJWTToken(jwtToken) {
        if (jwtToken) {
            GlobalData.jwtToken = jwtToken;
            wepy.setStorageSync(JWT_TOKEN, jwtToken);
        }
    }

    static clearJWTToken() {
        GlobalData.jwtToken = undefined;
        wepy.removeStorageSync(JWT_TOKEN);
    }

    static async refreshJWTToken() {

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
    static clearUserInfo() {
        GlobalData.userInfo = undefined;
        GlobalData.userid = undefined;
        GlobalData.nickname = undefined;
        GlobalData.phone = undefined;
        wepy.removeStorageSync(USER_INFO);
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
GlobalData.topclassifyid = undefined;
GlobalData.subclassifyid = undefined;
GlobalData.userInfo = undefined;
GlobalData.userid = undefined;
GlobalData.nickname = undefined;
GlobalData.phone = undefined;