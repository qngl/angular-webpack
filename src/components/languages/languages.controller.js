'use strict'

module.exports = function ($scope, $translate) {
  var vm = this

  vm.$onInit = function () {
    vm.languages = [{
      id: 'zh-CN',
      label: '中文'
    }, {
      id: 'en-US',
      label: 'English'
    }]
    vm.currentLanguage = vm.languages[0]
  }

  vm.changeLanguage = function (lang) {
    for (var i in vm.languages) {
      if (vm.languages[i].id === lang) {
        vm.currentLanguage = vm.languages[i]
        $translate.use(lang)
      }
    }
  }
}
