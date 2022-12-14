const Express = require('express')

const counterRouter = require('./routes/counter')

const port = process.env.PORT || 3333

const app = Express()

app.use('/counter', counterRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})