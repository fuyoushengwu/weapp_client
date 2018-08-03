import { wxRequest } from '../utils/wxRequest';

/**
 * 获得用户未读消息数量
 *
 * @param {*} userid
 */
function getUserUnReadMessageCount(userid) {
    return wxRequest(`/user/${userid}/message/unread/count`)
}

/**
 * 分页获取用户消息
 * 
 * @param {*} userid
 * @param {*} currentpage
 * @param {*} pagesize
 */
function getUserMessageList(userid, currentpage, pagesize) {
    return wxRequest(`/user/${userid}/message?currentpage=${currentpage}&pagesize=${pagesize}`)
}

/**
 * 为用户创建消息
 *
 * @param {*} userid
 * @param {*} message
 */
function createMessage(userid, message) {
    return wxRequest(`/user/${userid}/message`, {
        method: 'POST',
        data: message
    })
}

/**
 * 删除消息
 *
 * @param {*} userid
 * @param {*} messageid
 */
function deleteMessage(userid, messageid) {
    return wxRequest(`/user/${userid}/message/${messageid}`, { method: 'DELETE' })
}
module.exports = {
    getUserUnReadMessageCount,
    getUserMessageList,
    createMessage,
    deleteMessage,
}