'use strict'

require('angular-ui-router')

var homeController = require('./home.controller')
var homeTemplate = require('./home.html')

module.exports = angular.module('home.module', [
  'ui.router'
])

  .config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      views: {
        content: {
          controller: 'HomeController',
          template: homeTemplate,
          controllerAs: '$ctrl'
        }
      }
    })
  })

  .controller('HomeController', homeController)

.name
