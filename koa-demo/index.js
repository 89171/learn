const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static')
const userRouter = require('./router/user')
const uploadRouter = require('./router/upload')

const app = new koa()

app.use(bodyParser())
app.use(koaStatic('./uploads'))
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(uploadRouter.routes())

app.use((ctx, next) => {
    ctx.app.emit('error', new Error('遇到错误'),ctx)
})

app.on('error',(error,ctx) => {
    console.log('error',error)
    console.log('ctx',ctx)
    ctx.status = 401;
    ctx.body = error.message;
})

app.listen(8000, () => {
    console.log('start')
})