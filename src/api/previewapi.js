import { wxRequest } from '../utils/wxRequest';

/**
 * 更新预览的商品项
 * @param {*} userid 
 * @param {*} itemid 
 * @param {*} request 
 */
function updatePreviewOrderItem(userid, itemid, request) {
    return wxRequest(`/user/${userid}/previeworder/item/${itemid}`, {
        method: 'PUT',
        data: request
    });
}

/**
 * 删除预览的商品项
 * @param {*} userid 
 * @param {*} itemid 
 */
function deletePreviewOrderItem(userid, itemid) {
    return wxRequest(`/user/${userid}/previeworder/item/${itemid}`, { method: 'DELETE' });
}

/**
 * 生成用户的预览订单
 * @param {*} userid 
 * @param {*} goodids 
 */
function generatePreviewOrder(userid, goodids) {
    let queryurl = `/user/${userid}/previeworder?`;
    if (goodids) {
        goodids.forEach(element => {
            queryurl += `goodids=${element}&`
        });
    }
    return wxRequest(queryurl);
}
module.exports = {
    updatePreviewOrderItem,
    deletePreviewOrderItem,
    generatePreviewOrder,
}