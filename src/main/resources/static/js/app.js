'use strict';
angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ng.ueditor',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'tm.pagination',
    'oc.lazyLoad',
    'pascalprecht.translate',
    'angularFileUpload'

]);

/**
 * 数据参数转换字符
 * @param parmas
 * @returns {string}
 */
function convertParams(parmas) {
    var paramsStr = "?";
    for (var k in parmas) {
        if (parmas[k] == undefined) {
            continue;
        }
        paramsStr = paramsStr + k + "=" + parmas[k] + "&";
    }
    return paramsStr;
}
/**
 * 数据页面大小
 * @type {number}
 */
var pageSize = 15;
