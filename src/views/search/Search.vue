<template>
	<div class="page">
		<div class="search-wrap">
			<form target="frameFile" v-on:submit.prevent="">
				<mt-search v-model="keyword" cancel-text="取消" placeholder="搜索" @keyup.enter.native="reSearch(keyword)" @focus.native.capture="isShow=true" @blur.native.capture="isShow=false" :show="isShow">
					<div class="search-panel" v-show="isShow">
						<div class="search-panpel-title" v-if="hotList.length>0">热门搜索<span class="change-items" @click.stop="getHotList">换一批</span></div>
						<div class="search-items">
							<span v-for="(item,index) in hotList" :key="index" v-text="item.title" @click="reSearch(item.title)"></span>
						</div>
						<div class="search-panpel-title">历史搜索<span class="delete-items" @click="clearHistory">清除</span></div>
						<div class="search-items" v-if="historyList.length>0">
							<span v-for="(item,index) in historyList" :key="index" v-text="item" @click="reSearch(item)"></span>
						</div>
						<div v-else class="no-more">
							暂无数据
						</div>
					</div>

				</mt-search>
			</form>
			<iframe name='frameFile' style="display: none;"></iframe>
		</div>
		<!--<goods-list v-show="!isShow" :keyword=keyword></goods-list>-->
		<div class="goods-wrap" v-show="!isShow">
			<ul class="goods" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
				<li v-for="(item, index) in goodsList" :key="index" class="goods-item" v-if="goodsList.length>0">
					<list-row :item="item"></list-row>
				</li>
			</ul>
			<!--goodsList.length==0-->

			<div class="no-more" v-if="goodsList.length>0&&noMore">没有更多数据...</div>
			<div class="loading" v-if="loading">
				<mt-spinner type="triple-bounce" color="rgb(100, 100, 100)"></mt-spinner>

			</div>
		</div>
		<div class="no-search-result" v-if="goodsList.length==0&&!isShow">暂无数据</div>
		
	</div>
</template>

<script>
	import ListRow from "@/components/ListRow.vue";
	export default {
		name: "search",
		data() {
			return {
				goodsList: [],
				pageNum: 1,
				pageSize: 10,
				noMore: false,
				loading: false,
				selectType: 1,
				keyword: "",
				historyList: [],
				isShow: true,
				hotList: []
			}
		},
		created() {

			if(this.$route.params.cateId){
				this.isShow = false;
				this.getList();
			}
				this.getHotList();

			
		},
		methods: {
			getHotList() {
//				this.isShow = true;
				this.$http.post(this.api.default.get_hot_search, {}).then(res => {
					if(res.code == 10000) {
						var data = JSON.parse(res.data);
						for(var i = 0; i < data.length; i++) {
							data[i].title = data[i].title.substring(0, 20)
						}
						this.hotList = data;
					}
				}, err => {})
			},
			refreshHotList() {
				this.getHotList();
			},
			setHistory(keyword) {
				console.log(keyword)
				var historyList = JSON.parse(sessionStorage.getItem('historyList')) || [];
				console.log(historyList)
				if(historyList.indexOf(keyword) >= 0) {
					historyList.splice(keyword, 1)
				}
				if(keyword !== "")
					historyList.unshift(keyword)
				if(historyList.length >= 15) {
					historyList = historyList.slice(0, 15)
				}
				this.historyList = historyList;
				sessionStorage.setItem('historyList', JSON.stringify(historyList));

			},
			clearHistory() {
				sessionStorage.removeItem('historyList');
				this.historyList = [];
			},
			reSearch(title) {
				this.pageNum = 1;
				this.goodsList = [];
				this.noMore = false;
				this.loading = false;
//				this.keyword = title;
				this.isShow = false;
				this.loadMore();

			},
			loadMore() { // 加载更多
				if(this.noMore) return;
				this.isMoreLoading = true // 设置加载更多中
				this.loading = true // 加载中
				setTimeout(() => {
					this.getList()
				}, 100)
			},
			getList() {
				this.setHistory(this.keyword);
				this.$http.post(this.api.default.goods_list, {
					page: {
						"pageNum": this.pageNum,
						"pageSize": this.pageSize
					},
					cateId: this.$route.params.cateId,
					selectType: this.selectType,
					title: this.keyword,
					"belongOneDistriId": "cf1ce74f-6fec-42f0-b28d-acb3e2fc8831",
					"userId": "6bc57b3b-532b-4202-af6c-fe033da3151d"
				}).then(res => {
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
		},
		//		created() {
		//
		//				this.$http.post(this.api.default.goods_list, {
		//					cateId: this.$route.params.cateId || "",
		//					page: this.page,
		//					selectType: this.selectType,
		//					title: this.keyword,
		//					//      	belongOneDistriId: sessionStorage.getItem("belongOneDistriId")
		//					belongOneDistriId: "cf1ce74f-6fec-42f0-b28d-acb3e2fc8831",
		//					userId: "6bc57b3b-532b-4202-af6c-fe033da3151d"
		//				}).then(res => {
		//					if(res.code == 10000) {
		//						this.goodsList = res.data;
		//					}
		//				}, err => {
		//
		//				})
		//			}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100%;
.no-search-result{
	position: absolute;
	margin: auto;
	width: 100px;
	height: 40px;
	line-height: 40px;
	top:0;
	bottom:0;
	left: 0;
	right: 0;
	color:#999;
}
.no-more{
	color: #999;
}
		.search-panpel-title {
			color: #ff464e;
			text-align: left;
			padding-bottom: 20px;
			.change-items {
				float: right;
				color: #999;
			}
			.delete-items {
				float: right;
				color: #999;
			}
		}
		.search-panel {
			padding: 24px;
			font-size: 28px;
			.search-items {
				display: flex;
				flex-wrap: wrap;
				text-align: left;
				span {
					border: 1px solid #000;
					/*no*/
					margin: 0 20px 12px 0;
					border-radius: 10px;
					padding: 0 10px;
					line-height: 36px;
				}
			}
		}
		.mint-search {
			height: auto;
		}
		.goods-wrap {
			padding-bottom: 140px;
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
</style>