const express = require('express')
const routes = require('./routes/resumeRoute')
const app = express()
const port = process.env.PORT || 3000

// Set Template Engine
app.set('view engine', 'ejs')

// Static files
app.use(express.static('public'))

// Load Routes
app.use(routes)
app.listen(port, () => console.log(`Server start at http://localhost:${port}`))