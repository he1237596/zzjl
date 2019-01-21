<template>
	<div class="container">
		<div class="goods-detail">
			<div class="top">
				<span class="go-back" @click="goBack"><i class="iconfont icon-fanhui"></i></span>
				<span class="cart-nav"><i class="iconfont icon-gouwuche1"></i></span>
			</div>
			<div class="swiper">
				<mt-swipe :auto="0">
					<mt-swipe-item v-for="(item, index) in swiperImgs" :key="index">
						<img :src="item.picPath" alt="">
					</mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="goods-info">
				<div class="goods-title">
					{{goods.title}}
				</div>
				<div class="goods-subtitle">
					{{goods.subtitle}}
				</div>
				<div class="price-items">
					<span class="sale-price">￥{{goods.salePrice}}</span><span class="vip-price">vip: {{goods.vipMemberPrice}}</span>
				</div>
				<div class="check-list">
					<div class="check-item"><img src="../../assets/images/icon-check.png" alt="" /> 运费 :{{goods.shippingFee>0?goods.shippingFee+"元":"包邮"}}</div>
					<div class="check-item"><img src="../../assets/images/icon-check.png" alt="" /> 库存 :{{goods.inventory}}</div>
					<div class="check-item"><img src="../../assets/images/icon-check.png" alt="" /> 销量 :{{goods.volume}}</div>
				</div>
			</div>
			<div @click="showAttrPicker" class="flex-row flex-y-center standard ">
				<div class="flex-grow-1 flex-row flex-y-center">
					<span class="standard-text">选择</span>
					<span class="standard-value">333{{str}}</span>
					
				</div>
				<div class="flex-grow-0">
					<span class="iconfont icon-more"></span>
				</div>
			</div>
		</div>
		<!--选择款式弹出框(二级弹框）  -->
		<div class="attr-picker" v-if="showModal">
			<div class="content-box">
				<div class='flex-row goodsboxtop'>
					<div class="goodsboxtopLeft flex-grow-0">
						<img mode="aspectFill" style="width: 200px;height: 200px" :src="goods.goodsPic[0].picPath" />
					</div>
					<!--<div class='goodsboxtopRight flex-grow-1'>
		        <div class="goods-name">{{goods.title}}</div>
		        <div class="flex-row">
		          <div v-if="{{userType==2&&memberLevel}}" style="color:#ff4544">￥{{specsConfigDetail?specsConfigDetail.vipMemberPrice:goods.vipMemberPrice}} </div>
		          <div v-else-if="{{userType==5}}" style="color:#ff4544">￥{{specsConfigDetail?specsConfigDetail.bprices:goods.bprices}} </div>
		          <div v-else-if="{{userType==4}}" style="color:#ff4544">￥{{specsConfigDetail?specsConfigDetail.fictitiousDistriPrice:goods.fictitiousDistriPrice}} </div>
		          <div v-else-if="{{userType==3}}" style="color:#ff4544">￥{{specsConfigDetail?specsConfigDetail.distriPrice:goods.distriPrice}} </div>
		          <div v-else style="color:#ff4544">￥{{specsConfigDetail?specsConfigDetail.salePrice:goods.salePrice}} </div>
		        </div>
		        <div style="color:#999">库存: {{specsConfigDetail?specsConfigDetail.inventory:goods.inventory}}</div>
		        <div style="color:#999;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">已选: {{str}}</div>
		      </div>-->
				</div>
				<!--<div class="attr-group" v-for="(item,index) in goods_spec_config" wx:for-item="attr_group" :key="idx" v-if="{{attr_group.specValues.length>0}}">
		      <div class="attr-group-name">{{attr_group.name}}</div>
		      <div class="attr-list">
		        <text class="attr-item {{item.checked?'active':''}}" wx:for-index="idxx" data-cid="{{idxx}}" data-name="{{item.name}}" data-index="{{idx}}" wx:for="{{attr_group.specValues}}" bindtap="menuClick" data-groupid="{{attr_group.specId}}" data-attrid="{{item.id}}">{{item.name}}</text>
		      </div>
		    </div>-->

				<!--<div class="change-buy-number flex-row">
		      <text style="flex-grow-1">购买数量</text>
		      <div class="change-buy-number-box flex-grow-0 flex-row number-input-box">
		        <text class="flex-grow-0 number-btn number-sub" bindtap="numberSub">-</text>
		        <input class="flex-grow-1 number-input" value="{{form.number}}" type="number" step="1" min="1" confirm-type="done" bindblur="numberBlur" />
		        <text class="flex-grow-0 number-btn number-add" bindtap="numberAdd">+</text>
		      </div>
		    </div>-->

				<div class="cancelBtn flex-grow-0" style="overflow: visible">
					<div bindtap="hideAttrPicker" style="display:inline-block;padding: 20px;">
						<img style="width: 30px;height: 30px" src="../../assets/images/icon-close.png" />
					</div>
				</div>
			</div>
		</div>

		<div class="flex-row bar-bottom">
			<router-link tag="div" class="flex-grow-0 flex-y-center bar-bottom-btn" :to="{name:'home'}">
				<div>
					<div>
						<img src="../../assets/images/icon-store.png" />
					</div>
					<div>首页</div>
				</div>
			</router-link>

			<div v-if="goods.isFavorite && goods.isFavorite==1" class="flex-grow-0 flex-y-center bar-bottom-btn" bindtap="favoriteRemove">
				<div style="overflow: visible">
					<div>
						<img src="../../assets/images/icon-favorite-active.png" />
					</div>
					<div style="margin: 0 -12px">已收藏</div>
				</div>
			</div>

			<div v-else class="flex-grow-0 flex-y-center bar-bottom-btn" bindtap="favoriteAdd">
				<div>
					<div>
						<img src="../../assets/images/icon-favorite.png" />
					</div>
					<div>收藏</div>
				</div>
			</div>
			<div class="flex-grow-1 flex-y-center flex-x-center add-cart" bindtap="addCart">加入购物车</div>
			<div class="flex-grow-1 flex-y-center flex-x-center buy-now" bindtap="buyNow">立即购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "detail",
		data() {
			return {
				swiperImgs: [],
				goods: {},
				str: "",
				showModal: false
			}
		},
		created() {
			this.imgLoaded();
		},
		methods: {
			imgLoaded() {

				this.$http.post(this.api.default.goodsDetail, {
					itemId: this.$route.params.goodsId
				}).then(res => {
					if(res.code == 10000) {
						var goods = JSON.parse(res.data)
						console.log(goods)
						var swiperImgs = goods.goodsPic
						if(goods.vedioPath) {
							swiperImgs.unshift(swiperImgs[0]);
						}

						this.goods = goods;
						this.goods_spec_config = JSON.parse(goods.specsConfig);
						this.params_config = JSON.parse(goods.paramsConfig);
						this._goodsSpecsPriceList = goods.goodsSpecsPriceList;
						this.swiperImgs = swiperImgs;

					}
				})
			},
			goBack() {
				this.$router.go(-1);
			},
			showAttrPicker() {
				this.showModal = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
	}
	
	.flex-grow-1 {
		flex-grow: 1;
	}
	
	.flex-row {
		display: flex;
		flex-direction: row;
	}
	
	.flex-y-center {
		display: flex;
		align-items: center;
	}
	
	.flex-x-center {
		display: flex;
		justify-content: center;
	}
	
	.goods-detail {
		padding-bottom: 110px;
		.top {
			display: flex;
			justify-content: space-between;
			padding: 32px 24px 12px;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 999;
			width: 100%;
			line-height: 64px;
			.iconfont {
				font-size: 36px;
				color: #fff;
			}
			.go-back {
				width: 64px;
				height: 64px;
				border-radius: 55px;
				background-color: rgba(0, 0, 0, 0.4);
			}
			.cart-nav {
				width: 64px;
				height: 64px;
				background-color: rgba(0, 0, 0, 0.4);
				border-radius: 55px;
				box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
				z-index: 100;
			}
		}
		.swiper {
			height: 750px;
			width: 100%;
			background-color: #f0f0f0;
			img {
				height: 100%;
				width: 100%;
			}
		}
		.goods-info {
			font-size: 28px;
			background-color: #f8f8f8;
			text-align: left;
			.goods-title {
				/*font-weight: bold;*/
				background-color: #fff;
				padding: 12px 24px 0;
			}
			.goods-subtitle {
				padding: 0 24px;
				font-size: 24px;
				background-color: #fff;
				color: $red;
				padding-bottom: 12px;
			}
			.price-items {
				background-color: #fff;
				padding: 0 24px 12px;
				color: $red;
				border-bottom: 1px solid #eee;
				span {
					margin-right: 24px;
					&.vip-price {
						border: 2px solid $red;
						border-radius: 6px;
						padding: 0 6px;
					}
				}
			}
			.check-list {
				background-color: #fff;
				font-size: 24px;
				display: flex;
				margin-bottom: 20px;
				.check-item {
					flex: 1;
					padding-left: 24px;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					height: 80px;
					line-height: 80px;
					img {
						width: 34px;
						height: 34px;
					}
				}
			}
		}
		.standard {
			/*display: flex;*/
			background: #fff;
			padding: 0 24px;
			margin-bottom: 20px;
			height: 100px;
			font-size: 24px;
			.standard-text {
				width: 60px;
				
			}
			.standard-value {
				padding: 0 20px;
				color: #888888;
				flex: 1;

			}
			.iconfont {}
		}
	}
	
	.bar-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		box-shadow: 0 0 3px rgba(0, 0, 0, .2);
		height: 120px;
		color: #fff;
		text-align: center;
		.bar-bottom-btn {
			background: #fff;
			border-left: 1px solid #e3e3e3;
			font-size: 24px;
			color: #888;
			padding: 0 32px;
			text-align: center;
			img {
				width: 42px;
				height: 42px;
			}
		}
		.add-cart {
			background: #f39800;
			font-size: 32px;
		}
		.buy-now {
			background: #ff4544;
			font-size: 32px;
		}
	}
	
	.attr-picker {
		position: fixed;
		bottom: 120px;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}
	
	.attr-picker .content-box {
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 100px;
		padding: 0 24px 30px;
	}
	
	.goods-name {
		height: 76px;
		line-height: 38px;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden!important;
	}
	
	.attr-picker .attr-group {
		margin-bottom: 6px;
	}
	
	.attr-picker .attr-group-name {
		padding: 6px 0;
		font-size: 28px;
	}
	
	.attr-picker .attr-item {
		display: inline-block;
		margin: 0 30px 30px 0;
		background: #f7f7f7;
		border-radius: 10px;
		padding: 15px 30px;
		font-size: 24px;
	}
	
	.attr-picker .attr-item.active {
		background: #ff4544;
		color: #fff;
	}
</style>