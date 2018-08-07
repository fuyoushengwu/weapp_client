import { wxRequest } from '../utils/wxRequest';

/**
 * 分页获取在使用中的Store
 *
 * @param {*} currentpage
 *          当前页 默认值:1 (currentpage必须&ge;1,否则重置为1)
 * @param {*} pagesize
 *          每页大小 默认值:10(pagesize必须&gt;0,否则重置为1)
 */
function getInUseStoreList(currentpage, pagesize) {
    return wxRequest(`/store?currentpage=${currentpage}&pagesize=${pagesize}`);
}

/**
 * 创建门店
 * 
 * @param {*} storeRequest
 */
function createStore(storeRequest) {
    return wxRequest('store', { method: 'POST', data: storeRequest });
}

/**
 * 获取门店信息
 * 
 * @param {*} storeid
 */
function getStore(storeid) {
    return wxRequest(`/store/${storeid}`);
}

/**
 * 更新门店信息
 *
 * @param {*} storeid
 * @param {*} storeRequest
 */
function updateStore(storeid, storeRequest) {
    return wxRequest(`/store/${storeid}`, { method: 'PUT', data: storeRequest })
}


/**
 * 废弃门店
 *
 * @param {*} storeid
 */
function deprecateStore(storeid) {
    return wxRequest(`/store/${storeid}`, { method: 'DELETE' });
}

/**
 * 获取默认门店Id
 */
function getDefaultStoreId() {
    return wxRequest('/store/defaultid');
}

/**
 * 获取在哪些城市有门店分布
 */
function getStoresCity() {
    return wxRequest('/store/city');
}


module.exports = {
    getInUseStoreList,
    createStore,
    getStore,
    updateStore,
    deprecateStore,
    getDefaultStoreId,
    getStoresCity
}