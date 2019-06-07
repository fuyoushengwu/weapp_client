import WXRequest from '../utils/wxRequest';

/**
 * 更新预览的商品项
 * @param {*} username 
 * @param {*} itemid 
 * @param {*} request 
 */
function updatePreviewOrderItem(username, itemid, request) {
    return new WXRequest().request(`/shoporder-service/user/${username}/previeworder/item/${itemid}`, {
        method: 'PUT',
        data: request
    });
}

/**
 * 删除预览的商品项
 * @param {*} username 
 * @param {*} itemid 
 */
function deletePreviewOrderItem(username, itemid) {
    return new WXRequest().request(`/shoporder-service/user/${username}/previeworder/item/${itemid}`, { method: 'DELETE' });
}

/**
 * 生成用户的预览订单
 * @param {*} username 
 * @param {*} goodIdList 
 */
function generatePreviewOrder(username, goodIdList) {
    let queryurl = `/shoporder-service/user/${username}/previeworder?`;
    if (goodIdList) {
        goodIdList.forEach(element => {
            queryurl += `good_id=${element}&`
        });
    }
    return new WXRequest().request(queryurl);
}
module.exports = {
    updatePreviewOrderItem,
    deletePreviewOrderItem,
    generatePreviewOrder,
}