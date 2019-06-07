import WXRequest from '../utils/wxRequest';


/**
 *  获取JWT
 * @param {*} appid 
 * @param {*} appsecret
 * @param {*} clientSecret 
 * @param {*} jscode 
 * @param {*} nickname 
 * @param {*} avatar 
 * @param {*} gender 
 */
function getToken(appid, appsecret, jscode, nickname, avatar, gender) {
    let queryurl = '/oauth/token?scope=read&scope=write&grant_type=jscode&';
    if (appid) {
        queryurl += `client_id=${appid}&`
    }
    if (appsecret) {
        queryurl += `client_secret=${appsecret}&`
    }
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
    return new WXRequest().request(queryurl, { method: 'POST' })
}

module.exports = {
    getToken
}