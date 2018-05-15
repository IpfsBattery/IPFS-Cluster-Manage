/**
 * 获取状态与性别的公共服务
 * @param type
 */
app.factory('CommonService', function ($http) {
    var buildGlossery = function (type) {
        return $http.get('/glossery/buildGlossery?type=' + type, null);
    };
    var common = function () {
        return $http.get('/glossery/common', null);
    };
    //修改密码
    var changePass = function (oldPwd, newPwd) {
        return $http({method: 'POST', url: '/app/resetPsw', params: {oldPwd: oldPwd, newPwd: newPwd}});
    };
    //获取登录的供应商信息
    var supplierAdmin = function () {
        return $http.get('/server/findUserAndSup', null);
    };
    //获取订单信息概要
    var orderProfile = function () {
        return $http.get('/order/orderProfile', null);
    };
    //退出登录
    var loginOut = function () {
        return $http.get('/app/loginOut', null);
    };

    return {
        common: function () {
            return common();
        },
        changePass: function (oldPwd, newPwd) {
            return changePass(oldPwd, newPwd);
        },
        supplierAdmin: function () {
            return supplierAdmin();
        },
        orderProfile:function () {
            return orderProfile();
        },
        loginOut:function () {
            return loginOut();
        },
        buildGlossery: function (type) {
            return buildGlossery(type)
        }
    };
});