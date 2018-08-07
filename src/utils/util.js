import storeapi from '../api/storeapi';
import tip from './tip';

/**
 * 获取根据位置排序的门店信息
 */
async function getStoreOrderedByDistance() {
    let json = await storeapi.getInUseStoreList(1, 20);
    let response = json.data || {};
    if (response.code != 200) {
        tip.error("获取门店信息失败");
        return [];

    }
    let getStoreListResponse = response.data || {};
    let stores = getStoreListResponse.dataList;

    return new Promise((resolve, reject) => {
        wx.getLocation({
            type: 'gcj02',
            success: function(res) {
                stores.forEach((store, index) => {
                    let distance = getCircleDistance(
                        res.latitude,
                        res.longitude,
                        store.storeAddress.coordinate.latitude,
                        store.storeAddress.coordinate.longitude
                    );
                    if (distance > 1000) {
                        store.distance = (distance / 1000).toFixed(1) + ' km';
                    } else {
                        store.distance = distance.toFixed(1) + ' m';
                    }
                });
                resolve(stores);
            },
            fail: function() {
                resolve(stores);
            }
        });
    });

}


function getRad(d) {
    const PI = Math.PI;
    return d * PI / 180.0;
}

function getCircleDistance(lat1, lng1, lat2, lng2) {
    const EARTH_RADIUS = 6378137.0; // 单位M

    let f = getRad((lat1 + lat2) / 2);
    let g = getRad((lat1 - lat2) / 2);
    let l = getRad((lng1 - lng2) / 2);

    let sg = Math.sin(g);
    let sl = Math.sin(l);
    let sf = Math.sin(f);

    let s, c, w, r, d, h1, h2;
    let a = EARTH_RADIUS;
    let fl = 1 / 298.257;

    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;

    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;

    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * a;
    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;

    return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
}

module.exports = {
    getStoreOrderedByDistance
}