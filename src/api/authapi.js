import { wxRequest } from '../utils/wxRequest';


/**
 *  获取JWT
 * @param {*} jscode 
 * @param {*} nickname 
 * @param {*} avatar 
 * @param {*} gender 
 */
function getToken(jscode, nickname, avatar, gender) {
    let queryurl = '/user/token?';
    if (jscode) {
        queryurl += `jscode=${jscode}&`
    }
    if (nickname) {
        queryurl += `nickname=${nickname}&`;
    }
    if (avatar) {
        queryurl += `avatar=${avatar}&`
    }
    if (gender) {
        queryurl += `gender=${gender}`
    }
    return wxRequest(queryurl)
}

/**
 * 注册用户
 * @param {*} user 
 */
function registerUser(user) {
    return wxRequest('/user/register', {
        method: 'POST',
        data: user
    });
}

/**
 * 刷新用户jwt token
 * @param {*} token 
 */
function refreshToken(token) {
    return wxRequest('/user/token', { method: 'PUT' });
}
module.exports = {
    getToken,
    registerUser,
    refreshToken
}