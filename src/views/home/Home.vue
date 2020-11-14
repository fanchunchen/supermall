<!--  -->
<template>
  <div id="home">
    <tab-control
      ref="tabControl2"
      v-show="isFixed"
      @itemClick="tabClick"
      :titles="titles"
      class="tab"
    ></tab-control>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      ref="scroll"
      @scroll="scroll"
      :pull-up-load="true"
      :probe-type="3"
      class="content"
      @pullingUp="loadMore"
      ><home-swiper
        @swiperImageLoad="swiperImageLoad"
        :banners="banners"
      ></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tabControl1"
        @itemClick="tabClick"
        :titles="titles"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list
    ></scroll>
    <back-top v-show="isShow" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "../home/childComps/HomeSwiper";
import RecommendView from "../home/childComps/RecommendView";
import FeatureView from "../home/childComps/FeatureView";
import GoodsList from "components/content/goods/GoodSList";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "home",
  data() {
    return {
      //轮播图数据
      banners: [],
      //推荐数据
      recommend: [],
      //tabControl标题
      titles: ["流行", "新款", "精选"],
      //tabControl下的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      //变量保留滚动的距离
      saveY: 0,
      tabOffsetTop: 0,
      isFixed: false,
    };
  },
  created() {
    // 请求轮播图和推荐数据
    this.getHomeMultidata();
    // 请求tabcontrol中的数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  mounted() {
    // 事件总线让组件渲染完成以后刷新确保滚动没有问题
    this.$bus.$on("imageLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  destroyed() {
    console.log(1);
  },
  deactivated() {
    // 离开时记录滚动位置
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },
  activated() {
    // 回来时滚动到离开位置
    this.$refs.scroll.scrollTo(0, this.saveY);
    // 刷新防止滚动异常
    this.$refs.scroll.refresh();
  },

  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // 将轮播图和推荐数据传给组件
        this.banners = res.data.banner.list;
        // console.log(this.banners)
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 获取数据时就让页码变成1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        // 将数据添加到变量中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      // 点击标题显示对应标题下面的数据
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    scroll(position) {
      // 动态控制返回顶部按钮的变量是否为真
      this.isShow = Math.abs(position.y) > 1000;
      this.isFixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    loadMore() {
      // 上拉加载更多
      this.getHomeGoods(this.currentType);
    },

    imgLoad() {
      // 事件总线让标题下的数据刷新达到正常滚动的效果
      this.$bus.$on("imageload", () => {
        this.$ref.scroll.refresh();
      });
    },
    backTopClick() {
      // 回到顶部按钮
      this.$refs.scroll.scrollTo(0, 0);
    },
    swiperImageLoad() {
      // console.log(1);
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
  },

  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
  },
};
</script>
<style  scoped>
#home {
  position: relative;

  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.tab {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
}
</style>