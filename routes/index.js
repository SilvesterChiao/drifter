var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getinfo',function  (req,res,next) {
	res.header('Access-Control-Allow-Origin', '*');
    var _data = { email: 'example@163.com', name: 'jaxu' };
    res.type('application/json');
    res.jsonp(_data);
});

router.get('/sites',function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	return res.json({
		"data": [
			{
				"Name": "菜鸟教程",
				"URL": "www.runoob.com",
				"Country": "CN"
			},
			{
				"Name": "Google",
				"URL": "www.google.com",
				"Country": "USA"
			},
			{
				"Name": "Facebook",
				"URL": "www.facebook.com",
				"Country": "USA"
			},
			{
				"Name": "微博",
				"URL": "www.weibo.com",
				"Country": "CN"
			}
		]
	});
});

router.post('/user',function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	return res.json({
		'name': 'Lili',
		'age': 18,
		'sex': 'female',
		'friends': ['李雷','韩梅梅','Jhon','Tom']
	});
});

router.post('/movie',function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	return res.json({
		"movies": [
			{
				"name": "速度与激情8"
			},
			{
				"name": "星球大战8"
			},
			{
				"name": "加勒比海盗5"
			}
		]
	});
});

// 热映影片
router.post('/hot',function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	return res.json({
		"movies": [
			{
				"name": "加勒比海盗5",
				"title": "传奇船长再次起航！",
				"grade": 8.0,
				"img": "hot-1.jpg",
				"url": "1.mp4",
				"protagonist": ["约翰尼·德普","奥兰多·布鲁姆"],
				"time": 2017
			},
			{
				"name": "金刚狼3",
				"title": "狼叔再见！",
				"grade": 8.0,
				"img": "hot-1.jpg",
				"url": "2.mp4",
				"protagonist": ["休·杰克曼","帕特里克·斯图尔特"],
				"time": 2017
			}
		]
	});
});

module.exports = router;
