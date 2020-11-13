<!--  -->
<template>
  <div class="home-swiper">
    <swiper
      ><swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link"
          ><img @load="imageLoad" :src="item.image" alt="" /></a></swiper-item
    ></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return { isLoad: false };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad=true
      }
    },
  },

  components: { Swiper, SwiperItem },
};
</script>
<style  scoped>
</style>