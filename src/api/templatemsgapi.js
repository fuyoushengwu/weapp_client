import { wxRequest } from '../utils/wxRequest';

/**
 * 发送预定单所有商品已到货的消息(需要用户确认预订单是否发货)
 * 
 * @param {*} openid
 * @param {*} msgData
 */
function sendPreOrderMsg(openid, msgData) {
    return wxRequest(`/user/${openid}/wxservice/templatemsg/preorder`, {
        method: 'POST',
        data: msgData
    });
}

/**
 * 发送用户自取订单消息(订单已经准备好,可以自取)
 * 
 * @param {*} openid
 * @param {*} msgData
 */
function sendPickupMsg(openid, msgData) {
    return wxRequest(`/user/${openid}/wxservice/templatemsg/pickup`, {
        method: 'POST',
        data: msgData
    });
}

/**
 * 发送快递订单消息(订单已发货)
 * 
 * @param {*} openid
 * @param {*} msgData
 */
function sendThirdSendMsg(openid, msgData) {
    return wxRequest(`/user/${openid}/wxservice/templatemsg/thirdsend`, {
        method: 'POST',
        data: msgData
    })
}

/**
 * 发送送货上门订单消息(订单已发货)
 * 
 * @param {*} openid
 * @param {*} msgData
 */
function sendOwnSendMsg(openid, msgData) {
    return wxRequest(`/user/${openid}/wxservice/templatemsg/ownsend`, {
        method: 'POST',
        data: msgData
    });
}

/**
 * 发送订单超时消息(自取订单超时未取,则发送超时消息)
 * 
 * @param {*} openid
 * @param {*} msgData
 */
function sendOrderOverTimeMsg(openid, msgData) {
    return wxRequest(`/user/${openid}/wxservice/templatemsg/overtime`, {
        method: 'POST',
        data: msgData
    });
}

/**
 * 发送订单确认消息
 * 
 * @param {*} openid
 * @param {*} msgData
 */
function sendOrderConfirmMsg(openid, msgData) {
    return wxRequest(`/user/${openid}/wxservice/templatemsg/orderconfirm`, {
        method: 'POST',
        data: msgData
    });
}


module.exports = {
    sendPreOrderMsg,
    sendPickupMsg,
    sendThirdSendMsg,
    sendOwnSendMsg,
    sendOrderOverTimeMsg,
    sendOrderConfirmMsg
}