'use strict'

require('angular-ui-router')

var employeesController = require('./employees.controller')
var employeesTemplate = require('./employees.html')

module.exports = angular.module('employees.module', [
  'ui.router'
])

  .config(function ($stateProvider) {
    $stateProvider.state('employees', {
      url: '/employees',
      views: {
        content: {
          controller: 'EmployeesController',
          template: employeesTemplate,
          controllerAs: '$ctrl'
        }
      }
    })
  })

  .controller('EmployeesController', employeesController)

.name
