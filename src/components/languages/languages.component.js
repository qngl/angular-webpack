'use strict'

var template = require('./languages.html')

module.exports = {
  replace: true,

  controller: 'LanguagesController',
  controllerAs: '$ctrl',
  template: template
}
