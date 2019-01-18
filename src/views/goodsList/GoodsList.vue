<template>
		<div class="goods-wrap">
			<ul class="goods" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="510">
				<li v-for="(item, index) in goodsList" :key="index" class="goods-item">
					<list-row :item="item"></list-row>

				</li>
			</ul>
			<div class="no-more" v-if="noMore">我是有底线的</div>
			<div class="loading" v-if="loading">拼命加载中...</div>
		</div>
</template>

<script>
	import ListRow from "@/components/ListRow.vue";
	export default {
		name: "GoodsList",
		data() {
			return {
				goodsList: [],
				pageNum: 1,
				pageSize: 10,
				noMore: false,
				loading: false,
				data: this.params
			}
		},
		prop:{params: Object},
		created(){
			console.log(this.$route.params.cateId)
		},
		methods: {
			loadMore() { // 加载更多
				if(this.noMore) return;
				this.isMoreLoading = true // 设置加载更多中
				this.loading = true // 加载中
				setTimeout(() => {
					this.getList()
				}, 100)
			},
			getList() {
				var page = {
						"pageNum": this.pageNum,
						"pageSize": this.pageSize
				};
				console.log(data)
				this.$http.post(this.api.default.goods_list, 
					Object.assign(page,this.data)).then(res => {
					if(res.code == 10000) {
						this.pageNum += 1; // 增加分页
						this.loading = false; // 关闭加载中
						this.isMoreLoading = false;
						if(res.data.length < this.pageSize) {
							this.noMore = true // 显示没有更多了
						}
						this.goodsList = this.goodsList.concat(res.data);
					}
				}, err => {

				})
			}
		},
		components: {
			ListRow
		}
	}
</script>

<style lang="scss" scoped>
		.goods-wrap {
			padding-bottom: 112px;
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
</style>