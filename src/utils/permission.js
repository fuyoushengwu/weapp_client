export default class Permission {
    /**
     * 申请权限
     * @param {*} permission 
     */
    static requestPermission(permission = 'scope.userInfo') {

        return new Promise((resolve, reject) => {

            wx.getSetting({
                success(res) {
                    if (res.authSetting[permission]) {
                        resolve(true)
                    } else {
                        let authorized = false;
                        wx.authorize({
                            scope: permission,
                            success() {
                                resolve(true)
                            },
                            fail() {
                                resolve(false)
                            },
                            complete() {
                                authorized = true;
                            }
                        });

                        setTimeout(function() {
                            if (!authorized) {
                                wx.showModal({
                                    title: '权限申请',
                                    content: `小程序需要申请${Permission.scope[permission]}权限`,
                                    success: function(res) {
                                        if (res.confirm) {
                                            wx.openSetting({
                                                success(res) {
                                                    if (res.authSetting[permission]) {
                                                        resolve(true);
                                                    } else {
                                                        resolve(false);
                                                    }
                                                },
                                                fail() {
                                                    resolve(false);
                                                }
                                            });
                                        } else {
                                            resolve(false);
                                        }
                                    },
                                    fail() {
                                        resolve(false);
                                    }
                                });
                            } else {
                                resolve(false);
                            }
                        }, 1000);
                    }
                },
                fail() {
                    resolve(false);
                }
            });
        });
    }
}

Permission.scope = {
    'scope.userInfo': '用户信息',
    'scope.userLocation': '地理位置',
    'scope.address': '通讯地址',
    'scope.invoiceTitle': '发票抬头',
    'scope.werun': '微信运动步数',
    'scope.record': '录音功能',
    'scope.writePhotosAlbum': '保存到相册',
    'scope.camera': '摄像头'
}