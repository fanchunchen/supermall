<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },

  components: {},
};
</script>
<style  scoped>
.nav-bar {
  display: flex;
  position: relative;
  z-index: 10;
  line-height: 44px;

  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.left {
  width: 60px;
}
.center {
  flex: 1;
  color: #f0f0f0;
  font-size: 20px;
}
.right {
  width: 60px;
}
</style>
