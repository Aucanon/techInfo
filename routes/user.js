const router = require('express').Router()

// 用户注册
router.post('/register', (req, res) => {
    res.send('register')
})

// 获取用戶信息
router.get('/', (req, res) => {
    res.send('获取用户信息')
})

// 更新用户信息
router.put('updateUser', (req, res) => {
    res.send('更新用户信息')
})

// 登录
router.post('/login', (req, res) => {
    res.send('登录')
})

module.exports = router