const fs = require('fs')

fs.rmSync('./node_modules/.cache', { recursive: true, force: true })
