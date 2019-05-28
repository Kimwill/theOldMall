<template>
	<div class="imgsUpload">
		<div class="wrap" ref="wrap">
			<div class="uploadWrap" ref="uploadWrap">
				<el-upload
				  class="avatar-uploader"
				  :action= "domain"
				  :auto-upload="false"
				  :http-request = "upqiniu"
				  :show-file-list="false"
				  :before-upload="beforeUpload"
				  :on-change="addFile"
				  :file-list="exitFileList"
				  ref='elUpload'
				 >
				  <i class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
		</div>
	</div>
</template>
<script>
	import {addClass} from 'assets/js/util.js'
	export default {
		name: "imgsUpload",
		data() {
			return {
				domain: 'http://upload-z2.qiniup.com',
				token: {},
				qiniuaddr: 'ps39bryu4.bkt.clouddn.com',
				exitFileList: [],
				imageUrl: [],
				imageIndex: 0,
				imgLength: 0
			}
		},
		methods: {
			addFile(file, fileList) {
			  var event = event || window.event;
			  var file = event.target.files[0];
			  var reader = new FileReader(); 
			  //转base64
			  reader.onload = (e) => {
			  	let imgsWrap = document.createElement('div')
			  	let img = document.createElement('img')
			  	imgsWrap.appendChild(img)
			  	this.$refs.wrap.insertBefore(imgsWrap, this.$refs.uploadWrap)
			  	addClass(imgsWrap, 'imgsWrap')
			  	img.src = e.target.result
			  }
			  this.imgLength++
			  reader.readAsDataURL(file);
			},
			upqiniu(req) {
				const config = {
				  headers: {'Content-Type': 'multipart/form-data'}
				}
				let filetype = req.file.type
				// 重命名要上传的文件
				let userAccountNumber = JSON.parse(localStorage.getItem('user')).accountNumber
				const keyname = `/addGood/${userAccountNumber}/${(new Date).getTime()}.${filetype}`
				// 从后端获取上传凭证token
				this.axios.get('/api/qiniu/uploadToken').then(res => {
				  const formdata = new FormData()
				  formdata.append('file', req.file)
				  formdata.append('token', res.data)
				  formdata.append('key', keyname)
				  // 获取到凭证之后再将文件上传到七牛云空间
				  this.axios.post(this.domain, formdata, config).then(res => {
				  	if(res.status === 200) {
				  		this.imageUrl.push('http://' + this.qiniuaddr + '/' + res.data.key)
				  		this.$emit('passImg', this.imageUrl)
				  		this.$emit('issue', this.imgLength, this.imageUrl.length)
				  	} else {
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
			handleIssue() {
				this.$refs.elUpload.submit();
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.imgsUpload
		width 100%
		.wrap
			width 100%
			display flex
			flex-wrap wrap
			.uploadWrap
				margin-right .2rem
				margin-bottom .2rem
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
</style>
<style lang="stylus">
	.imgsWrap
		width 1.5rem
		height 1.5rem
		border-radius 6px
		overflow hidden
		margin-right .2rem
		margin-bottom .2rem
		img
			height 100%
			width 100%
</style>
