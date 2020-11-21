<!--  -->
<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div class="center" slot="center">购物车({{ length }})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar"

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["cartLength"])
    ...mapGetters({ length: "cartLength" }),
  },

  components: { NavBar, CartList,CartBottomBar },
};
</script>
<style  scoped>
#cart {
  position: relative;

  
}
.nav-bar {
  background-color: var(--color-tint);
  /* position: fixed;
  right:0;left:0;
  top:0 */
}
.center {
  color: #f0f0f0;
}
</style>