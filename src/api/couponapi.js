import WXRequest from '../utils/wxRequest';

/**
 * 分页获取用户兑换券
 * @param {*} username 
 * @param {*} currentPage 
 * @param {*} pageSize 
 */
function getUserVoucherList(username, currentPage, pageSize) {
    return new WXRequest().request(`/coupon-service/user/${username}/coupon/uservoucher?current_page=${currentPage}&page_size=${pageSize}`);
}

/**
 * 获取商品兑换券
 * @param {*} voucherId 
 */
function getGoodVoucher(voucherId) {
    return new WXRequest().request(`/coupon-service/coupon/goodvoucher/${voucherId}`);
}

/**
 * 获取兑换方式
 * @param {*} itemid 
 */
function getVoucherItem(itemid) {
    return new WXRequest().request(`/coupon-service/coupon/voucher_item/${itemid}`);
}

module.exports = {
    getUserVoucherList,
    getGoodVoucher,
    getVoucherItem
}