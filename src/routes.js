(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    // Redirect to home page
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    //Home page
    .state('home',{
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'CategorieController as menuCategorie',
      resolve: {
        items: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      //url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/main-items.template.html',
      controller: 'ItemsController as itemDetail',
      params: {
        categoryShortName: null
      }
    });
  }

})();