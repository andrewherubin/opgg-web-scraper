const Express = require('express')

const port = process.env.PORT || 3333

const app = Express()

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})