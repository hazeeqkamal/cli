const EOL = '\n'

const colorizeDiff = require('@npmcli/disparity-colors')
      res += `${filename}${EOL}`
      patch += `${str}${EOL}`
    res += (opts.color
      ? colorizeDiff(patch, { headerLength })
      : patch)