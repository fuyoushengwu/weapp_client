import { wxRequest } from '../utils/wxRequest';


/**
 * 往用户购物车添加商品
 * @param {*} userid 
 * @param {*} requestBean 
 */
function addShopCartItem(userid, requestBean) {
    return wxRequest(`/user/${userid}/shopcart`, {
        method: 'POST',
        data: requestBean
    });
}

/**
 * 分页获取用户购物车中的项目
 * @param {*} userid 
 * @param {*} currentpage 
 * @param {*} pagesize 
 */
function getShopCartItemList(userid, currentpage, pagesize) {
    return wxRequest(`/user/${userid}/shopcart?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 全选/全不选用户购物车中的商品
 * @param {*} userid 
 * @param {*} ischecked 
 */
function checkAllShopCartItem(userid, ischecked) {
    return wxRequest(`/user/${userid}/shopcart/allcheck/${ischecked}`, { method: 'PUT' });
}

/**
 * 选中用户购物车下的某一项
 * @param {*} userid 
 * @param {*} shopcartid 
 * @param {*} ischecked 
 */
function checkShopCartItem(userid, shopcartid, ischecked) {
    return wxRequest(`/user/${userid}/shopcart/${shopcartid}/check/${ischecked}`, { method: 'PUT' });
}
/**
 * 删除用户购物车中的某项
 * @param {*} userid 
 * @param {*} shopcartid 
 */
function deleteShopCartItem(userid, shopcartid) {
    return wxRequest(`/user/${userid}/shopcart/${shopcartid}`, { method: 'DELETE' });
}

/**
 * 修改用户购物车中商品数量
 * @param {*} userid 
 * @param {*} shopcartid 
 * @param {*} count 
 */
function updateShopCartItemCount(userid, shopcartid, count) {
    return wxRequest(`/user/${userid}/shopcart/${shopcartid}/count/${count}`, { method: 'PUT' });
}

/**
 * 删除购物车中的商品(该方法在废弃商品的时候使用,所以只有Admin才能调用该方法)
 * @param {*} goodid 
 */
function deleteGood(goodid) {
    return wxRequest(`/shopcart/good/${goodid}`, { method: 'DELETE' });
}

module.exports = {
    addShopCartItem,
    getShopCartItemList,
    checkAllShopCartItem,
    checkShopCartItem,
    deleteShopCartItem,
    updateShopCartItemCount,
    deleteGood,
}