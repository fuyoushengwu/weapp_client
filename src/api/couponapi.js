import { wxRequest } from '../utils/wxRequest';

/**
 * 分页获取用户兑换券
 * @param {*} userid 
 * @param {*} currentpage 
 * @param {*} pagesize 
 */
function getUserVoucherList(userid, currentpage, pagesize) {
    return wxRequest(`/user/${userid}/coupon/uservoucher?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 获取用户购买商品时可以使用的兑换券
 * @param {*} userid 
 * @param {*} goodids 
 */
function getUserShopOrderVoucherList(userid, goodids) {
    let queryurl = `/user/${userid}/coupon/shoporder?`;
    if (goodids) {
        goodids.forEach(element => {
            queryurl += `goodids=${element}&`
        });
    }
    return wxRequest(queryurl);
}

/**
 * 分页获取商品兑换券
 * @param {*} currentpage 
 * @param {*} pagesize 
 */
function getGoodVoucherList(currentpage, pagesize) {
    return wxRequest(`/coupon/goodvoucher?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 获取商品兑换券
 * @param {*} voucherid 
 */
function getGoodVoucher(voucherid) {
    return wxRequest(`/coupon/goodvoucher/${voucherid}`);
}

/**
 * 创建商品兑换券
 * @param {*} request 
 */
function createGoodVoucher(request) {
    return wxRequest(`/coupon/goodvoucher`, {
        method: 'POST',
        data: request
    });
}

/**
 * 废弃商品兑换券
 * @param {*} voucherid 
 */
function deprecateGoodVoucher(voucherid) {
    return wxRequest(`/coupon/goodvoucher/${voucherid}`, { method: 'DELETE' });
}

/**
 * 分页获取可用的兑换方式
 * @param {*} currentpage 
 * @param {*} pagesize 
 */
function getVoucherItemList(currentpage, pagesize) {
    return wxRequest(`/coupon/voucheritem?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 获取兑换方式
 * @param {*} itemid 
 */
function getVoucherItem(itemid) {
    return wxRequest(`/coupon/voucheritem/${itemid}`);
}

/**
 * 创建兑换方式
 * @param {*} request 
 */
function createVoucherItem(request) {
    return wxRequest(`/coupon/voucheritem`, {
        method: 'POST',
        data: request
    });
}

/**
 * 废弃兑换方式
 * @param {*} itemid 
 */
function deprecateVoucherItem(itemid) {
    return wxRequest(`/coupon/voucheritem/${itemid}`, { method: 'DELETE' });
}
module.exports = {
    getUserVoucherList,
    getUserShopOrderVoucherList,
    getGoodVoucherList,
    getGoodVoucher,
    createGoodVoucher,
    deprecateGoodVoucher,
    getVoucherItemList,
    getVoucherItem,
    createVoucherItem,
    deprecateVoucherItem,
}