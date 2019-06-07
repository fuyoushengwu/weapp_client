import WXRequest from '../utils/wxRequest';


/**
 * 往用户购物车添加商品
 * @param {*} username 
 * @param {*} requestBean 
 */
function addShopCartItem(username, requestBean) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shop_cart`, {
        method: 'POST',
        data: requestBean
    });
}

/**
 * 分页获取用户购物车中的项目
 * @param {*} username 
 * @param {*} currentPage 
 * @param {*} pageSize 
 */
function getShopCartItemList(username, currentPage, pageSize) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shop_cart?current_page=${currentPage}&page_size=${pageSize}`);
}

/**
 * 全选/全不选用户购物车中的商品
 * @param {*} username 
 * @param {*} checked 
 */
function checkAllShopCartItem(username, checked) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shop_cart/allcheck/${checked}`, { method: 'PUT' });
}

/**
 * 选中用户购物车下的某一项
 * @param {*} username 
 * @param {*} shopCartId 
 * @param {*} checked 
 */
function checkShopCartItem(username, shopCartId, checked) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shop_cart/${shopCartId}/check/${checked}`, { method: 'PUT' });
}
/**
 * 删除用户购物车中的某项
 * @param {*} username 
 * @param {*} shopCartId 
 */
function deleteShopCartItem(username, shopCartId) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shop_cart/${shopCartId}`, { method: 'DELETE' });
}

/**
 * 修改用户购物车中商品数量
 * @param {*} username 
 * @param {*} shopCartId 
 * @param {*} count 
 */
function updateShopCartItemCount(username, shopCartId, count) {
    return new WXRequest().request(`/shoporder-service/user/${username}/shop_cart/${shopCartId}/count/${count}`, { method: 'PUT' });
}

module.exports = {
    addShopCartItem,
    getShopCartItemList,
    checkAllShopCartItem,
    checkShopCartItem,
    deleteShopCartItem,
    updateShopCartItemCount
}