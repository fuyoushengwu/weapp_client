import { wxRequest } from '../utils/wxRequest';

/**
 * 分页查询条目下的商品
 * @param {*} classifyid 
 * @param {*} packFilter 
 * @param {*} levelFilter 
 * @param {*} orderType 
 * @param {*} orderValue 
 * @param {*} currentpage 
 * @param {*} pagesize 
 */
function getClassifyGoodList(classifyid, packFilter, levelFilter, orderType, orderValue, currentpage, pagesize) {
    let queryurl = `/classify/${classifyid}/good?`;
    if (packFilter) {
        packFilter.forEach(element => {
            queryurl += `packFilter=${element}&`
        });
    }
    if (levelFilter) {
        levelFilter.forEach(element => {
            queryurl += `levelFilter=${element}&`
        });
    }
    if (orderType) {
        queryurl += `orderType=${orderType}&`
    }
    if (orderValue) {
        queryurl += `orderType=${orderValue}&`
    }
    queryurl += `currentpage=${currentpage}&pagesize=${pagesize}`;
    return wxRequest(queryurl);
}

/**
 * 添加商品
 * @param {*} goodRequest 
 */
function createGood(goodRequest) {
    return wxRequest(`/good`, {
        method: 'POST',
        data: goodRequest
    });
}

/**
 * 获取商品信息
 * @param {*} goodid 
 */
function getGood(goodid) {
    return wxRequest(`/good/${goodid}`);
}


/**
 * 废弃商品
 * @param {*} goodid 
 */
function deprecateGood(goodid) {
    return wxRequest(`/good/${goodid}`, {
        method: 'DELETE'
    });
}

/**
 * 获取商品详细信息
 * @param {*} goodid 
 */
function getGoodDetail(goodid) {
    return wxRequest(`/good/${goodid}/detail`);
}

/**
 * 更新Good信息
 * @param {*} goodid 
 * @param {*} request 
 */
function updateGood(goodid, request) {
    return wxRequest(`/good/${goodid}`, {
        method: 'PUT',
        data: request
    });
}


module.exports = {
    getClassifyGoodList,
    createGood,
    getGood,
    deprecateGood,
    getGoodDetail,
    updateGood
}