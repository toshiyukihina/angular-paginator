'use strict';

/**
 * @ngdoc service
 * @name angularPaginatorApp.paginator
 * @description
 * # paginator
 * Factory in the angularPaginatorApp.
 */
angular.module('angularPaginatorApp')
  .factory('paginator', [function () {
    return function(fetchFunction, pageSize) {
      var paginator = {
        hasNextVar: false,
        next: function() {
          if (this.hasNextVar) {
            this.currentOffset += pageSize;
            this._load();
          }
        },
        _load: function() {
          var self = this;
          fetchFunction(this.currentOffset, pageSize + 1, function(items) {
            self.currentPageItems = items.slice(0, pageSize);
            self.hasNextVar = items.length === pageSize + 1;
          });
        },
        hasNext: function() {
          return this.hasNextVar;
        },
        previous: function() {
          if (this.hasPrevious()) {
            this.currentOffset -= pageSize;
            this._load();
          }
        },
        hasPrevious: function() {
          return this.currentOffset !== 0;
        },
        currentPageItems: [],
        currentOffset: 0
      };

      paginator._load();

      return paginator;
    };
  }]);
