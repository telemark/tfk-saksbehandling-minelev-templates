'use strict'

var path = require('path')
var templates = require('./templates/templates.json')

function getTemplatePath (id) {
  if (!id) {
    throw new Error('Missing required input: template id')
  }

  var doc = templates[id]

  if (!doc) {
    throw new Error('Template not found')
  } else {
    return path.join(__dirname, 'templates', doc)
  }
}

module.exports = getTemplatePath
