import WXRequest from '../utils/wxRequest';

/**
 * 分页查询条目下的商品
 * @param {*} classifyId 
 * @param {*} packFilter 
 * @param {*} levelFilter 
 * @param {*} orderType 
 * @param {*} orderValue 
 * @param {*} currentPage 
 * @param {*} pageSize 
 */
function getClassifyGoodList(classifyId, packFilter, levelFilter, orderType, orderValue, currentPage, pageSize) {
    let queryurl = `/goods-service/classify/${classifyId}/good?`;
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
    queryurl += `current_page=${currentPage}&page_size=${pageSize}`;
    return new WXRequest().request(queryurl);
}

/**
 * 获取商品信息
 * @param {*} goodId 
 */
function getGood(goodId) {
    return new WXRequest().request(`/goods-service/good/${goodId}`);
}

/**
 * 获取商品信息
 * @param {*} goodIdList 
 */
function getGoodList(goodIdList) {
    let queryUrl = `/goods-service/good?`;
    goodIdList.forEach(element => {
        queryUrl += `good_id=${element}&`;
    });
    return new WXRequest().request(queryUrl);
}


/**
 * 获取商品详细信息
 * @param {*} goodId 
 */
function getGoodDetail(goodId) {
    return new WXRequest().request(`/goods-service/good/${goodId}/detail`);
}


module.exports = {
    getClassifyGoodList,
    getGood,
    getGoodList,
    getGoodDetail
}