/**
 * Created by liang on 2018/5/3.
 */
'use strict';
app.controller('addImageCtrl', function ($rootScope, $stateParams,$scope, $location, $state, $filter, $modal, ImageService) {
    bindPageType($location, $scope);
    var id = $location.search().id;
    if(id != null) {
        ImageService.loadImageById(id).success(function (response) {
            $scope.entity = response.data;
            $scope.entity.updateTime = $filter('date')(response.data.updateTime, "yyyy-MM-dd HH:mm:ss");
        });
        $scope.save = function (entity) {
            ImageService.save(entity).success(function (response) {
                if(response.success) {
                    $state.go('app.image');
                } else {
                    alert(response.message);
                }
            });
        }
    } else {
        $scope.entity = {};
        $scope.save = function (entity) {
            ImageService.save(entity).success(function (response) {
                if(response.success) {
                    $state.go('app.image');
                } else {
                    alert(response.message);
                }
            });
        }
    }
    $scope.filename = function(ele){
        $scope.uploadFile();
    };
    /**
     * 固件文件上传
     */
    $scope.uploadFile = function () {
        var formData = new FormData();
        var fileInput = $('#file')[0].files[0];
        if(fileInput==null || fileInput.size==0){
            alert("上传文件不能为空");
        }else {
            formData.append('file', fileInput);
            $('#myModal').modal({backdrop: 'static', keyboard: false});
            $('#myModal').modal("show");
            $.ajax({
                url: "/image/update",
                type: "post",
                data: formData,
                processData: false,
                dataType: 'JSON',
                contentType: false,
                success: function (result) {
                    if (result.success) {
                        $scope.$apply(function () {
                            $scope.entity.hashValue = result.data;
                        })
                    }
                    else {
                        alert(result.message);
                    }
                    $('#myModal').modal('hide');
                },
                error: function (e) {
                    alert("上传失败" + e);
                    $('#myModal').modal('hide');
                }
            });
        }
    }

});