import wepy from 'wepy';
import config from '../conf/config';
import GlobalData from '../conf/globalData';
import tip from './tip';

function wxRequest(url, params = {}, showload = true) {
    let headerValue = {
        'Content-Type': 'application/json',
        'Authorization': GlobalData.getJWTToken()
    };
    if (showload) {
        tip.loading();
    }
    return wepy.request({
        url: config.service.host + url,
        method: params.method || 'GET',
        data: params.data,
        header: headerValue
    }).then(res => {
        tip.loaded();
        let response = res.data || {};
        if (response.code == 500 && response.msg == `User[${GlobalData.getUserId()}] not exist`) {
            GlobalData.clearUserInfo();
            GlobalData.clearJWTToken();
        }
        return res;
    }).catch(error => {
        tip.loaded();
        tip.error('操作执行超时');
    });;
}



module.exports = {
    wxRequest
}