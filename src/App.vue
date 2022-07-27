<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
/* import { reqBaseCategoryList } from "./api"; */


export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //异步获取首页三级分类
   /*  reqBaseCategoryList().then((result) => {
      console.log("result", result);
    }); */
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
    this.$store.dispatch('getTodayRecommend')
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getSkuDetailInfo')

  },
};
</script>

<style>
</style>
