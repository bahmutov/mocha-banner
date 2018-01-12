'use strict'

/* eslint-env mocha */
const mochaBanner = require('..')

mochaBanner.register()

describe('mocha-banner', () => {
  it('write this test', () => {
    console.assert(mochaBanner, 'should export something')
  })
})
