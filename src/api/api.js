import GlobalData from '../conf/globalData';
import AuthAPI from './AuthAPI'
import config from '../conf/config';
import UserAPI from './UserAPI'
import tip from '../utils/tip';

/**
 * 获取用户信息并存到storage中
 * @param {*} jscode 
 * @param {*} nickname 
 * @param {*} avatar 
 * @param {*} gender 
 */
async function getAndStorageUserInfo(jscode, nickname, avatar, gender) {
    let json = await AuthAPI.getToken(config.appid, config.appsecret, jscode, nickname, avatar, gender);
    let response = json.data || {};
    if (!response.access_token) {
        tip.error('服务端执行失败')
        return;
    }
    GlobalData.setAccessToken("Bearer " + (response.access_token || ''));
    GlobalData.setRefreshToken(response.refresh_token || '');
    json = await UserAPI.getUser(response.username);
    response = json.data || {};
    if (response.code != 200) {
        tip.error('服务端执行失败')
        return;
    }
    GlobalData.setUserInfo(response.data);
    return response.data;
}

module.exports = {
    getAndStorageUserInfo
}