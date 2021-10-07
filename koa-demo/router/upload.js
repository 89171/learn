const Router = require('koa-router')
const multer = require('@koa/multer')

const upload = multer({
    dest: 'uploads'
})

const router = new Router({
    prefix: '/upload'
})

router.post('/avator', upload.single('avator'),(ctx,next) => {
    console.log(ctx.request.file)
    ctx.response.body = '上传成功'
})

module.exports = router