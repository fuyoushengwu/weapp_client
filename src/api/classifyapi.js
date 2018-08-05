import { wxRequest } from '../utils/wxRequest';

/**
 * 获取门店下所有的顶层条目
 * @param {*} storeid 
 */
// function getStoreTopClassifyList(storeid) {
//     return wxRequest(`/store/${storeid}/classify`);
// }

/**
 * 获取所有顶层条目
 */
function getTopClassifyList() {
    return wxRequest('/classify');
}

/**
 * 获取某个条目
 * @param {*} classifyid 
 */
function getClassify(classifyid) {
    return wxRequest(`/classify/${classifyid}`);
}

/**
 * 废弃条目
 * @param {*} classifyid 
 */
function deleteClassify(classifyid) {
    return wxRequest(`/classify/${classifyid}`, { method: 'DELETE' });
}

/**
 * 创建顶层条目
 * @param {*} request 
 */
function createTopClassify(request) {
    return wxRequest('/classify', {
        method: 'POST',
        data: request
    });
}

/**
 * 获得条目下的所有子条目
 * @param {*} classifyid 
 */
function getSubClassifyList(classifyid) {
    return wxRequest(`/classify/${classifyid}/subclassify`);
}

/**
 * 创建子条目
 * @param {*} classifyid 
 * @param {*} classifyRequest 
 */
function createSubClassify(classifyid, classifyRequest) {
    return wxRequest(`/classify/${classifyid}/subclassify`, {
        method: 'POST',
        data: classifyRequest
    });
}

/**
 * 条目下添加商品
 * @param {*} classifyid 
 * @param {*} goodid 
 */
function addClassifyGood(classifyid, goodid) {
    return wxRequest(`/classify/${classifyid}/good/${goodid}`, {
        method: 'PUT'
    });
}

module.exports = {
    getTopClassifyList,
    getClassify,
    deleteClassify,
    createTopClassify,
    getSubClassifyList,
    createSubClassify,
    addClassifyGood
}