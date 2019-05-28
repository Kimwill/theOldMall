const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('./../config/key');
const GoodSchema = require('./../model/Good')
const BlogSchema = require('./../model/Blog')
const CommentSchema = require('./../model/Comment')
const OrderSchema = require('./../model/Order')
const CommentNewsSchema = require('./../model/CommentNews')

// 获取商品
router.get('/goods', (req, res) => {
	GoodSchema.find().then(goods => {
		let resGoods = []
		goods.forEach((value, index) => {
			let good = {
				goodId: value._id,
				userIcon: value.userInfo.avatar,
				userName: value.userInfo.userName,
				goodPrice: value.price,
				goodImg: value.goodImg,
				goodDesc: value.goodDesc,
				goodName: value.goodHeader
			}
			resGoods.push(good)
		})
		res.json(resGoods)
	})
})
// 获取帖子
router.get('/blogs', (req, res) => {
	BlogSchema.find({}, (err, blogs) => {
		// console.log(blogs)
		let resBlogs = []
		blogs.forEach((value, index) => {
			let blog = {
				blogId: value._id,
				userIcon: value.userInfo.avatar,
				userName: value.userInfo.userName,
				blogText: value.blogDesc,
				blogImg: value.blogImg,
				comment: value.commentNum,
				like: value.likeNum
			}
			resBlogs.push(blog)
		})
		res.json(resBlogs)
	})
})
// 获取商品详情
router.get('/goodDetail/:id', (req, res) => {
	GoodSchema.findById(req.params.id, (err, good) => {
		let resGood = {
			userIcon: good.userInfo.avatar,
			userName: good.userInfo.userName,
			userId: good.userInfo._id,
			goodName: good.goodHeader,
			goodDesc: good.goodDesc,
			goodPrice: good.price,
			goodImg: good.goodImg,
			goodDesc: good.goodDesc,
			likeNum: good.likeNum
		}
		res.json(resGood)
	})
})
// 获取帖子详情
router.get('/blogDetail/:id', (req, res) => {
	BlogSchema.findById(req.params.id, (err, blog) => {
		let resBlog = {
			blogId: blog._id,
			carouselImg: blog.blogImg,
			userIcon: blog.userInfo.avatar,
			userName: blog.userInfo.userName,
			userId: blog.userInfo._id,
			blogHeader: blog.blogHeader,
			content: blog.blogDesc,
			likeNum: blog.likeNum,
			commentNum: blog.commentNum
		}
		res.json(resBlog)
		// console.log(resBlog)
	})
})
// 获取评论
router.get('/comment/:id', (req, res) => {
	CommentSchema.find({relatedId: req.params.id}, (err, comments) => {
		// console.log(comments)
		res.json(comments)
	})
})
// 获取消息
router.get('/getNews/:id', (req, res) => {
	CommentNewsSchema.find({merchantId: req.params.id}, (err, commentNews) => {
		res.json(commentNews)
	})
})
// 获取我发布的
router.get('/getIssue/:id', (req, res) => {
	let myIssue = {}
	GoodSchema.find({userId: req.params.id}, (err, goods) => {
		myIssue.goods = goods
		BlogSchema.find({userId: req.params.id}, (err, blogs) => {
			myIssue.blogs = blogs
			res.json(myIssue)
		})
	})
})
// 添加商品
router.post('/addGood', (req, res) => {
	var newGood = new GoodSchema({
		goodHeader: req.body.goodHeader,
		goodDesc: req.body.goodDesc,
		goodImg: req.body.goodImg,
		price: req.body.price,
		classify: req.body.classify,
		way: req.body.way,
		userId: req.body.userId,
		userInfo: req.body.userInfo
	});
	newGood.save()
	  .then(good => {
	    res.json(good);
	  })
	  .catch(err => {
	    throw err;
	  })
})
// 发帖子
router.post('/addBlog', (req, res) => {
	// console.log(req.body)
	var newBlog = new BlogSchema({
		blogHeader: req.body.blogHeader,
		blogDesc: req.body.blogDesc,
		blogImg: req.body.blogImg,
		userId: req.body.userId,
		userInfo: req.body.userInfo
	});
	newBlog.save()
	  .then(blog => {
	    res.json(blog);
	  })
	  .catch(err => {
	    throw err;
	  })
})
// 发评论
router.post('/comment/:id', (req, res) => {
	// console.log(req.body)
	var newComment = new CommentSchema({
		userInfo: req.body.userInfo,
		content: req.body.content,
		relatedId: req.body.relatedId,
		type: req.body.type
	})
	newComment.save()
		.then(comment => {
			res.json(comment)
		})
		.catch(err => {
			throw err
		})
	var newCommentNews = new CommentNewsSchema({
		merchantId: req.body.merchantId,
		netFriendId: req.body.userInfo._id,
		infoId: req.body.relatedId,
		type: req.body.type
	})
	newCommentNews.save().then(commentNews => {
		res.json(commentNews)
	})
})
// 我的页面获取数目
router.get('/getNums/:id', (req, res) => {
	let numObj = {}
	OrderSchema.find({userId: req.params.id}, (err, orders) => {
		numObj.buyNum = orders.length
		OrderSchema.find({bossId: req.params.id}, (err, orders) => {
			numObj.saleNum = orders.length
			GoodSchema.find({userId: req.params.id}, (err, goods) => {
				numObj.issueGoodNum = goods.length
				BlogSchema.find({userId: req.params.id}, (err, blogs) => {
					numObj.issueBlogNum = blogs.length
					res.json(numObj)
				})
			})
		})
	})

})
// 获取我买到的
router.get('/myBuy/:id', (req, res) => {
	OrderSchema.find({userId: req.params.id}, (err, orders) => {
		res.json(orders)
	})
})
// 获取我卖出的
router.get('/mySale/:id', (req, res) => {
	console.log(req.params.id)
	OrderSchema.find({bossId: req.params.id}, (err, orders) => {
		res.json(orders)
	})
})
// 购买
router.post('/buy/:id', (req, res) => {
	const newOrder = new OrderSchema({
		goodId: req.body.goodId,
		good: req.body.good,
		userId: req.body.userId,
		bossId: req.body.bossId,
		place: req.body.place,
		consignee: req.body.consignee,
		phone: req.body.phone,
		status: 0
	})
	newOrder.save().then(order => {
		res.json(order)
	}).catch(err => {
		throw err
	})
})
router.post('/sendGood/:id', (req, res) => {
	OrderSchema.findByIdAndUpdate(req.params.id, {$set: {status: '1'}}, (err, order) => {
		console.log(order.status)
	})
	OrderSchema.find()
	res.send('交易成功')
})

module.exports = router;