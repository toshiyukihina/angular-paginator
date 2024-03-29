'use strict';

describe('Service: paginator', function () {

  // load the service's module
  beforeEach(module('angularPaginatorApp'));

  var items = [1, 2, 3, 4, 5, 6];
  var fetchFn = function(offset, limit, callback) {
    callback(items.slice(offset, offset + limit));
  };

  // instantiate service
  var paginator;
  beforeEach(inject(function (_paginator_) {
    paginator = _paginator_(fetchFn, 3);
  }));

  it('should show items on the first page', function () {
    expect(paginator.currentPageItems).toEqual([1, 2, 3]);
    expect(paginator.hasNext()).toBeTruthy();
    expect(paginator.hasPrevious()).toBeFalsy();
  });

  it('should go to the next page', function() {
    paginator.next();
    expect(paginator.currentPageItems).toEqual([4, 5, 6]);
    expect(paginator.hasNext()).toBeFalsy();
    expect(paginator.hasPrevious()).toBeTruthy();
  });

  it('should go to the previous page', function() {
    paginator.next();
    expect(paginator.currentPageItems).toEqual([4, 5, 6]);
    paginator.previous();
    expect(paginator.currentPageItems).toEqual([1, 2, 3]);
  });

  it('should not go next from last page', function() {
    paginator.next();
    expect(paginator.currentPageItems).toEqual([4, 5, 6]);
    paginator.next();
    expect(paginator.currentPageItems).toEqual([4, 5, 6]);
  });

  it('should go back from first page', function() {
    paginator.previous();
    expect(paginator.currentPageItems).toEqual([1, 2, 3]);
  });
});
