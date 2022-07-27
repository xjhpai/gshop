<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage === 1"
      :class="{ disabled: myCurrentPage === 1 }"
      @click="setMyCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button v-if="startEnd.start !== 1" @click="setMyCurrentPage(1)">1</button>
    <button disabled v-if="startEnd.start > 2">...</button>
    <button
      v-for="item in startEndArr"
      :key="item"
      :class="{ active: myCurrentPage === item }"
      @click="setMyCurrentPage(item)"
    >
      {{ item }}
    </button>

    <!-- <button>4</button>
    <button class="active">5</button>
    <button>6</button>
    <button>7</button> -->
    <button disabled v-if="startEnd.end < totalPage - 1">...</button>
    <button
      v-if="startEnd.end !== totalPage"
      @click="setMyCurrentPage(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="myCurrentPage === totalPage"
      :class="{ disabled: myCurrentPage === totalPage }"
      @click="setMyCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button class="disabled">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "MyPagination",

  props: {
    /* :currentPage='this.options.pageNo'
          :total='total'
          :pageSize='this.options.pageSize'
          :showPageNo='3'
          @click="currentChange" */
    /* 当前页码 */
    currentPage: {
      type: Number,
      default: 1,
    },
    /* 总数 */
    total: {
      type: Number,
      default: 0,
    },
    /* 每页显示个数 */
    pageSize: {
      type: Number,
      default: 3,
    },
    /* 连续页码数 */
    showPageNo: {
      type: Number,
      default: 5,
      //限定为奇数
      validator: function (value) {
        return value % 2 === 1;
      },
    },
  },

  data() {
    return {
      /* 将传入当前页码作为内部的当前页码 */
      myCurrentPage: this.currentPage || 1,
      /* isShow:true */
    };
  },
  watch: {
    currentPage(value) {
      this.myCurrentPage = value;
    },
  },

  computed: {
    startEndArr() {
      const arr = [];
      let { start, end } = this.startEnd;
      for (let page = start; page <= end; page++) {
        arr.push(page);
      }
      return arr;
    },
    /* 总页数 */
    totalPage() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    /* 连续页码数的start end */
    startEnd() {
      const { myCurrentPage, showPageNo, totalPage } = this;

      let start, end;
      /* 
        myCurrentPage,showPageNo,totalPage
             4            5          8              23[4]56
      */
      start = myCurrentPage - (showPageNo - 1) / 2; // 4-(5-1)/2 = 2
      /* 
        myCurrentPage,showPageNo,totalPage
             2            5          8              1[2]345
      */
      if (start < 1) {
        // 2-(5-1)/2 = 0
        start = 1;
      }
      /* 修正end */
      end = start + showPageNo - 1; // 1+5-1 = 5
      /* 
        myCurrentPage,showPageNo,totalPage
             7            5          8              456[7]8
      */
      if (end > totalPage) {
        end = totalPage;
        /* 修正start */
        start = end - showPageNo + 1;
        /* 
          myCurrentPage,showPageNo,totalPage
             7            5          8             123[4]
        */
        if (start < 1) {
          start = 1;
        }
      }
      return {
        start,
        end,
      };
    },
  },

  methods: {
    setMyCurrentPage(page) {
      if (page === this.myCurrentPage) return;
      this.myCurrentPage = page;
      this.$emit("currentChange", page);
      console.log(page);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &.disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>