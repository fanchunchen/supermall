<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar"
      ><div class="left" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="center" slot="center">
        <div>商品</div>
        <div>参数</div>
        <div>评论</div>
        <div>推荐</div>
      </div></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {};
  },
methods:{backClick(){this.$router.back()}},
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
}
.center div {
  flex: 1;
}
</style>