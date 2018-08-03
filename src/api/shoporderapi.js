import { wxRequest } from '../utils/wxRequest';

/**
 * 分页获取用户的订单信息
 * 
 * @param {*} userid
 * @param {*} status
 * @param {*} sendtype
 * @param {*} currentpage
 * @param {*} pagesize
 */
function getUserShopOrderList(userid, status, sendtype, currentpage, pagesize) {
    let queryurl = `/user/${userid}/shoporder`;
    if (status) {
        status.forEach(element => {
            queryurl += `status=${element}&`
        });
    }
    if (sendtype) {
        sendtype.forEach(element => {
            queryurl += `sendtype=${element}&`
        });
    }
    queryurl += `currentpage=${currentpage}&pagesize=${pagesize}`;
    return wxRequest(queryurl);
}

/**
 * 分页获取所有的订单信息
 * 
 * @param {*} status
 * @param {*} sendtype
 * @param {*} currentpage
 * @param {*} pagesize
 */
function getShopOrderList(status, sendtype, currentpage, pagesize) {
    let queryurl = '/shoporder';
    if (status) {
        status.forEach(element => {
            queryurl += `status=${element}&`
        });
    }
    if (sendtype) {
        sendtype.forEach(element => {
            queryurl += `sendtype=${element}&`
        });
    }
    queryurl += `currentpage=${currentpage}&pagesize=${pagesize}`;
    return wxRequest(queryurl);
}

/**
 * 更新订单
 * 
 * @param {*} shoporderid
 * @param {*} requestBean
 */
function updateShopOrderStatus(shoporderid, requestBean) {
    return wxRequest(`/shoporder/${shoporderid}/status`, { method: 'PUT', data: requestBean });
}

/**
 * 如果订单已经完成100天,可以删除(Admin和Sender都可以调用该方法)
 * 
 * @param {*} shoporderid
 */
function delete100DaysFinishedShopOrder(shoporderid) {
    return wxRequest(`/shoporder/${shoporderid}`, { method: 'DELETE' });
}

/**
 * 删除用户下的订单,该操作需要先判断该订单是否属于用户
 * 
 * @param {*} userid
 * @param {*} shoporderid
 */
function deleteUserShopOrder(userid, shoporderid) {
    return wxRequest(`/user/${userid}/shoporder/${shoporderid}`, { method: 'DELETE' });
}

/**
 * 确认订单结束,先要判断该订单是否属于用户
 * 
 * @param {*} userid
 * @param {*} shoporderid
 */
function confirmUserShopOrderFinished(userid, shoporderid) {
    return wxRequest(`/user/${userid}/shoporder/${shoporderid}/finisheorder`, { method: 'PUT' });
}

/**
 * 更新订单的收货地址,先要判断该订单是否属于用户
 * 
 * @param {*} userid
 * @param {*} shoporderid
 * @param {*} addressid
 */
function updateUserShopOrderRecieveAddress(userid, shoporderid, addressid) {
    return wxRequest(`/user/${userid}/shoporder/${shoporderid}/recieveaddress/${addressid}`, { method: 'PUT' });
}

/**
 * 分页获取已完成预约单
 * 
 * @param {*} currentpage
 * @param {*} pagesize
 */
function getFinishedPreOrderList(currentpage, pagesize) {
    return wxRequest(`/shoporder/preorder/finished?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 获取用户订单,先要判断订单是否属于用户
 * 
 * @param {*} userid
 * @param {*} shoporderid
 */
function getUserShopOrder(userid, shoporderid) {
    return wxRequest(`/user/${userid}/shoporder/${shoporderid}`);
}

/**
 * 创建用户订单
 * 
 * @param {*} userid
 * @param {*} requestBean
 */
function createUserShopOrder(userid, requestBean) {
    return wxRequest(`/user/${userid}/shoporder`, { method: 'POST', data: requestBean });
}

/**
 * 得到用户订单根据状态分类的数目
 * 
 * @param {*} userid
 */
function getUserShopOrderStatusCount(userid) {
    return wxRequest(`/user/${userid}/shoporder/statuscount`);
}

/**
 * 分页获取预定的商品信息
 * 
 * @param {*} currentpage
 * @param {*} pagesize
 */
function getPreOrderGoodList(currentpage, pagesize) {
    return wxRequest(`/shoporder/preordergoods?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 预定的商品到货,更新预约单
 * 
 * @param {*} goodid
 * @param {*} request
 */
function updatePreOrder(goodid, request) {
    return wxRequest(`/shoporder/preorder/good/${goodid}`, { method: 'PUT', data: request });
}
module.exports = {
    getUserShopOrderList,
    getShopOrderList,
    updateShopOrderStatus,
    delete100DaysFinishedShopOrder,
    deleteUserShopOrder,
    confirmUserShopOrderFinished,
    updateUserShopOrderRecieveAddress,
    getFinishedPreOrderList,
    getUserShopOrder,
    createUserShopOrder,
    getUserShopOrderStatusCount,
    getPreOrderGoodList,
    updatePreOrder
}