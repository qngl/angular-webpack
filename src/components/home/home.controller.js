'use strict'

module.exports = function ($state, $stateParams) {
  var vm = this

  vm.$onInit = function () {
    vm.x = 0
    vm.y = 1
  }

  vm.sum = function () {
    vm.z = vm.x + vm.y
  }
}

