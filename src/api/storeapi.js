import WXRequest from '../utils/wxRequest';

/**
 * 分页获取在使用中的Store
 *
 * @param {*} currentPage
 *          当前页 默认值:1 (currentPage必须&ge;1,否则重置为1)
 * @param {*} pageSize
 *          每页大小 默认值:10(pageSize必须&gt;0,否则重置为1)
 */
function getInUseStoreList(currentPage, pageSize) {
    return new WXRequest().request(`/goods-service/store?current_page=${currentPage}&page_size=${pageSize}`);
}

/**
 * 获取门店信息
 * 
 * @param {*} storeId
 */
function getStore(storeId) {
    return new WXRequest().request(`/goods-service/store/${storeId}`);
}

/**
 * 获取在哪些城市有门店分布
 */
function getStoresCity() {
    return new WXRequest().request('/goods-service/store/city');
}


module.exports = {
    getInUseStoreList,
    getStore,
    getStoresCity
}