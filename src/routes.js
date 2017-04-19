(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesComponentController as categoriesList'
    })

    .state('items', {
      url: '/items/{catId}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'CategoryItemsController as categoryItems',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.catId);
        }]
      }
    });
  }
})();
