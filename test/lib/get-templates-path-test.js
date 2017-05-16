'use strict'

const test = require('ava')
const getTemplatePath = require('../../index')
const templates = require('../../templates/templates.json')

const expectedMeta = {
  file: 'orden.docx',
  archive: {
    Category: 'Dokument ut',
    SignOff: true,
    AccessCode: '13',
    Paragraph: 'Offl §13 jfr Fvl §13.1',
    NoarkClassificationCode: 'B31',
    Status: 'J'
  }
}

test('It returns path if template exists', t => {
  Object.keys(templates).forEach(template => t.truthy(getTemplatePath(template)))
})

test('It returns expected matedata', t => {
  t.deepEqual(expectedMeta, getTemplatePath('orden', true), 'Meta OK')
})

test('Requires input', t => {
  const error = t.throws(() => getTemplatePath())

  t.is(error.message, 'Missing required input: template id')
})

test('Throws if template does not exist', t => {
  const error = t.throws(() => getTemplatePath('finnes-ikke'))

  t.is(error.message, 'Template not found')
})
