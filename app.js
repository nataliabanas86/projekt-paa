const router = require('koa-router')()
const store = require('../store')
const tasks = require('./routes/tasks')
router.prefix('/tasks')

router.post('/add', async (ctx, next) => {
  await store.createTask(ctx.request.body.title)
  ctx.redirect('/')
})

module.exports = router
app.use(tasks.routes(), tasks.allowedMethods())

