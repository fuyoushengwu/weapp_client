import WXRequest from '../utils/wxRequest';

/**
 * 获得用户未读消息数量
 *
 * @param {*} username
 */
function getUserUnReadMessageCount(username) {
    return new WXRequest().request(`/user-service/user/${username}/message/unread/count`)
}

/**
 * 分页获取用户消息
 * 
 * @param {*} username
 * @param {*} currentPage
 * @param {*} pageSize
 */
function getUserMessageList(username, currentPage, pageSize) {
    return new WXRequest().request(`/user-service/user/${username}/message?current_page=${currentPage}&page_size=${pageSize}`)
}

module.exports = {
    getUserUnReadMessageCount,
    getUserMessageList
}