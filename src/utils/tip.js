/**
 * 提示与加载工具类
 */
export default class Tips {


    /**
     * 弹出提示框
     */
    static success(title, duration = 500) {
        setTimeout(() => {
            wx.showToast({
                title: title,
                icon: "success",
                mask: true,
                duration: duration
            });
        }, 300);
        if (duration > 0) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, duration);
            });
        }
    }


    /**
     * 错误提示框
     * @param {*} msg 
     */
    static error(msg = '错误') {
        wx.showModal({
            title: "错误",
            content: msg
        });
    }

    /**
     * 弹出确认窗口
     */
    static confirm(text, title = "提示") {
        return new Promise((resolve, reject) => {
            wx.showModal({
                title: title,
                content: text,
                showCancel: true,
                success: res => {
                    if (res.confirm) {
                        resolve();
                    } else if (res.cancel) {
                        reject();
                    }
                },
                fail: res => {
                    reject(res);
                }
            });
        });
    }

    /**
     * 弹出加载提示
     * @param {*} title 
     */
    static loading(title = "加载中") {
        if (Tips.isLoading) {
            return;
        }
        Tips.isLoading = true;
        wx.showLoading({
            title: title,
            mask: true
        });
    }

    /**
     * 加载完毕
     */
    static loaded() {
        if (Tips.isLoading) {
            Tips.isLoading = false;
            wx.hideLoading();
        }
    }

    /**
     * 警告框
     * @param {*} title 
     */
    static alert(title) {
        wx.showModal({
            title: "提示",
            content: title
        });

    }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;