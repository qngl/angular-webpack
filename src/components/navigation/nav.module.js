'use strict'

var navController = require('./nav.controller')
var navComponent = require('./nav.component')

module.exports = angular.module('navigation.module', [])

  .controller('NavigationController', navController)
  .component('navigationComponent', navComponent)

.name
