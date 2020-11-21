<!--  -->
<template>
  <div>
    <div class="check" :class="{ active: isChecked }">
      <img src="~assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: { isChecked: { type: Boolean } },

  components: {},
};
</script>
<style  scoped>
.check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
}
.active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>