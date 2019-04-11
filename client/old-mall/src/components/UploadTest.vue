<template>
	<el-upload
	  class="avatar-uploade"
	  :multiple="true"
	  :action="actionPath"
	  accept="image/jpeg,image/gif,image/png,image/bmp"
	  :before-upload="beforeAvatarUpload"
	  :data="postData"
	  :on-success="handleAvatarSuccess">
	  <img v-if="imageUrl" :src="imageUrl" class="avatar">
	  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>
</template>
<script>
	import {genUpToken} from 'assets/js/qiniuToken.js'
	export default {
		name: 'uploadTest',
		data() {
			return {
				actionPath: 'http://upload-z2.qiuniup.com',
				postData: {},
				imageUrl: ''
			}
		},
		methods: {
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
 
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = 'https://portal.qiniu.com/cdn/domain/ppqbjkzai.bkt.clouddn.com' + res.key;
				console.log(this.imageUrl);
			}
		},
		created() {
			var token;
      var policy = {};
      var bucketName = 'xiaoyiqin2011';
      var AK ='1nEjNZstRGp-wygIKvLkVPBbDD5S6PHh7ZT0yt83';
      var SK = 'rpytcnIRvtrmXmfdd83Z0yHCZBHVN3qyISWb4231';
      var deadline = Math.round(new Date().getTime() / 1000) + 3600;
      policy.scope = bucketName;
      policy.deadline = deadline;
      token=genUpToken(AK, SK, policy);
      this.postData.token=token;
		}
	}
</script>