/**
 * Created by shilun on 10/28/16.
 */
function bindPageType($location, $scope) {
    if ($location.search().id == null || $location.search().id == "") {
        $scope.operationType = "新增";
    }
    else {
        $scope.operationType = "修改";
    }
}

function getImgUrl(abstractPath){
    return "http://img."+root_domain+abstractPath;
}
