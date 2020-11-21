<!--  -->
<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll"
      ><cart-list-item
        v-for="(item, index) in list"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";
export default {
  name: "CartList",
  data() {
    return {};
  },
  computed: { ...mapGetters({ list: "cartList" }) },
  activated() {
    this.$refs.scroll.refresh();
  },

  components: { CartListItem, Scroll },
};
</script>
<style  scoped>
.cart-list {
  height: 534px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>