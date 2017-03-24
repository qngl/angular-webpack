'use strict'

/* eslint-env jasmine */

describe('EmployeesController', function () {
  var $controller, $rootScope, $scope

  beforeEach(angular.mock.module(require('./employees.module')))

  beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_
    $rootScope = _$rootScope_
    $scope = $rootScope.$new()
    $controller('EmployeesController as vm', {
      $scope: $scope
    })
  }))

  it('should load EmployeesController', function () {
    expect($scope.vm).toBeDefined()
    expect($scope.vm.employees).toBeDefined()
  })

  it('expand should work well', function () {
    var emp = {
      id: 2,
      name: 'Li Yulong',
      bio: 'Li Yulong is the SCRUM master of FS China Online project.'
    }
    $scope.vm.expand(emp)
    expect($scope.vm.visibleEmployeeId).toBe(2)
  })
})
