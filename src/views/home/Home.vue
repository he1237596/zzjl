<template>
    <div class="home">
        <div class="search">
            <div class="search-wrap">
                <span class="search-btn">搜索</span>
            </div>
        </div>
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item, index) in swiperLsit" :key="index">
                    <img :src="item.adPicPath" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";

    export default {
        name: "home",
        components: {
            HelloWorld
        },
        data(){
            return {
                todo: {},
                swiperLsit: []
            }
        },
        created(){
            console.log(11111111)
            this.$http.post("/distributorGoods/getList", {
                page: {"pageNum": 2, "pageSize": 10},
                "belongOneDistriId": "",
                "userId": ""
            })

            var swiperParams = {
                belongOneDistriId: sessionStorage.getItem("belongOneDistriId")
            };
            this.$http.post(this.api.index.swiper, swiperParams).then(res => {
                this.swiperLsit = JSON.parse(res.data)
            }, err => {

            });
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        position: relative;
    }

    .search {
        height: 80px;
        padding: 8px 20px;
        position: fixed;
        width: 100%;
        background-color: red;

    .search-wrap {
        border-radius: 4px;
        background-color: #fff;
        height: 64px;
        line-height: 64px;
    }

    }
    .banner {
        padding-top: 80px;
        height: 420px;
        width: 100%;
        background-color: #f0f0f0;
    }
</style>