'use strict'

const itsName = require('its-name')

const defaultWidth = 40
const terminalWidth = () =>
  (process.stdout.isTTY ? process.stdout.columns : defaultWidth) || defaultWidth

const horizontalLine = (symbol?: string) => {
  symbol = symbol || '-'
  const n = terminalWidth()
  var k
  var str = ''
  for (k = 0; k < n; k += 1) {
    str += symbol
  }
  return () => {
    console.log(str)
  }
}

const centerText = (text: string): string => {
  const w = terminalWidth()
  let s = text
  while (s.length < w - 1) {
    s = ' ' + s + ' '
  }
  return s
}

const drawBanner = (text: string, symbol?: string) => {
  const hr = horizontalLine(symbol)
  hr()
  console.log(centerText(text))
  hr()
}

const register = (symbol?: string) => {
  /* eslint-env mocha */
  beforeEach(function () {
    const title: string = itsName(this.currentTest).join(' / ')
    drawBanner(title, symbol)
  })
}

module.exports = {
  drawBanner,
  register
}
