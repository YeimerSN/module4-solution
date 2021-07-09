(function(){
    'use strict';
    angular.module('data')
    .constant('RestaurantApi', " https://davids-restaurant.herokuapp.com")
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'RestaurantApi'];
    function MenuDataService($http, RestaurantApi){
        var service = this;

        service.getAllCategories = function(){
            return $http({
                method: "GET",
                url: (RestaurantApi + "/categories.json")
            })
            .then(function(response){
                return response.data;
            });
        };

        service.getItemsForCategory = function(categoryShortName){
            return $http({
                method: "GET",
                url: (RestaurantApi + "/menu_items.json?category=" + categoryShortName)
            })
            .then(function(response){
                return response.data;
            });
        };
    }

})();