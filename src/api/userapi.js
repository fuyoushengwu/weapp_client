import WXRequest from '../utils/wxRequest';

/**
 * 获取用户
 *
 *  @param {*} username
 */
function getUser(username) {
    if (username) {
        return new WXRequest().request(`/user-service/user/${username}`)
    }
    return new WXRequest().request(`/user-service/user/`);
}

/**
 * 更新用户信息
 * 
 * @param {*} username
 * @param {*} user
 */
function updateUser(username, user) {
    return new WXRequest().request(`/user-service/user/${username}`, {
        method: 'PUT',
        data: user
    })
}

/**
 * 获取用户收件地址
 *
 * @param {*} username
 */
function getUserRecieveAddressList(username) {
    return new WXRequest().request(`/user-service/user/${username}/recieveaddress`)
}

/**
 * 给用户添加收件地址
 * 
 * @param {*} username
 * @param {*} request
 */
function addUserRecieveAddress(username, request) {
    return new WXRequest().request(`/user-service/user/${username}/recieveaddress`, {
        method: 'POST',
        data: request
    })
}

/**
 * 更新收件地址信息
 * 
 * @param {*} username
 * @param {*} addressId
 * @param {*} request
 */
function updateRecieveAddress(username, addressId, request) {
    return new WXRequest().request(`/user-service/user/${username}/recieveaddress/${addressId}`, {
        method: 'PUT',
        data: request
    })
}

/**
 * 废弃收件地址
 * 
 * @param {*} username
 * @param {*} addressId
 */
function deprecateRecieveAddress(username, addressId) {
    return new WXRequest().request(`/user-service/user/${username}/recieveaddress/${addressId}`, { method: 'DELETE' })
}
module.exports = {
    getUser,
    updateUser,
    getUserRecieveAddressList,
    addUserRecieveAddress,
    updateRecieveAddress,
    deprecateRecieveAddress
}