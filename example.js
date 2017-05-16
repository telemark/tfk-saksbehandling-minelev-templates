'use strict'

const getTemplatePath = require('./index')
const getTemplateMeta = require('./index')

console.log(getTemplatePath('orden'))

console.log(getTemplateMeta('orden', true))
