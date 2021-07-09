(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('CategorieController', CategorieController);
    CategorieController.$inject = ['MenuDataService', 'items'];
    function CategorieController(MenuDataService, items){
        var menuCategorie = this;
        menuCategorie.items = items;
    }

})();