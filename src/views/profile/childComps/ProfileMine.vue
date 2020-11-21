<!--  -->
<template>
  <div class="mine">
    <div class="mine-info">
      <div class="item">0.00元</div>
      <div>我的余额</div>
    </div>
    <div class="mine-info">
      <div class="item">0个</div>
      <div>我的优惠</div>
    </div>
    <div class="mine-info info">
      <div class="item">0分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMine",
  data() {
    return {};
  },

  components: {},
};
</script>
<style  scoped>
.mine {
  display: flex;
  height: 90px;
  font-size: 13px;
  border-bottom: 10px solid #f2f2f2;
}
.mine-info {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ccc;
  margin-top: 10px;
}
.info {
  border-right: none;
}
.item {
  margin-bottom: 5px;
  color: #ff5f3e;
  margin-top: 10px;
}
</style>