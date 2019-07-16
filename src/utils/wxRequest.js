import wepy from 'wepy';
import config from '../conf/config';
import GlobalData from '../conf/globalData';
import tip from './tip';
export default class WXRequest {
    request(url, params = {}, showload = true, tryagain = false) {
        let headerValue = {
            'Content-Type': 'application/json'
        };
        if (GlobalData.getAccessToken()) {
            headerValue['Authorization'] = GlobalData.getAccessToken()
        }
        if (showload) {
            tip.loading();
        }
        let that = this;
        return new Promise((resolve, reject) => {
            wepy.request({
                url: config.service.host + url,
                method: params.method || 'GET',
                data: params.data,
                header: headerValue
            }).then(res => {
                tip.loaded();
                let response = res.data || {};
                if (response.code == 500 && response.msg == `User[${GlobalData.getUsername()}] not exist`) {
                    GlobalData.clearUserInfo();
                    GlobalData.clearAccessToken();
                    reject(response.msg);
                    return;
                } else if (res.statusCode == 401 && (response.error_description || '').startsWith('Access token expired')) {
                    if (tryagain) {
                        reject('Access Token expired and retry failed');
                        return;
                    }
                    let appid = config.appid;
                    let appsecret = config.appsecret;
                    let refreshToken = GlobalData.getRefreshToken();
                    wepy.request({
                        url: config.service.host + `/oauth/token?scope=read&scope=write&client_id=${appid}&client_secret=${appsecret}&grant_type=refresh_token&refresh_token=${refreshToken}`,
                        method: 'POST',
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        if (res.statusCode != 200) {
                            GlobalData.clearUser();
                            reject('Access Token expired and refresh failed');
                            tip.confirm('您有一个月未登陆了,需要重新登陆').then(res => {
                                wepy.switchTab({
                                    url: '/pages/info'
                                })
                            });
                            return;
                        }
                        let response = res.data || {};
                        GlobalData.setAccessToken("Bearer " + (response.access_token || ''));
                        GlobalData.setRefreshToken(response.refresh_token || '');
                        that.request(url, params, showload, true).then(res => {
                            resolve(res);
                        }).catch(error => {
                            reject(error)
                        });
                    })

                } else {
                    resolve(res);
                }
            }).catch(error => {
                tip.loaded();
                tip.error('操作执行超时');
                reject(error);
            });
        });
    }
}