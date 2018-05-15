/**
 * Created by Actor on 2018/1/2.
 */
app.factory('ImageService', function ($http) {
    // 查看全部
    var list = function (postData) {
        return $http.post('/image/list' + convertParams(postData), null);
    };
    //
    // 新增
    var save = function (entity) {
        return $http({method: 'POST', url: '/image/save', params: entity});
    };
    // 根据ID查询
    var loadImageById = function (id) {
        return $http.post('/image/view?id=' + id, null);
    };
    // 根据ID删除
    var del = function (id) {
        return $http.post('/image/del?id=' + id, null);
    };
    return {
        list: function (postData) {
            return list(postData);
        },
        save: function (entity) {
            return save(entity);
        },
        loadImageById: function (id) {
            return loadImageById(id);
        },
        del: function (id) {
            return del(id);
        }
    }
});