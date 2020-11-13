<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: { type: Number, default: 0 },
    pullUpLoad: { type: Boolean, default: false },
  },

  components: {},
  mounted() {
    // 创建scroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });

    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // 发出滚动事件
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      // 发出已到底部事件
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 封装滚动函数
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y);
    },
    // 封装滚动具体位置的函数
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    // 封装页面加载完成刷新的函数
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 封装上拉加载显示更多的函数
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>
<style  scoped>
</style>