const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Resume Project'))
app.listen(port, () => console.log(`Server start at http://localhost:${port}`))