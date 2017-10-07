const express = require('express') //conคือconstant
const { twig } = require('twig') 

const app = express() //Run fuction expressแล้วเก็บในapp

app.set('view engine', 'twig') //บอกแอพว่าจะใช้view engine ที่ชื่อ twigนะ

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000 //จะเก็บไว้นานแค่ไหน คือหลังจาก1อาิทตย์มันจะรีใหม่ เหมือเรา ctrl+shift+R
}))

app.listen(8000, function(err){
	console.log('Server is running on port 8000') // 8000 คือ port หลังจากlistenแล้ว
})