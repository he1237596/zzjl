<template>
	<router-link :to="{name:'goods.detail',params:{goodsId:item.itemId}}" tag="div">
		<div class="item-wrap">
			<div class="item-img-wrap">
				<img :src="item.goodsPic" alt="" />
			</div>
			<div v-text="item.title" class="item-text">

			</div>
			<div v-text="item.subtitle" class="item-text item-text-red">

			</div>
			<div class="item-text item-text-red">
				￥<span v-text="item.salePrice" class="item-price"></span>
			</div>
			<div class="item-text item-volume">
				销量:<span v-text="item.volume"></span> 好评率:
				<span v-text="item.evalGoodRate?item.evalGoodRate:100"></span>%
			</div>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: "ListRow",
		props: {
			item: {
				type: Object,
				default: function() {
					return {}
				}
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.item-wrap {
		padding: 20px 24px;
		img {
			width: 262px;
			height: 262px;
		}
		.item-text {
			height: 38px;
			line-height: 38px;
			@include text1-overflow;
			text-align: left;
			.item-price {
				font-size: 28px;
			}
			&.item-volume {
				font-size: 20px;
				color: #999;
			}
		}
		.item-text-red {
			@include red-fontstyle;
		}
	}
	

</style>