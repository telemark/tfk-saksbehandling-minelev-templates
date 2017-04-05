'use strict'

const test = require('ava')
const getTemplatePath = require('../../index')

test('It returns path if template exists', t => {
  t.truthy(getTemplatePath('orden'))
})

test('Requires input', t => {
  const error = t.throws(() => getTemplatePath())

  t.is(error.message, 'Missing required input: template id')
})

test('Throws if template does not exist', t => {
  const error = t.throws(() => getTemplatePath('finnes-ikke'))

  t.is(error.message, 'Template not found')
})
