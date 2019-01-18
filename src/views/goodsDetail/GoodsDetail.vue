<template>
	<div class="container">
		<div class="goods-detail">
			<div class="top">
				<span>back</span>
				<span>购物车</span>
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
					<div class="check-item"><img src="../../assets/images/icon-check.png" alt="" /> 运费</div>
					<div class="check-item"><img src="../../assets/images/icon-check.png" alt="" /> 库存</div>
					<div class="check-item"><img src="../../assets/images/icon-check.png" alt="" /> 销量</div>
				</div>
			</div>
			<div @click="showAttrPicker" class="flex-row flex-y-center standard">
				<div class="flex-grow-1 flex-row flex-y-center">
					<span>选择</span>
					<span style="margin-left: 20px;color: #888888;background: 888;">{{str}}</span>
				</div>
				<div class="flex-grow-0">
					<image style="width: 16px;height: 26px;" src="../../assets/images/icon-jiantou-r.png" />
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
	</div>
</template>

<script>
	export default {
		name: "detail",
		data() {
			return {
				swiperImgs: [],
				goods: {},
				str:"",
				showModal:false
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
			showAttrPicker(){
				this.showModal = true
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
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
	
	.goods-detail {
		padding-bottom: 110px;
		.top {
			display: flex;
			justify-content: space-between;
			padding: 12px 24px;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 999;
			width: 100%;
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
				span {
					padding-right: 24px;
				}
				border-bottom: 1px solid #eee;
				/*no*/
			}
			.check-list {
				background-color: #fff;
				font-size: 24px;
				display: flex;
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
			}
	}
.attr-picker{
    position: fixed;
    bottom: 120px;
    left: 0;
    
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}

.attr-picker .content-box{
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 100px;
    padding: 0 24px 30px;
}
.goods-name{
    height: 76px;
    line-height: 38px;
    -webkit-line-clamp:2;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    overflow:hidden!important;
}
.attr-picker .attr-group{
    margin-bottom: 6px;
}
.attr-picker .attr-group-name{
    padding: 6px 0;
    font-size: 28px;
}
.attr-picker .attr-item{
    display: inline-block;
    margin: 0 30px 30px 0;
    background: #f7f7f7;
    border-radius: 10px;
    padding: 15px 30px;
    font-size: 24px;
}

.attr-picker .attr-item.active{
    background: #ff4544;
    color: #fff;
}
</style>