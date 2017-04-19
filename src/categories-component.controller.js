(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesComponentController', CategoriesComponentController);

  CategoriesComponentController.$inject = ['MenuDataService'];
  function CategoriesComponentController(MenuDataService) {
    var cat = this;

    cat.categories = [];

    cat.$onInit = function() {
      MenuDataService.getAllCategories()
      .then(function (result) {
        cat.categories = result.data;
        console.log(cat.categories);
      });
    };

  }
})();
