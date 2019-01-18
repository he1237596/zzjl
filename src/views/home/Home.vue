<template>
	<div class="home">
		<router-link tag="div" :to="{name:'search',params:{cateId:''}}" class="search">
			<div class="logo"><img src="../../assets/images/logo.jpg" /></div>
			<div class="search-wrap">
				<img src="../../assets/images/icon-search.png" alt="" /><span class="search-btn">搜索</span>
			</div>
		</router-link>

		<div class="swiper">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="(item, index) in swiperLsit" :key="index">
					<img :src="item.adPicPath" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="classify-wrap">
			<ul class="classify">
				<router-link tag="li" :to="{name:'search',params:{'cateId':item.cateId}}" v-for="(item, index) in classifyList" :key="index" class="classify-item" v-if="index<9">
					<div class="item-img-wrap">
						<img :src="item.catePic" alt="" />
					</div>
					<div v-text="item.cateName" class="item-text">

					</div>
				</router-link>

				<li class="classify-item" @click="changeHash">
					<div class="item-img-wrap">
						<img src="../../assets/images/home_more@2x.png" alt="" />
					</div>
					<div class="item-text">
						全部
					</div>
				</li>
			</ul>
		</div>
		
		<div class="goods-wrap">
			<ul class="goods" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="230">
				<li v-for="(item, index) in goodsList" :key="index" class="goods-item">
					<list-row :item="item"></list-row>

				</li>
			</ul>
			<div class="no-more" v-if="noMore">我是有底线的</div>
			<div class="loading" v-if="loading">
		<mt-spinner type="triple-bounce" color="rgb(100, 100, 100)"></mt-spinner>
				
			</div>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src

	import ListRow from "@/components/ListRow.vue";
//	import {mapMutations} from 'vuex'
	export default {
		name: "home",
		components: {
			ListRow
		},		beforeRouteEnter(to, from, next) {

			// 在渲染该组件的对应路由被 confirm 前调用
			// 不！能！获取组件实例 `this`
			// 因为当守卫执行前，组件实例还没被创建
			console.log(to, from, 9999999)
			next()
		},
		 beforeRouteUpdate (to, from, next) {
		 	console.log(444)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
		data() {
			return {
				swiperLsit: [],
				classifyList: [],
				goodsList: [],
				pageNum:1,
				pageSize:10,
				noMore: false,
				loading:false
			}
		},
		created() {

//			this.getList();
			var swiperParams = {
				belongOneDistriId: sessionStorage.getItem("belongOneDistriId")
			};
			this.$http.post(this.api.index.swiper, swiperParams).then(res => {
				if(res.code == 10000) {
					this.swiperLsit = JSON.parse(res.data)
				}

			}, err => {

			});
			var classifyParams = {
				belongOneDistriId: sessionStorage.getItem("belongOneDistriId")
			};
			this.$http.post(this.api.index.cate, classifyParams).then(res => {
				if(res.code == 10000) {
					this.classifyList = JSON.parse(res.data);
				} else {

				}
			}, err => {

			});
		},
		methods:{
			changeHash(){
				this.$router.push({name:'classify'});
//				this.$store.commit("TABCHANGE","classify")
				this.$emit("update:hash","classify")
			},
			loadMore () { // 加载更多
			if(this.noMore) return;
            this.isMoreLoading = true // 设置加载更多中
            this.loading = true // 加载中
            setTimeout(() => {
                this.getList()
            }, 100)
        },
        getList(){
        	this.$http.post(this.api.index.good_list, {
				page: {
					"pageNum": this.pageNum,
					"pageSize": this.pageSize
				},
				"belongOneDistriId": "",
				"userId": ""
			}).then(res => {
				if(res.code == 10000) {
					this.pageNum += 1; // 增加分页
					this.loading = false;// 关闭加载中
					this.isMoreLoading = false;					
					if(res.data.length<this.pageSize){
						this.noMore = true // 显示没有更多了
					}
					this.goodsList = this.goodsList.concat(res.data);
				}
			}, err => {

			})
        }

		}
	}
</script>
<style lang="scss" scoped>

	.home {
		position: relative;
		.classify-wrap {
			background-color: #fff;
			.classify {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				.classify-item {
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 20%;
					height: 150px;
					.item-img-wrap {
						width: 72px;
						height: 72px;
					}
					.item-text {
						height: 32px;
						line-height: 32px;
						padding-top: 4px;
					}
				}
			}
			margin-bottom: 16px;
		}
		.goods-wrap {
			padding-bottom: 140px;
			.loading{
				height: 30px;
			}
			.goods {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.goods-item {
					background-color: #fff;
					width: 370px;
					height: 460px;
					margin-bottom: 10px;
				}
			}
		}
	}
	
	.search {
		background-color: #f8f8f8;
		display: flex;
		height: 80px;
		padding: 0 20px 0 0;
		position: fixed;
		width: 100%;
		z-index: 999;
		justify-content: center;
		align-items: center;
		/*background-color: red;*/
		.logo {
			line-height: 80px;
			width: 80px;
			height: 80px;
			color: $red;
			background-color: orange;
			font-size: 36px;
			font-weight: bolder;
		}
		.search-wrap {
			flex: 1;
			border-radius: 4px;
			background-color: #fff;
			height: 60px;
			line-height: 60px;
			margin-left: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
					width: 30px;
					height: 30px;
				}
			.search-btn{

			}
		}
	}
	
	.swiper {
		padding-top: 80px;
		height: 420px;
		width: 100%;
		background-color: #f0f0f0;
		img {
			height: 100%;
		}
	}
</style>