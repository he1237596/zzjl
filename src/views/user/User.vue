<template>
	<div class="my-center">
		<div class="user-panel">
			<div class="user-info">
				<div class="user-info-left">
					<img src="../../assets/images/user.png"/>
					<!--<div>个人头像</div>-->
				</div>
				<div class="login">登录/注册</div>
			</div>
			<div class="address">收货地址</div>
		</div>
		<div class="orders-panel">
			<div class="orders-head"><span class="my-order">我的订单</span><span class="all-order">查看全部订单</span></div>
			<div class="orders-items">
				<div class="orders-item"><img src="../../assets/images/icon-order-0.png"/><span class="order-type">待付款</span></div>
				<div class="orders-item"><img src="../../assets/images/icon-order-1.png"/><span class="order-type">待发货</span></div>
				<div class="orders-item"><img src="../../assets/images/icon-order-2.png"/><span class="order-type">待收货</span></div>
				<div class="orders-item"><img src="../../assets/images/icon-discuss.png"/><span class="order-type">待评价</span></div>
				<div class="orders-item"><img src="../../assets/images/icon-order-4.png"/><span class="order-type">售后</span></div>
			</div>
		</div>
		<div class="options-wrap">
			<ul class="options-items">
				<li class="options-item">
					<div class="icon-wrap">
						<img src="../../assets/images/icon-vip.png" alt="" />
						<span class="item-text">
							会员中心
						</span>
					</div>
					<div class="link-icon">
						<img src="../../assets/images/right-arrow.png" />
					</div>
				</li>
				<li class="options-item">
					<div class="icon-wrap">
						<img src="../../assets/images/icon-user-fav.png" alt="" />
						<span class="item-text">
							我的收藏
						</span>
					</div>
					<div class="link-icon">
						<img src="../../assets/images/right-arrow.png" />
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "user",
		data() {
			return {

			}
		},
		created() {
//			this.$toast({
//				message: 'loading...',
//				duration: 3000
//			});
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.my-center{
	font-size: 28px;

.user-panel{
	height: 280px;
	display: flex;
	align-items: center;
	background: #fff url(../../assets/images/img-user-bg.png) 0 0 no-repeat;
	.user-info{
		flex: 1;
		text-align: left;
		padding-left: 24px;
		display: flex;
		align-items: center;
		.user-info-left{
			width: 120px;
		}
		.login{
			padding: 4px 12px;
			font-size: 28px;
			color: #fff;
			
		}
	}
	.address{
		width: 200px;
		height: 80px;
		background-color: #fdb740;
		border-radius:  40px 0 0 40px;
		line-height: 80px;
		color: #FFFFFF;
	}
}
.orders-panel{
	background-color: #fff;
		font-size: 28px;
	
	.orders-head{
		height: 80px;
		line-height: 80px;
		display: flex;
		justify-content: space-between;
		padding: 0 24px;
		border-bottom: 1px solid #ccc;
	}
	.orders-items{
		display: flex;
		padding: 24px 0;
		margin-bottom: 24px;
		.orders-item{
			flex: 1;
			font-size: 24px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items:center;
			img{
				width: 80px;
				height: 80px;
			}
			.order-type{
				height: 32px;
				line-height: 32px;
				padding: 6px 0;
			}
		}
	}
}
	.options-wrap {
		background-color: #fff;
		.options-items {
			padding: 0 24px;
			.options-item {
				text-align: left;
				display: flex;
				justify-content: space-between;
				padding: 20px 0;
				box-sizing: border-box;
				justify-content: space-between;
				border-bottom: 1px solid #ccc;
				align-items: center;
				img {
					width: 16px;
					height: 30px;
				}
				.icon-wrap {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 28px;
					.item-text {
						padding-left: 12px;
					}
					img {
						width: 48px;
						height: 48px;
					}
				}
			}
		}
	}
	
	.item-left {
		text-align: left;
	}
	}
</style>