<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="this.options.categoryName">
              {{ this.options.categoryName
              }}<i @click="removeCategoryName">×</i>
            </li>
            <li class="with-x" v-show="this.options.keyWord">
              {{ this.options.keyWord }}<i @click="removeKeyWord">×</i>
            </li>
            <li class="with-x" v-show="this.options.trademark">
              {{ this.options.trademark }}<i @click="removeTrademark">×</i>
            </li>
            <li class="with-x" v-for="(item,index) in this.options.props" :key="item">
              {{ item }}<i @click="removeProp(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :setTrademark='setTrademark' @addProp='addProp'/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active: orderArr[0] === '1'}" @click="setOrder('1')">
                  <a href="#">综合
                    <span class="iconfont" v-show="orderArr[0] === '1'" :class="orderArr[1] === 'desc' ? 'icon-jiantoushang' : 'icon-jiantouxia'"></span>
                  </a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li :class="{active: orderArr[0] === '2'}"  @click="setOrder('2')">
                  <a href="#">价格
                    <span class="iconfont" v-show="orderArr[0] === '2'" :class="orderArr[1] === 'desc' ? 'icon-jiantoushang' : 'icon-jiantouxia'"></span>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="'/detail/'+item.id">
                      <img v-lazy="item.imgURL">
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <router-link :to="`/detail/${item.title}`">
                      {{ item.title }}
                    </router-link>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <MyPagination 
          :currentPage='this.options.pageNo'
          :total='total'
          :pageSize='pageSize'
          :showPageNo='5'
          @currentChange='getShopList'
           />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapGetters } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      options: {
        // 包含所有用于搜索请求的可选参数属性的对象
        categoryId1: "", // 第1级分类ID
        categoryId2: "", // 第2级分类ID
        categoryId3: "", // 第3级分类ID
        categoryName: "", // 分类名称
        keyWord: "", // 搜索关键字
        pageNo: 1, // 当前页码
        pageSize: 5, // 每页数量
       /*  trademark: "",  */// 品牌条件   品牌ID:品牌名称,  4:小米   响应式数据
        props: [], // 多个属性条件    属性id:属性值:属性名 "2:6.65-6.74英寸:屏幕尺寸"
        order: "1:desc", // 排序条件  1: 综合,2: 价格 asc: 升序,desc: 降序   1:desc
      },
    };
  },
  /* created() {
    this.upDateParams();
    this.getShopList();
  }, */
  //监听路由变化
  watch: {
    $route: {
      //参数变化
      handler() {
        this.upDateParams();
        this.getShopList();
      },
      immediate: true //初始化式调用第一次
    },
  },
  methods: {
    //改变当前页码
    /* currentChange(page){
      this.options.pageNo = page
      this.getShopList()
    }, */
    //设置order值
    setOrder(orderFlag){
      console.log(orderFlag);
      let [flag,type] = this.orderArr
      //如果orderFlag === flag说明按的为同一个地方，只用改升降序
      if(flag === orderFlag){
        type = type === 'desc' ? 'asc' : 'desc'
      }else{
        flag = orderFlag
        type = 'desc'
      }
      this.options.order = flag+':'+type
      console.log(this.options.order);
      this.getShopList()
    },
    removeProp(index){
      this.options.props.splice(index,1)
      this.getShopList()
    },
    addProp(prop){
      if(this.options.props.includes(prop)) return
      this.options.props.push(prop)
      this.getShopList()
    },

    removeTrademark(){
      this.options.trademark = ''
      this.$delete(this.options,'trademark')
      this.getShopList()
    },
    //设置trademark
    setTrademark(trademark){
      if(trademark === this.options.trademark) return //重复点击跳转
      //更新设置trademark
      /* this.options.trademark = trademark */
      this.$set(this.options,'trademark',trademark)
      this.getShopList()
    },
    //移除标签
    removeCategoryName() {
      this.options.categoryId1 = "";
      this.options.categoryId2 = "";
      this.options.categoryId3 = "";
      this.options.categoryName = "";
      //重新跳转路由
      this.$router.replace({
        name: "search",
        params: this.$route.params,
      });
    },
    //移除关键字
    removeKeyWord() {
      this.options.keyWord = "";
      this.$router.replace({
        name: "search",
        query: this.$route.query,
      });
      this.$bus.$emit("removeKeyWord");
    },
    //更新option参数
    upDateParams() {
      //获取参数
      const { keyWord } = this.$route.params;
      const {
        categoryId1,
        categoryId2,
        categoryId3,
        categoryId4,
        categoryName,
      } = this.$route.query;
      //覆盖到option
      this.options = {
        ...this.options,
        keyWord,
        categoryId1,
        categoryId2,
        categoryId3,
        categoryId4,
        categoryName,
      };
    },
    //异步获取商品列表
    getShopList(page = 1) {
      this.options.pageNo = page
      this.$store.dispatch("getSearch", this.options);
    },
  },
  components: {
    SearchSelector,
  },
  computed: {
    /* ...mapState({
        goodsList :state => state.search.productList.goodsList || []
      }) */
    ...mapGetters(["goodsList",'total','pageSize','pageNo']),
    orderArr(){
      return this.options.order.split(':')
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>