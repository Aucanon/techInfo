const router = require('express').Router()

// 获取全部
router.get('/', (req, res, next) => [
    res.send('获取全部')
])

// 获取某个
router.get('/:cid', (req, res, next) => [
    res.send('获取某个')
])


// 添加
router.post('/add', (req, res, next) => [
    res.send('添加')
])


// 编辑
router.put('/edit', (req, res, next) => [
    res.send('编辑')
])


// 删除
router.delete('/:cid', (req, res, next) => [
    res.send('删除')
])

module.exports = router