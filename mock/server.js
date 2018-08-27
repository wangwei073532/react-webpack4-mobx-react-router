const Koa = require('koa');
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');
const app = new Koa()
const router = new Router()
const mock = require('./mock')
app.use(bodyParser());
router.post('/api/login', async (ctx, next) => {
    console.log(ctx.request.body)
    let req = ctx.request.body
    let userName = req.userName
    let passWord = req.passWord
    if(userName == 'wangwei' && passWord =='123456'){
        ctx.body= mock.MockData('0')
    }else {
        ctx.body= mock.MockData('1')
    }


})
router.get('/api/manhuaData/:type', async (ctx, next) => {
    console.log(ctx.params.type)
    ctx.body= mock.MockData(`/api/manhuaData/${ctx.params.type}`,'')
})
// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
