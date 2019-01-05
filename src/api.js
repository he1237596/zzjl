var _api_root = 'https://www.zsjingling.com/eidolon-app/';
// var _api_root = 'http://zzjl.huashitech.net:8080/eidolon-app/';
// var _api_root = 'http://192.168.1.191:8080/eidolon-app/';
// var _api_root = "https://dj.huashitech.net/";
// var _api_root = 'http://192.168.1.99:8080/eidolon-app/';
var api = {
  // index: _api_root + "app/distributorGoods/getAdvert",
  index: {
    swiper: _api_root + "app/distributorGoods/getAdvert",
    cate: _api_root + "app/distributorGoods/getClassify",
    good_list: _api_root + "app/distributorGoods/getList",
    get_citys: _api_root + "app/useraddress/checkadd",
    getPlateList: _api_root + "app/distributorGoods/getPlateList"
  },
  default: {
    // login: _api_root +"app/user/wxlogin",
    login: _api_root + "app/user/wxlogin",
    store: _api_root + 'default/store',
    // index: _api_root + 'default/index',
    cat_list: _api_root + 'app/goodsCate/getOneCate',
    cate_list: _api_root + 'app/goodsCate/getCate',
    goodsDetail: _api_root + 'app/goodsCate/getDetail',
    district: _api_root + 'default/district',
    goods_attr_info: _api_root + "default/goods-attr-info",
    upload_image: _api_root + "upfile",
    goods_list: _api_root + "app/goods/selectGoods",
    goods_evaluate: _api_root + "app/goodsEvaluate/getList",
    add_favorite: _api_root + "app/goodsCate/collection",
    del_favorite: _api_root + "app/goodsCate/del",
    goods_price: _api_root + "app/goodsCate/getGoodsPrice",
    get_hot_search: _api_root + "app/goods/getHotGoods"
  },
  cart: {
    list: _api_root + 'app/shopCart/get',
    add_cart: _api_root + 'app/shopCart/insertShopCart',
    delete: _api_root + 'app/shopCart/del',
    update: _api_root + 'app/shopCart/updateShopCart'
  },
  passport: {
    get_code: _api_root + 'app/sms/send',
    login: _api_root + 'passport/login',
    on_login: _api_root + 'passport/on-login',
    register: _api_root + 'app/user/wxregister'
  },
  order: {
    // submit_preview: _api_root + 'order/submit-preview',
    temp_order: _api_root + 'app/order/getCreateDetail',
    submit: _api_root + 'app/order/CreateOrder',
    pay_data: _api_root + 'app/order/getOrderInfo',
    list: _api_root + 'app/order/getOrderList',
    revoke: _api_root + 'app/order/cancelOrder',
    confirm: _api_root + 'app/order/confirmReceipt',
    count_data: _api_root + 'order/count-data',
    detail: _api_root + 'app/order/getDetail',
    refund_preview: _api_root + 'order/refund-preview',
    refund: _api_root + 'order/refund',
    refund_detail: _api_root + 'order/refund-detail',
    express_detail: _api_root + 'app/order/getShipping',
    delete: _api_root + 'app/order/deleteOrder',
    evalute: _api_root + 'app/goodsEvaluate/comment',
    evalute_add: _api_root + 'app/goodsEvaluate/additionalComment',
    initiatingPayment: _api_root + 'app/order/initiatingPayment',
    pay_result: _api_root + 'app/order/getPaymentResults',
    pay_refund: _api_root + 'app/order/refundApp',//退款
  },
  salesAfter:{
    _refundList: _api_root + "/app/order/refundList",
    _refundDetails: _api_root + "/app/order/refundDetails",
    _refundCancel: _api_root + "/app/order/refundCancel",
    _refundUpdate: _api_root + "/app/order/updateRefund",
    _refundExpress: _api_root + "/app/order/refundExpress"
  },
  user: {
    address_list: _api_root + 'app/useraddress/getList',
    address_edit: _api_root + 'app/useraddress/update',
    address_insert: _api_root + 'app/useraddress/add',
    address_save: _api_root + 'app/useraddress/add',
    address_set_default: _api_root + 'app/useraddress/setUpDefaultAddress',
    address_delete: _api_root + 'app/useraddress/del',
    save_form_id: _api_root + "user/save-form-id",
    favorite_add: _api_root + "user/favorite-add",
    favorite_remove: _api_root + "user/favorite-remove",
    favorite_list: _api_root + "app/goodsCate/getList",
    upgrade: _api_root + "app/user/upgrade",
    vip_info: _api_root + "app/user/getUpgradeDetail",
    join_shop: _api_root + "app/user/joinShop",
    get_near_byshops: _api_root + "app/userShopInfo/getNearbyshops",
    logout: _api_root + "app/user/delOpenId"
    // vip_price: _api_root + "app/user/getUpgradeDetail"
  },
};
console.log(123);
export default api;