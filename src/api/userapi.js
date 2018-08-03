import { wxRequest } from '../utils/wxRequest';

/**
 * 获取用户
 *
 *  @param {*} userid
 */
function getUser(userid) {
    return wxRequest(`/user/${userid}`)
}

/**
 * 更新用户信息
 * 
 * @param {*} userid
 * @param {*} user
 */
function updateUser(userid, user) {
    return wxRequest(`/user/${userid}`, {
        method: 'PUT',
        data: user
    })
}

/**
 * 获取用户收件地址
 *
 * @param {*} userid
 */
function getUserRecieveAddressList(userid) {
    return wxRequest(`/user/${userid}/recieveaddress`)
}

/**
 * 给用户添加收件地址
 * 
 * @param {*} userid
 * @param {*} request
 */
function addUserRecieveAddress(userid, request) {
    return wxRequest(`/user/${userid}/recieveaddress`, {
        method: 'POST',
        data: request
    })
}

/**
 * 获取收件地址
 *
 * @param {*} userid
 * @param {*} addressid
 */
function getRecieveAddress(userid, addressid) {
    return wxRequest(`/user/${userid}/recieveaddress/${addressid}`)
}

/**
 * 更新收件地址信息
 * 
 * @param {*} userid
 * @param {*} addressid
 * @param {*} request
 */
function updateRecieveAddress(userid, addressid, request) {
    return wxRequest(`/user/${userid}/recieveaddress/${addressid}`, {
        method: 'PUT',
        data: request
    })
}

/**
 * 废弃收件地址
 * 
 * @param {*} userid
 * @param {*} addressid
 */
function deprecateRecieveAddress(userid, addressid) {
    return wxRequest(`/user/${userid}/recieveaddress/${addressid}`, { method: 'DELETE' })
}
module.exports = {
    getUser,
    updateUser,
    getUserRecieveAddressList,
    addUserRecieveAddress,
    getRecieveAddress,
    updateRecieveAddress,
    deprecateRecieveAddress
}