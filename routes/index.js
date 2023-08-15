const router = require('express').Router()

// 用户模块
router.use('/user', require('./user'))

// 登陆接口
router.use('/auth', require('./auth'))

// 分类接口
router.use('/category', require('./category'))

module.exports = router