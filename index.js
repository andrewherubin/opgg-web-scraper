const Express = require('express')

const port = process.env.PORT || 3333

const app = Express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname+'/public/'})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})