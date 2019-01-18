<template>
	<div class="page">
		<div class="menu-wrap">
			<ul class="menu-items">
				<li @click="getCate(item.cateId)" :class="[menuClass,navActive==item.cateId?'active':'']" v-for="(item,index) in menuLeft" :key=index v-text="item.cateName"></li>
			</ul>
		</div>
		<div class="content-wrap">
			<div class="content">
				<ul class="cate-items">
					<li class="cate-item" v-for="(item,index) in cateList" :key=index>
						<div class="cates-head"><span class="cates-title" v-text="item.cateName"></span><router-link :to="{name:'goods.detail',params:{cateId:item.cateId}}" tag="span" class="all">全部</router-link></div>
						<ul class="cates">
							<router-link :to="{name:'goods.detail',params:{cateId:sitem.cateId}}" tag="li" class="cate" v-for="(sitem,sindex) in item.childList" :key=sindex>
								<div class="img-wrap">
									<img :src="sitem.catePic" alt="" />
								</div>
								
								<div v-text="sitem.cateName"></div>
							</router-link>
						</ul>
					</li >
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "classify",
		created() {
			this.getMenuLeft();

		},
		data() {
			return {
				menuLeft: [],
				navActive: "",
				menuClass: "menu-item",
				cateList: []
			}
		},
		methods: {
			getMenuLeft(id) {
				//			    wx.showLoading({
				//			      title: ''
				//			    })
				this.$http.post(this.api.default.cat_list, {}).then(res => {
					if(res.code == 10000) {
						this.menuLeft = JSON.parse(res.data)
						this.navActive = this.menuLeft[0].cateId;
					}
					this.getCate(this.navActive)
				}, err => {

				});
			},
			getCate: function(id) {
				this.navActive = id;
				//		    wx.showLoading({
				//		      title: ''
				//		    })
				//
				//		    var complete = function(){
				//		      wx.hideLoading();
				//		    }
				this.$http.post(this.api.default.cate_list, {
					parentCateCId: id
				}).then(res => {
					if(res.code == 10000) {
						this.cateList = JSON.parse(res.data);
					}
				}, err => {

				});
				//		    post_json(api.default.cate_list, param, success,null,complete);
			}
		}
	}
</script>

<style scoped lang="scss">

	.page {
		display: flex;
		overflow: hidden;
		.menu-wrap {
			width: 160px;
			position: fixed;
			overflow-y: auto;
			padding-bottom: 110px;
			background-color: #fff;
			height: 100%;
			font-size: 24px;
			.menu-item {
				height: 100px;
				line-height: 100px;
				padding-left: 20px;
				background-color: #fff;
				&.active {
					color: $red;
					background-color: #f8f8f8;
				}
			}
		}
		.content-wrap {
			position: absolute;
			left: 160px;
			right: 0;


			height: 100%;
overflow-y: auto;
			flex: 1;
			padding: 0 24px;
			.content {
				/*background: #fff;*/
				width: 100%;
				padding-bottom: 110px;
				/*flex-direction: column;*/
				.cates-head{
					display: flex;
					justify-content: space-between;
					text-align: left;
					height: 76px;
					line-height: 76px;

						.cates-title{
							flex: 1;
							padding-left: 28px;
						}
						.all{
							text-align: center;
							flex: 0 0 auto;
							width: 100px;
							color: $gray;
						}


				}
				.cates{
					background-color: #fff;
					display: flex;
					flex-wrap: wrap;
					width: 100%;
					
					.cate{

						padding: 24px 0;
						width: 33.33%;
						flex: 0 0 auto;
						display: flex;
					flex-direction: column;
						
						div{
							width: 120px;
							margin: 0 auto;
							
							@include text1-overflow;
							&.img-wrap{


								width: 96px;
								height: 96px;

						}

						}

					}
				}

			}
		}
	}
</style>