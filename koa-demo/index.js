const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('./router/user')
const uploadRouter = require('./router/upload')

const app = new koa()

app.use(bodyParser())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(uploadRouter.routes())

app.use((ctx, next) => {
    ctx.response.body = 'Hello'
})

app.listen(8000, () => {
    console.log('start')
})