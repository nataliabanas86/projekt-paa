const store = require('../store')

const router = require('koa-router')()


router.get('/', async (ctx, next) => {
  tasks = await store.listTasks()
  await ctx.render('index', { tasks })
})
.get('/', async (ctx, next) => {
  ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

outer.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})


router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

