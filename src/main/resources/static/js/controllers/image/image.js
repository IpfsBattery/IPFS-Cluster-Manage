/**
 * Created by liang on 2018/5/3.
 */
'use strict';
app.controller('listImageCtrl', function ($scope, $location, $modal, CommonService, ImageService) {
    // 查询全部
    var loadImageListData = function () {
        var postData = {
            page: $scope.paginationConf.currentPage - 1,
            size: $scope.paginationConf.itemsPerPage,
            name: $scope.name,
            remark: $scope.remark,
            hashValue: $scope.hashValue,
            suffix: $scope.suffix
        };
        ImageService.list(postData).success(function (response) {
            $scope.paginationConf.totalItems = response.data.totalCount;
            $scope.listData = response.data.list;
        });
    };
    // 根据ID删除
    var deleteImageById = function (id) {
        ImageService.del(id).success(function (response) {
            if(response.success) {
                alert("删除成功");
                loadImageListData();
            } else {
                alert("删除失败");
            }
        });
    };
    // 配置分页参数
    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: pageSize
    };
    // 根据图片名称查询
    $scope.searchByName = function () {
        loadImageListData();
    };
    // 查看全部
    $scope.search = function () {
        $scope.name = [];
        loadImageListData();
    };
    // 根据I删除
    $scope.deleteImageById = function (id) {
        deleteImageById(id);
    };
    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', loadImageListData);
});