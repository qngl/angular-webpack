
var angular = require('angular')
require('angular-ui-router')
require('angular-ui-bootstrap')
require('angular-translate')
require('./style.scss')

var navigationModule = require('./components/navigation/nav.module')
var languagesModule = require('./components/languages/languages.module')

var homeModule = require('./components/home/home.module')
var employeesModule = require('./components/employees/employees.module')

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',

  navigationModule,
  languagesModule,
  homeModule,
  employeesModule
])

.config(['$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
  }
])

.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useSanitizeValueStrategy('escape')
}])
