<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar"
      ><div class="left" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="center" slot="center">
        <div
          v-for="(item, index) in titles"
          :class="{ active: currentIndex == index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick',index)
    },
  },
  components: { NavBar },
};
</script>
<style  scoped>
.nav-bar {
  line-height: 44px;
  text-align: center;
  color: #666;
}
.left img {
  margin-bottom: -6px;
}

.center {
  display: flex;
  font-size: 16px;
  color: #666;
}
.center div {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>