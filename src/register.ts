import drawBanner from './banner'
import * as itsName from 'its-name'

let registered

const register = (symbol?: string) => {
  if (registered) {
    return
  }

  /* eslint-env mocha */
  beforeEach(function () {
    const title: string = itsName(this.currentTest).join(' / ')
    drawBanner(title, symbol)
  })
  registered = true
}

export default register
