import wepy from 'wepy'
import { JWT_TOKEN, TOP_CLASSIFY_ID, SUB_CLASSIFY_ID, USER_INFO } from '../utils/constant'
export default class GlobalData {

    /**
     * 设置当前用户的JsonWebToken
     * @param {*} jwtToken 
     */
    static setJWTToken(jwtToken) {
        if (jwtToken) {
            GlobalData.jwtToken = jwtToken;
            wepy.setStorageSync(JWT_TOKEN, jwtToken);
        }
    }

    /**
     * 获取当前用户的JsonWebToken
     */
    static getJWTToken() {
        let result = GlobalData.jwtToken;
        if (!result) {
            result = wepy.getStorageSync(JWT_TOKEN);
            GlobalData.jwtToken = result;
        }
        return result;
    }

    /**
     * 清理当前用户的JsonWebToken
     */
    static clearJWTToken() {
        GlobalData.jwtToken = undefined;
        wepy.removeStorageSync(JWT_TOKEN);
    }

    /**
     * 更新用户的JsonWebToken
     */
    static async refreshJWTToken() {

    }

    /**
     * 设置用户正在使用中的顶层条目ID
     * @param {*} topclassifyid 
     */
    static setTopClassifyId(topclassifyid) {
        if (topclassifyid) {
            GlobalData.topclassifyid = topclassifyid;
            wx.setStorageSync(TOP_CLASSIFY_ID, topclassifyid)
        }
    }

    /**
     * 获取用户正在使用中的顶层条目ID
     */
    static getTopClassifyId() {
        let result = GlobalData.topclassifyid;
        if (!result) {
            result = wx.getStorageSync(TOP_CLASSIFY_ID);
            GlobalData.topclassifyid = result;
        }
        return result;
    }

    /**
     * 设置用户正在使用的子条目ID
     * @param {*} subclassifyid 
     */
    static setSubClassifyId(subclassifyid) {
        if (subclassifyid) {
            GlobalData.subclassifyid = subclassifyid;
            wx.setStorageSync(SUB_CLASSIFY_ID, subclassifyid)
        }
    }

    /**
     * 获取用户正在使用的子条目ID
     */
    static getSubClassifyId() {
        let result = GlobalData.subclassifyid;
        if (!result) {
            result = wx.getStorageSync(SUB_CLASSIFY_ID);
            GlobalData.subclassifyid = result;
        }
        return result;
    }

    /**
     * 设置用户信息
     * @param {*} userInfo 
     */
    static setUserInfo(userInfo) {
        if (userInfo) {
            GlobalData.userInfo = userInfo;
            wx.setStorageSync(USER_INFO, userInfo);
        }
    }


    /**
     * 获取用户信息
     */
    static getUserInfo() {
        let result = GlobalData.userInfo;
        if (!result) {
            result = wx.getStorageSync(USER_INFO);
        }
        if (!result) {
            wepy.switchTab({
                url: '/pages/info'
            })
            throw new Error("no user registed");
        }
        return result;
    }

    /**
     * 清理用户信息
     */
    static clearUserInfo() {
        GlobalData.userInfo = undefined;
        wepy.removeStorageSync(USER_INFO);
    }

    /**
     * 设置用户ID
     * @param {*} userid 
     */
    static setUserId(userid) {
        if (userid) {
            let userInfo = GlobalData.getUserInfo();
            userInfo.id = userid;
            GlobalData.setUserInfo(userInfo);
        }
    }

    /**
     * 获取用户ID
     */
    static getUserId() {
        let userInfo = GlobalData.getUserInfo();
        return userInfo.id;
    }


    /**
     * 设置用户名
     * @param {*} nickname 
     */
    static setNickName(nickname) {
        if (nickname) {
            let userInfo = GlobalData.getUserInfo();
            userInfo.nickname = nickname;
            GlobalData.setUserInfo(userInfo);
        }

    }

    /**
     * 获取用户名
     */
    static getNickName() {
        let userInfo = GlobalData.getUserInfo();
        return userInfo.nickname;
    }

    /**
     * 设置用户手机
     * @param {*} phone 
     */
    static setPhone(phone) {
        if (phone) {
            let userInfo = GlobalData.getUserInfo();
            userInfo.phone = phone;
            GlobalData.setUserInfo(userInfo);
        }

    }

    /**
     * 设置用户手机
     */
    static getPhone() {
        let userInfo = GlobalData.getUserInfo();
        return userInfo.phone;
    }

    /**
     * 设置购物车
     * @param {*} shopcartList 
     */
    static setShopCartList(shopcartList) {
        if (shopcartList) {
            GlobalData.shopcartList = shopcartList;
        }
    }

    /**
     * 获取购物车
     */
    static getShopCartList() {
        return GlobalData.shopcartList;
    }

    /**
     * 添加购物车
     * @param {*} shopcart 
     */
    static addShopCart(shopcart) {
        if (shopcart) {
            let exist = false;
            GlobalData.shopcartList.forEach(element => {
                if (element.id == shopcart.id) {
                    element.count = shopcart.count;
                    exist = true;
                }
            });
            if (!exist) {
                GlobalData.shopcartList.unshift(shopcart);
            }
        }
    }

    /**
     * 设置收货地址
     * @param {*} recieveAddressList 
     */
    static setRecieveAddressList(recieveAddressList) {
        if (recieveAddressList) {
            GlobalData.recieveAddressList = recieveAddressList;
            GlobalData.initRecieveAddressList = true;
        }
    }

    /**
     * 获取收货地址
     */
    static getRecieveAddressList() {
        return GlobalData.recieveAddressList;
    }

    /**
     * 添加收货地址
     * @param {*} recieveAddress 
     */
    static addRecieveAddress(recieveAddress) {
        if (recieveAddress) {
            GlobalData.recieveAddressList.unshift(recieveAddress);
        }
    }

    /**
     * 设置address_list界面上被选中的地址
     * @param {*} recieveAddress 
     */
    static setSelectedRecieveAddress(recieveAddress) {
        if (recieveAddress) {
            GlobalData.selectedRecieveAddress = recieveAddress;
        }
    }

    /**
     * 获取address_list界面上被选中的地址
     */
    static getSelectedRecieveAddress() {
        return GlobalData.selectedRecieveAddress;
    }

    /**
     * 清理address_list界面上被选中的地址
     */
    static clearSelectedRecieveAddress() {
        GlobalData.selectedRecieveAddress = undefined;
    }

    /**
     * 设置当前ShopOrder ID
     * @param {*} curShopOrderId 
     */
    static setCurShopOrderId(curShopOrderId) {
        if (curShopOrderId) {
            GlobalData.curShopOrderId = curShopOrderId;
        }
    }

    /**
     * 获取当前ShopOrder ID
     */
    static getCurShopOrderId() {
        return GlobalData.curShopOrderId;
    }

    /**
     * 清理当前ShopOrder ID
     */
    static clearCurShopOrderId() {
        GlobalData.curShopOrderId = undefined;
    }

}
GlobalData.jwtToken = undefined;
GlobalData.topclassifyid = undefined;
GlobalData.subclassifyid = undefined;
GlobalData.userInfo = undefined;
GlobalData.shopcartList = [];
GlobalData.recieveAddressList = [];
GlobalData.initRecieveAddressList = false;
GlobalData.selectedRecieveAddress = undefined;
GlobalData.curShopOrderId = undefined;