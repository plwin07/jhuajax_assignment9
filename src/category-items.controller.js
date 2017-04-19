(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['items']
  function CategoryItemsController(items) {
    var categoryItems = this;
    categoryItems.name = items.data.category.name;
    categoryItems.items = items.data.menu_items;
    console.log(items.data);
  }
})();
