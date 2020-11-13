<!--  -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },

  components: {},
};
</script>
<style  scoped>
#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: #f6f6f6;
  z-index:9
}
</style>