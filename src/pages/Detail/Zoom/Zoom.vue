<template>
  <div class="spec-preview">
    <img :src="defaultImage.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big" >
      <img :src="defaultImage.imgUrl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      defaultIndex: 0,
    };
  },
  mounted() {
    this.$bus.$on("syncDefaultIndex", this.syncDefaultIndex);
  },
  computed: {
    //解决假报错
    defaultImage() {
      return this.skuImageList[this.defaultIndex] || {};
    },
  },
  methods: {
    syncDefaultIndex(index) {
      this.defaultIndex = index;
    },
    move(event) {
      let mouseX = event.offsetX;
      let mouseY = event.offsetY;

      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let maskX = mouseX - mask.offsetWidth / 2;
      let maskY = mouseY - mask.offsetHeight / 2;

      if (maskX < 0) {
        maskX = 0;
      }else if(maskX>mask.offsetWidth){
        maskX = mask.offsetWidth
      }
      if (maskY < 0) {
        maskY = 0;
      }else if(maskY>mask.offsetHeight){
        maskY = mask.offsetTop
      }
      
      mask.style.left = maskX + "px";
      mask.style.top = maskY + "px";

      big.style.left = -maskX*2 + "px";
      big.style.top = -maskY*2 + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>