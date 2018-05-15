/**
 * Created by lunsh on 2016/7/21.
 */
'use strict';
app.controller('headerCtrl', function ($scope, $modal, $state, CommonService) {
    $scope.showChangePass = function () {
        var timestamp = Date.parse(new Date());
        var modalInstance = $modal.open({
            templateUrl: '/tpl/model/changePassModal.html?v=' + timestamp,
            controller: 'changePassCtrl'
        });
    };


    $scope.loginOut = function () {
        CommonService.loginOut().success(function (response) {
            if (response.success) {
                window.location.reload();
            }
            else {
                alert(response.message);
            }
        });
    };

});

app.controller('changePassCtrl', function ($scope, $modal, $state, CommonService, $modalInstance) {
    //确认修改密码
    $scope.ok = function () {
        var cfnewpwd = $scope.confirmNewPwd;
        var oldPwd = $scope.oldPwd;
        var newPwd = $scope.newPwd;
        if (cfnewpwd != newPwd) {
            alert("两次新密码不一致");
            return false;
        }
        CommonService.changePass(oldPwd, newPwd).success(function (response) {
            if (response.success) {
                // $modalInstance.dismiss('cancel');
                CommonService.loginOut().success(function (response) {
                    if (response.success) {
                        window.location.reload();
                    }
                });
                // $state.go('/', {}, {reload: true});
            }
            else {
                alert(response.message);
            }
        });
    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

