<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend/>
    <Rank />
    <Like />
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import Brand from "./Brand/Brand.vue";
import Floor from "./Floor/Floor.vue";
import Like from "./Like/Like.vue";
import ListContainer from "./ListContainer/ListContainer.vue";
import Rank from "./Rank/Rank.vue";
import TodayRecommend from "./TodayRecommend/TodayRecommend.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend,
  },
  computed: {
    ...mapState({ floors: (state) => state.home.floors }),
    
  },
  data() {
    return {};
  },
  props: [],

  methods: {},
};
</script>

<style  scoped>
</style>