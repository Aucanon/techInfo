module.exports = {
    app: {
        port: process.env.PORT || 3000
    },
//     数据库配置
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/techInfo'
    }
}