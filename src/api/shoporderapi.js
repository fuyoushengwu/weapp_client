import WXRequest from '../utils/wxRequest';

/**
 * 获取用户购买商品时可以使用的兑换券
 * @param {*} username 
 * @param {*} goodIdList 
 */
function getUserShopOrderVoucherList(username, goodIdList) {
    let queryurl = `/shoporder-service/user/${username}/coupon/shoporder?`;
    if (goodIdList) {
        goodIdList.forEach(element => {
            queryurl += `good_id=${element}&`
        });
    }
    return new WXRequest().request(queryurl);
}

/**
 * 分页获取用户的订单信息
 * 
 * @param {*} username
 * @param {*} statusList
 * @param {*} sendTypeList
 * @param {*} currentPage
 * @param {*} pageSize
 */
function getUserShopOrderList(username, statusList, sendTypeList, currentPage, pageSize) {
    let queryurl = `/shoporder-service/user/${username}/shoporder?`;
    if (statusList) {
        statusList.forEach(element => {
            queryurl += `status=${element}&`
        });
    }
    if (sendTypeList) {
        sendTypeList.forEach(element => {
            queryurl += `send_type=${element}&`
        });
    }
    queryurl += `current_page=${currentPage}&page_size=${pageSize}`;
    return new WXRequest().request(queryurl);
}

/**
 * 删除用户下的订单,该操作需要先判断该订单是否属于用户
 * 
 * @param {*} username
 * @param {*} shopOrderId
 */
function deleteUserShopOrder(username, shopOrderId) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shoporder/${shopOrderId}`, { method: 'DELETE' });
}

/**
 * 确认订单结束,先要判断该订单是否属于用户
 * 
 * @param {*} username
 * @param {*} shopOrderId
 */
function confirmUserShopOrderFinished(username, shopOrderId) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shoporder/${shopOrderId}/finisheorder`, { method: 'PUT' });
}

/**
 * 更新订单的收货地址,先要判断该订单是否属于用户
 * 
 * @param {*} username
 * @param {*} shopOrderId
 * @param {*} addressId
 */
function updateUserShopOrderRecieveAddress(username, shopOrderId, addressId) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shoporder/${shopOrderId}/recieveaddress/${addressId}`, { method: 'PUT' });
}

/**
 * 获取用户订单,先要判断订单是否属于用户
 * 
 * @param {*} username
 * @param {*} shopOrderId
 */
function getUserShopOrder(username, shopOrderId) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shoporder/${shopOrderId}`);
}

/**
 * 创建用户订单
 * 
 * @param {*} username
 * @param {*} requestBean
 */
function createUserShopOrder(username, requestBean) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shoporder`, { method: 'POST', data: requestBean });
}

/**
 * 得到用户订单根据状态分类的数目
 * 
 * @param {*} username
 */
function getUserShopOrderStatusCount(username) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shoporder/statuscount`);
}

module.exports = {
    getUserShopOrderVoucherList,
    getUserShopOrderList,
    deleteUserShopOrder,
    confirmUserShopOrderFinished,
    updateUserShopOrderRecieveAddress,
    getUserShopOrder,
    createUserShopOrder,
    getUserShopOrderStatusCount
}