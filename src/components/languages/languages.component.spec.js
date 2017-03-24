'use strict'

/* eslint-env jasmine */

describe('languages.component', function () {
  var element
  var $rootScope
  var $compile
  var $scope

  beforeEach(angular.mock.module('languages.module'))

  beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_
    $compile = _$compile_
    $scope = $rootScope.$new()
  }))

  it('should compile the component correctly', function () {
    element = angular.element('<language-select></language-select>')
    element = $compile(element)($scope)
    $scope.$apply()

    expect(element.html()).toContain('<ul class')
  })
})
