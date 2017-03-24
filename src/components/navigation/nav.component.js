'use strict'

var navTemplate = require('./nav.html')

module.exports = {
  replace: true,

  controller: 'NavigationController',
  controllerAs: '$ctrl',
  template: navTemplate
}
