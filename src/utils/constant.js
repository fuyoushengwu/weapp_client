/**
 * 用户信息
 */
export const USER_INFO = "userInfo";

/**
 * 系统信息
 */
export const SYSTEM_INFO = "systemInfo";
/**
 * storage中保存当前jwt token的Key
 */
export const JWT_TOKEN = "jwt_token";

/**
 * storage中保存当前StoreId的Key
 */
export const STORE_ID = "store_id";

/**
 * storage中保存当前顶层classify_id的key
 */
export const TOP_CLASSIFY_ID = "top_classify_id";
/**
 * storage中保存第二层classifyId的key
 */
export const SUB_CLASSIFY_ID = "sub_classify_id";

/**
 * storage中保存当前地址信息的Key
 */
export const ADDRESS = "address";

/**
 *  storage中保存权限请求结果的key
 */
export const INFO_REQUEST_PERMISSION = "info_request_permission"

/**
 * storage中存储订单配送方式的Key
 */
export const ORDER_SENDTYPE = "order_sendtype";

/**
 * storage中存储当前订单号的key
 */
export const SHOPORDER_ID = "SHOPORDER_ID";


/**
 * 配送方式:到店自取
 */
export const SENDTYPE_PICKUP = "0";

/**
 * 配送方式:送货上门
 */
export const SENDTYPE_OWNSEND = "1";

/**
 * 配送方式:快递
 */
export const SENDTYPE_THIRDSEND = "2";

/**
 * 配送方式:未知
 */
export const SENDTYPE_UNKNOW = "-1";


/**
 * 订单状态:未知
 */
export const ORDERSTATUS_UNKNOW = "-1";

/**
 * 订单状态:预订
 */
export const ORDERSTATUS_PREORDER = "0";
/**
 * 订单状态:未开始
 */
export const ORDERSTATUS_UNSTART = "1";

/**
 * 订单状态:进行中
 */
export const ORDERSTATUS_DOING = "2";

/**
 * 订单状态:已完成
 */
export const ORDERSTATUS_FINISHED = "3";
/**
 * 订单状态:超时
 */
export const ORDERSTATUS_OVERTIME = "4";