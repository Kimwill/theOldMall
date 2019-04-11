<template>
  <div class="blog">
    <div class="wrap headerWrap">
      <div class="banner">
        <!-- <span class="iconfont back" @click="handleBackClick">&#xe608;</span> -->
        <span class="header">帖子</span>
        <el-button type="primary" icon="el-icon-edit" class="addBlog">发帖子</el-button>
      </div>
      <div class="search">
      	<el-input
      	  placeholder="请输入内容"
      	  prefix-icon="el-icon-search"
      	  v-model="search"
      	  class="searchBox"
      	 >
      	</el-input>
      </div>
      <div class="hotTopic"></div>
    </div>
    <div class="wrap">
    	<router-link 
        class="blogBlock" 
        v-for="(blogItem, index) in blogDataForShow" 
        :key="index"
        :to="'/blogDetail/'+blogItem.blogId"
        tag="div"
      >
    		<div class="userInfo">
    			<div class="userIcon">
    				<img :src="blogItem.userIcon">
    			</div>
    			<span class="userName">{{blogItem.userName}}</span>
    		</div>
    		<div class="blogText">{{blogItem.blogText}}</div>
    		<div class="blogImgWrap" v-if="!blogItem.blogHidden">
    			<div 
	    			class="blogImg"
	    			:class="{singleImg: blogItem.isSingleImg, multiImg: blogItem.isMultiImg}" 
	    			v-for="(blogImgSrc, index) in blogItem.blogImg"
	    			v-if="index < 9"
	    			:key="index"
	    		>
    				<img :src="blogImgSrc">
    			</div>
    		</div>
        <div class="blogInfoBar">
          <div class="blogInfoItem">
            <span class="iconfont">&#xe6a7;</span>
            <span class="iconDesc">分享</span>
          </div>
          <div class="blogInfoItem">
            <span class="iconfont">&#xe696;</span>
            <span class="iconDesc">{{blogItem.comment}}</span>
          </div>
          <div class="blogInfoItem">
            <span class="iconfont">&#xe699;</span>
            <span class="iconDesc">{{blogItem.like}}</span>
          </div>
        </div>
    	</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "blog",
    data() {
    	return {
    		search: "",
    		blogTestData: [{
          blogId: 1,
    			userIcon: require('assets/img/blog/blogTest/userIcon.jpg'),
    			userName: '钦哥',
    			blogText: '今天跟仙人掌去摘了草莓，仙女夕阳草莓园，美好的一天',
    			blogImg: [require('assets/img/blog/blogTest/blogTestImg.jpg')],
          comment: 10,
          like: 1
    		}, {
          blogId: 2,
    			userIcon: require('assets/img/blog/blogTest/userIcon.jpg'),
    			userName: '钦哥',
    			blogText: '今天跟仙人掌去摘了草莓，仙女夕阳草莓园，美好的一天',
    			blogImg: [
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg')
	    		],
          comment: 10,
          like: 1
    		}, {
          blogId: 3,
    			userIcon: require('assets/img/blog/blogTest/userIcon.jpg'),
    			userName: '钦哥',
    			blogText: '今天跟仙人掌去摘了草莓，仙女夕阳草莓园，美好的一天',
    			blogImg: [
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg')
    			],
          comment: 10,
          like: 1
    		}, {
          blogId: 4,
    			userIcon: require('assets/img/blog/blogTest/userIcon.jpg'),
    			userName: '钦哥',
    			blogText: '今天跟仙人掌去摘了草莓，仙女夕阳草莓园，美好的一天',
    			blogImg: [
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg')
    			],
          comment: 10,
          like: 1
    		}, {
          blogId: 5,
    			userIcon: require('assets/img/blog/blogTest/userIcon.jpg'),
    			userName: '钦哥',
    			blogText: '今天跟仙人掌去摘了草莓，仙女夕阳草莓园，美好的一天',
    			blogImg: [
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg'),
	    			require('assets/img/blog/blogTest/blogTestImg.jpg')
    			],
          comment: 10,
          like: 1
    		}, {
          blogId: 6,
    			userIcon: require('assets/img/blog/blogTest/userIcon.jpg'),
    			userName: '钦哥',
    			blogText: '今天跟仙人掌去摘了草莓，仙女夕阳草莓园，美好的一天',
    			blogImg: [require('assets/img/blog/blogTest/blogTestImg.jpg')],
          comment: 10,
          like: 1
    		}]
    	}
    },
    computed: {
    	blogDataForShow() {
	    	this.blogTestData.forEach((value) => {
    			var imgNum = value.blogImg.length
    			switch(true) {
    				case imgNum === 0:
	    				value.blogHidden = true;
	    				break;
	    			case imgNum === 1:
		    			value.isSingleImg = true;
		    			break;
		    		case imgNum > 1:
			    		value.isMultiImg = true;
			    		break;
				    default:
					    alert('err');
    			}
    		})
    		return this.blogTestData;
    	}
    },
    methods: {
      // handleBackClick() {
      //   this.$router.go(-1);
      // }
    }
  }
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
  .blog
    width 100%
    padding-bottom $footerMargin
    .headerWrap
    	background linear-gradient(to bottom, #fff, $bgColor)
    .wrap
      padding 0 $pageEdge
      .banner
      	box-sizing border-box
      	// border 1px solid #000
      	position relative
      	height 1rem
      	width 100%
      	font-size $headerFontSize
      	text-align center
      .header
        line-height 1rem
      .addBlog
        position absolute
        top 0
        bottom 0
        right 0
        margin auto 0
        width 1.8rem
        height .6rem
        font-size .25rem
        border-radius 16px
      // .back
      //   position absolute
      //   top 0px
      //   left 0px
      //   display inline-block
      //   height 1rem
      //   line-height 1rem
      //   font-size .6rem
      //   color #000
	    .search
	    	box-sizing border-box
	    	// border 1px solid #000
	    	width 100%
	    	overflow hidden
	    	.searchBox
	    		width 100%
	    		height .6rem
	    		float left
	    .blogBlock
	    	width 100%
	    	box-sizing border-box
	    	border-radius 10px
	    	background #fff
	    	padding .1rem
	    	margin-top .2rem
	    	.userInfo
	    		height .8rem
	    		display flex
	    		.userIcon
	    			width .6rem
	    			height .6rem
	    			margin .1rem
	    			// box-sizing border-box
	    			border-radius 50%
	    			overflow hidden
	    			img
	    				display block
	    				width 100%
	    		.userName
	    			flex 1
	    			font-size .2rem
	    			line-height .8rem
	    	.blogText
	    		font-size .25rem
	    		line-height .4rem
	    		padding-top .2rem
	    	.blogImgWrap
	    		padding-top .2rem
	    		display flex
	    		flex-wrap wrap
	    		.blogImg
	    			overflow hidden
	    			// flex 0
	    			max-width 50%
	    			min-width 33.33%
	    			// height 2.2rem
	    			padding .03rem
	    			box-sizing border-box
    				display flex
    				justify-content center
    				align-items center
	    			img
	    				display block
	    				width 100%
      .blogInfoBar
        height .5rem
        display flex
        align-items center
        margin-top .1rem
        // border 1px solid #000
        box-sizing border-box
        .blogInfoItem
          flex 1
          // height 100%
          overflow hidden
          color #999
          display flex
          justify-content center
          .iconfont
            font-size .34rem
            float left
            display inline-block
            padding-right .1rem
          .iconDesc
            font-size .24rem
            float left
	.singleImg
		flex 1		
		max-height 4rem
	.multiImg
		flex 0
		height 2.2rem
</style>