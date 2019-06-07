/**
 * 订单状态
 */
export default class ShopOrderStatus {
    construct(name, value) {
        this.name = name;
        this.value = value;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }
}

ShopOrderStatus.UNKNOW = new ShopOrderStatus("未知类型", 0);
ShopOrderStatus.PREORDER = new ShopOrderStatus("预定", 1);
ShopOrderStatus.UNSTART = new ShopOrderStatus("未开始", 2);
ShopOrderStatus.DOING = new ShopOrderStatus("进行中", 3);
ShopOrderStatus.FINISHED = new ShopOrderStatus("已完成", 4);
// 订单超时未取货就会变为超时的状态
ShopOrderStatus.OVERTIME = new ShopOrderStatus("超时", 5);
