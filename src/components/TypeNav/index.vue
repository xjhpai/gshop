<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideFirstList" @mouseenter="showFirstList">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShowFirstList">
            <div class="all-sort-list2">
              <div
                class="item bo"
                v-for="(c1, index) in categoryList.categoryList"
                :key="c1.categoryId"
                :class="{ active: index === currentIndex }"
                @mouseenter="showSubList(index)"
              >
                <h3>
                  <!-- 委派 -->
                  <a
                    href="javascript:"
                    @click="toSearch"
                    :data-categoryName="c1.categoryName"
                    :data-categoryId1="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- 编程式导航 -->
                  <!-- <a href="javascript:" @click="$router.push(`/search?categoryName=${c1.categoryName}&categoryId1=${c1.categoryId}`)">{{ c1.categoryName }}</a> -->
                  <!-- 声明式导航 -->
                  <!-- <router-link :to="`/search?categoryName=${c1.categoryName}&categoryId1=${c1.categoryId}`">{{ c1.categoryName }}</router-link> -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:"
                          @click="toSearch"
                          :data-categoryName="c2.categoryName"
                          :data-categoryId2="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <a href="javascript:" @click="$router.push(`/search?categoryName=${c2.categoryName}&categoryId2=${c2.categoryId}`)">{{ c2.categoryName }}</a> -->
                        <!-- <router-link :to="`/search?categoryName=${c2.categoryName}&categoryId2=${c2.categoryId}`">{{ c2.categoryName }}</router-link> -->
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:"
                            @click="toSearch"
                            :data-categoryName="c3.categoryName"
                            :data-categoryId3="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <a href="javascript:" @click="$router.push(`/search?categoryName=${c3.categoryName}&categoryId3=${c3.categoryId}`)">{{ c3.categoryName }}</a> -->
                          <!-- <router-link :to="`/search?categoryName=${c3.categoryName}&categoryId3=${c3.categoryId}`">{{ c3.categoryName }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
/* import _ from "lodash" */
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -2,
      isShowFirstList: false,
    };
  },

  computed: {
    /* categoryList(){
        return this.$store.state.home.categoryList
    } */
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  created() {
    const path = this.$route.path;
    console.log(path);
    if (path == "/") {
      this.isShowFirstList = true;
    }
    console.log(this.isShowFirstList);
  },
  methods: {
    /* 隐藏一级列表 */
    hideFirstList() {
      this.currentIndex = -2;
      if (this.$route.path !== "/") {
        this.isShowFirstList = false;
      }
    },
    /* 显示一级列表 */
    showFirstList() {
      this.currentIndex = -1;
      this.isShowFirstList = true;
    },
    /* 跳转到/search */
    toSearch(event) {
      this.isShowFirstList = false;
      const target = event.target;
      console.dir(target);
      if (target.tagName.toUpperCase() === "A") {
        const { categoryname, categoryid1, categoryid2, categoryid3 } =
          target.dataset;
        console.log(categoryname, categoryid1, categoryid2, categoryid3);

        const query = {
          categoryName: categoryname,
        };

        if (categoryid1) {
          query.categoryId1 = categoryid1;
        } else if (categoryid2) {
          query.categoryId2 = categoryid2;
        } else if (categoryid3) {
          query.categoryId3 = categoryid3;
        }
        const location = {
          name: "search",
          params: this.$route.params,
          query,
        };
        if (this.$route.name === "search") {
          this.$router.replace(location);
        } else {
          this.$router.push(location);
        }
      }
    },
    /* 显示对应下标的子列表   节流throttle*/
    showSubList: throttle(function (index) {
      if (this.currentIndex !== -2) {
        this.currentIndex = index;
      }
    }, 200),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.slide-enter-alive,
      &.slide-leave-active {
        transition: all 0.5s;
      }
      &.slide-enter,
      &.slide-leave-to {
        opacity: 0;
        height: 0;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
