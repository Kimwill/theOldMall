<template>
	<div class="editAvatar">
		<div class="header">
			<span class="back iconfont" @click="handleBackClick">&#xe608;</span>
			<span class="headerName">编辑头像</span>
		</div>
		<div class="wrap">
			<div class="desc">选择图片</div>
			<div class="upload">
			  <el-upload
			    class="avatar-uploader"
			    :action= "domain"
			    :auto-upload="false"
			    :http-request = "upqiniu"
			    :show-file-list="false"
			    :before-upload="beforeUpload"
			    :on-change="addFile"
			    :file-list="exitFileList"
			    v-show="!imageUrl"
			    ref='elUpload'
			   >
			    <i class="el-icon-plus avatar-uploader-icon"></i>
			  </el-upload>
			  <div class="avatarWrap">
			  	<img v-if="imageUrl" :src="imageUrl" class="avatar">			  	
			  </div>
			</div>
		</div>
		<el-button type="primary" class="editBtn" @click="handleEdit" :disabled="!imageUrl">更改</el-button>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'editAvatar',
		data() {
			return {
				domain: 'http://upload-z2.qiniup.com',
				token: {},
				qiniuaddr: 'ppqbjkzai.bkt.clouddn.com',
				exitFileList: [],
				imageUrl: ''//require('assets/img/me/editInfo/default.png')
			}
		},
		methods: {
			handleBackClick() {},
			addFile(file, fileList) {
				var _this = this;
	      var event = event || window.event;
	      var file = event.target.files[0];
	      // console.log(file);
	      var reader = new FileReader(); 
	      //转base64
	      reader.onload = function(e) {
	        _this.imageUrl = e.target.result //将图片路径赋值给src
	      }
	      // console.log(this.imageUrl);
	      reader.readAsDataURL(file);
			},
			upqiniu(req) {
				const config = {
				  headers: {'Content-Type': 'multipart/form-data'}
				}
				let filetype = ''
				// 重命名要上传的文件
				const keyname = 'xiaoyiqin2011' + new Date() + Math.floor(Math.random() * 100) + '.' + filetype
				// 从后端获取上传凭证token
				axios.get('/api/qiniu/uploadToken').then(res => {
				  // console.log(res)
				  const formdata = new FormData()
				  formdata.append('file', req.file)
				  formdata.append('token', res.data)
				  formdata.append('key', keyname)
				  // 获取到凭证之后再将文件上传到七牛云空间
				  axios.post(this.domain, formdata, config).then(res => {
				  	if(res.status === 200) {
				  		this.$message({
				  			showClose: true,
				  			message: '头像更改成功',
				  			type: 'success',
				  			customClass: 'messageDialog'
				  		})
				  		this.imageUrl = 'http://' + this.qiniuaddr + '/' + res.data.key
				  		this.postImgUrl()
				  	} else {
				  		this.$message({
				  			showClose: true,
				  			message: '更改失败，请重试',
				  			type: 'error',
				  			customClass: 'messageDialog'
				  		})
				  	}
				  })
				})
			},
			beforeUpload(file) {
				const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
				const isLt2M = file.size / 1024 / 1024 < 2
				if (!isJPG) {
				  // this.$message.error('上传头像图片只能是 JPG 格式!')
				  console.log('上传头像图片只能是 JPG 格式!')
				}
				if (!isLt2M) {
				  // this.$message.error('上传头像图片大小不能超过 2MB!')
				  console.log('上传头像图片大小不能超过 2MB!')
				}
				return isJPG && isLt2M
			},
			postImgUrl() {
				console.log(1);
				axios.post('/api/qiniu/uploadCb', {imageUrl: this.imageUrl})
					.then(res => {console.log(res)});
			},
			handleEdit() {
				this.$refs.elUpload.submit();
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.editAvatar
		.header
			height .8rem
			text-align center
			background #fff
			position relative
			.back
				height .8rem
				line-height .8rem
				font-size .6rem
				color #000
				position absolute
				z-index 2
				left 0
			.headerName
				font-size $headerFontSize
				position absolute
				left 0px
				right 0px
				margin auto
				line-height .8rem
		.wrap
			margin .3rem 0
			padding .2rem $pageEdge
			background #fff
			display flex
			height 2rem
			font-size .3rem
			.desc
				width 30%
				height 100%
				border-right 1px solid #ccc
			.upload
				flex 1
				padding 0 .2rem
				.avatar-uploader
					width 1.5rem
					border 1px dashed #d9d9d9
					border-radius 6px
					cursor pointer
					position relative
					overflow hidden
					.el-upload 
						border 1px dashed #d9d9d9
						border-radius 6px
						cursor pointer
						position relative
						overflow hidden
						.avatar-uploader-icon 
							font-size 28px
							color #8c939d
							width 1.5rem
							height 1.5rem
							line-height 1.5rem
							text-align center
				.avatarWrap
					width 1.5rem
					height 1.5rem
					// display inline-block
					border-radius 10px
					overflow hidden
					.avatar 
						width 100%
						height 100%
		.editBtn
			float right
			margin-right .3rem
	.messageDialog
		height .8rem
</style>
