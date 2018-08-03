import wepy from 'wepy';
import config from '../conf/config';
import GlobalData from '../conf/globalData';
import authapi from './authapi'
import userapi from './userapi'
import tip from '../utils/tip';

/**
 * 获取用户信息并存到storage中
 * @param {*} jscode 
 * @param {*} nickname 
 * @param {*} avatar 
 * @param {*} gender 
 */
async function getAndStorageUserInfo(jscode, nickname, avatar, gender) {
    let json = await authapi.getToken(jscode, nickname, avatar, gender);
    let response = json.data || {};
    if (response.code != 200) {
        tip.error('服务端执行失败')
        return;
    }
    let tokeResponse = response.data || {};
    GlobalData.setJWTToken("Bearer " + (tokeResponse.token || ''))
    let userid = tokeResponse.userid || '';
    json = await userapi.getUser(userid);
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