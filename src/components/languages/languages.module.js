'use strict'

require('angular-translate')

var languagesController = require('./languages.controller')
var languagesComponent = require('./languages.component')

var zhCN = require('./zh-CN')
var enUS = require('./en-US')

module.exports = angular.module('languages.module', [
  'pascalprecht.translate'
])

.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en-US', enUS)
  $translateProvider.translations('zh-CN', zhCN)

  $translateProvider.preferredLanguage('zh-CN')
}])

  .controller('LanguagesController', languagesController)
  .component('languageSelect', languagesComponent)

.name
