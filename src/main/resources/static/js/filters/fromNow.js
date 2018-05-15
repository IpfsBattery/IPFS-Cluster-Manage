'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
    .filter('fromNow', function () {
        return function (date) {
            return moment(date).fromNow();
        }
    });
angular.module('app')
    .filter('glossery', function () {
        return function (input, type) {
            for (var key in glossery) {
                if (key == type) {
                    for (var item in glossery[key]) {
                        var valuePare = glossery[key][item];
                        if(valuePare.value==input){
                            return valuePare.name;
                        }
                    }
                }
            }
            return "";
        }
    });