const router = require('express').Router()

// 获取全部
router.get('/', (req, res, next) => {
    res.send('获取全部')
})

// 获取某个
router.get('/:articleId', (req, res, next) => {
    res.send('获取某个')
})

// 添加信息
router.post('/', (req, res, next) => {
    res.send('添加信息')
})

// 编辑信息
router.put('/:articleId', (req, res, next) => {
    res.send('编辑信息')
})

// 删除信息
router.delete('/:articleId', (req, res, next) => {
    res.send('删除信息')
})

module.exports = router