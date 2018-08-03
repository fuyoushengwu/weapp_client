import wepy from 'wepy';
import config from '../conf/config';
import GlobalData from '../conf/globalData';
import tip from './tip';

async function wxRequest(url, params = {}, showload = true) {
    if (showload) {
        tip.loading();
    }
    let headerValue = { 'Content-Type': 'application/json', 'Authorization': GlobalData.getJWTToken() };
    let res = await wepy.request({
        url: config.service.host + url,
        method: params.method || 'GET',
        data: params.data,
        header: headerValue
    });
    let response = res.data || {};
    if (response.code == 200 && params.onSuccess) {
        await params.onSuccess(response.data);
    }
    tip.loaded();
    return res;
}



module.exports = {
    wxRequest
}