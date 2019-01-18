<template>
	<div id="app">

		<!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <mt-button type="default">default</mt-button>
			<mt-button type="primary">primary</mt-button>
			<mt-button type="danger">danger</mt-button>
    </div>-->

		<router-view :hash.sync="selected" />
		<!--v-if="selected=='home'||selected=='cart'||selected=='user'"-->
		<!--<mt-tabbar v-model="selected" fixed v-if="selected=='home'||selected=='cart'||selected=='user'||selected=='classify'">
			<mt-tab-item id="home">
				<img v-if="selected=='home'" slot="icon" src="./assets/images/nav-icon-index.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-index.png"> 商城
			</mt-tab-item>
			<mt-tab-item id="classify">
				<img v-if="selected=='classify'" slot="icon" src="./assets/images/nav-icon-cat.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-cat.png"> 分类
			</mt-tab-item>
			<mt-tab-item id="cart">
				<img v-if="selected=='cart'" slot="icon" src="./assets/images/nav-icon-cart.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-cart.png"> 购物车
			</mt-tab-item>
			<mt-tab-item id="user">
				<img v-if="selected=='user'" slot="icon" src="./assets/images/nav-icon-user.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-user.png"> 我的
			</mt-tab-item>
		</mt-tabbar>-->
		<mt-tabbar v-model="selected" fixed v-if="selected=='home'||selected=='cart'||selected=='user'||selected=='classify'">
			<mt-tab-item id="home" @click.native="changeHash">
				<img v-if="selected=='home'" slot="icon" src="./assets/images/nav-icon-index.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-index.png"> 商城
			</mt-tab-item>
			<mt-tab-item id="classify" @click.native="changeHash">
				<img v-if="selected=='classify'" slot="icon" src="./assets/images/nav-icon-cat.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-cat.png"> 分类
			</mt-tab-item>
			<mt-tab-item id="cart" @click.native="changeHash">
				<img v-if="selected=='cart'" slot="icon" src="./assets/images/nav-icon-cart.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-cart.png"> 购物车
			</mt-tab-item>
			<mt-tab-item id="user" @click.native="changeHash">
				<img v-if="selected=='user'" slot="icon" src="./assets/images/nav-icon-user.active.png">
				<img v-else slot="icon" src="./assets/images/nav-icon-user.png"> 我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "App",
		data() {
			return {
				selected: "home"
			}
		},
		created() {
//			console.log(this.$router.currentRoute.name)
//			this.selected = this.$router.currentRoute.name
		},
		methods: {
			changeHash() {
				this.$router.push({
					name: this.selected
				})
			}
		},
		watch: {
//				selected(newV,oldV){
//					this.$router.push({
//						name: newV
//					})
//				}
		},

	};
</script>
<style lang="scss">
	.flex-x {
		display: flex;
		flex-direction: row;
	}
	
	.flex-y {
		display: flex;
		flex-direction: column;
	}
	
	html,
	body {
		height: 100%;
		background-color: #f8f8f8;
	}
	
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
		/*background-color: #f8f8f8;*/
		.tabbar {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}
	
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
	
	.mint-tab-item.is-selected .mint-tab-item-label {
		color: red;
	}
</style>