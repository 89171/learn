const Router = require('koa-router')

const router = new Router({
    prefix: '/users'
})

router.put('/', (ctx, next) => {
    ctx.response.body = 'new user'
})

router.get('/', (ctx, next) => {
    ctx.status = 200;
    ctx.response.body = {
        a:'2'
    }
})

router.post('/aaa', (ctx, next) => {
    console.log(ctx.request.body)
})

router.get('/:id', (ctx, next) => {
    console.log(ctx.request.params)
    console.log(ctx.request.query)
})
module.exports = router