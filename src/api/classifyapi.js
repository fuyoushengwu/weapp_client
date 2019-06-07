import WXRequest from '../utils/wxRequest';

/**
 * 获取所有顶层条目
 */
function getTopClassifyList() {
    return new WXRequest().request('/goods-service/classify');
}

/**
 * 获得条目下的所有子条目
 * @param {*} classifyId 
 */
function getSubClassifyList(classifyId) {
    return new WXRequest().request(`/goods-service/classify/${classifyId}/subclassify`);
}

module.exports = {
    getTopClassifyList,
    getSubClassifyList
}