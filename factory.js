angular.module("quoteBook")
    .factory("localStorageService", function($http) {
        return {
            store: function(name, data) {
                localStorage.setItem(name, JSON.stringify(data));
                return 'saved';
            },

            get: function(name) {
                var item = localStorage.getItem(name);
                return JSON.parse(item);
            }
        };
    });