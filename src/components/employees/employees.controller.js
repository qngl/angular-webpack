'use strict'

module.exports = function ($scope) {
  var vm = this

  vm.visibleEmployeeId = 0
  vm.employees = [{
    id: 1,
    name: 'Li Qiang',
    bio: 'Li Qiang is a new developer of Customer Channel & Digitalization team.'
  },
  {
    id: 2,
    name: 'Li Yulong',
    bio: 'Li Yulong is the SCRUM master of FS China Online project.'
  },
  {
    id: 3,
    name: 'Mareike',
    bio: 'Mareike is the boss.'
  }
  ]

  vm.expand = function (emp) {
    vm.visibleEmployeeId = emp.id
  }
  vm.clickBio = function (emp) {
    alert(emp.name + ': ' + emp.bio)
  }
}
