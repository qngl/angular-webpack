'use strict'

/* eslint-env jasmine */

describe('LanguagesController', function () {
  var $controller, $rootScope, $scope

  beforeEach(angular.mock.module('languages.module'))

  beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_
    $rootScope = _$rootScope_
    $scope = $rootScope.$new()
    $controller('LanguagesController as vm', {
      $scope: $scope
    })
  }))

  it('should load LanguagesController', function () {
    expect($scope.vm).toBeDefined()
  })

  it('languages should be defined', function () {
    $scope.vm.$onInit()
    expect($scope.vm.languages).toBeDefined()
  })

  it('currentLanguage should be defined', function () {
    $scope.vm.$onInit()
    expect($scope.vm.currentLanguage).toBeDefined()
  })
})
