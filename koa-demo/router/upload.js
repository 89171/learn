const Router = require('koa-router')
const multer = require('@koa/multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,'../uploads'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log('filename: ', file.fieldname + '-' + uniqueSuffix)
      const tempArr = file.originalname.split('.')
      const filetype = tempArr[tempArr.length - 1]
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${filetype.toLowerCase()}`)
    }
  })

const upload = multer({
    storage: storage,
    dest: 'uploads'
})

const router = new Router({
    prefix: '/upload'
})

router.post('/avator', upload.single('avator'),(ctx,next) => {
    // upload.single('avator') 单一文件上传时，request.file存放avatar文件，如果有其他字段则会被存放在request.body
    // upload.array('photos',12) request.files存放photos文件，如果有其他字段则存放在request.body
    // upload.any() 接受所有通过网络传输的文件,文件数组将存储在 req.files 中。
    console.log(ctx.request.file)
    ctx.response.body = '上传成功'
})

module.exports = router