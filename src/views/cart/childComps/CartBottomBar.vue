<!--  -->
<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
    </div>
    <div class="total">
      <span>全选</span><span>合计:{{ totalPrice }}</span>
    </div>
    <div class="calc">去计算({{ totalLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
    totalLength() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    totalPrice() {
      return (
        "¥" +
        this.cartList
          .filter((item) => {
            return item.checked === true;
          })
          .reduce((preValue, item) => {
            return preValue + item.count * item.price;
          }, 0)
          .toFixed(2)
      );
    },

    isSelectAll() {
      if (this.cartList.length == 0) {
        return false;
      }
      return !this.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => {
          return (item.checked = false);
        });
      } else {
        this.cartList.forEach((item) => {
          return (item.checked = true);
        });
      }
    },
  },
  components: { CheckButton },
};
</script>
<style  scoped>
.bottom-bar {
  display: flex;
  background-color: #f0f0f0;
  position: fixed;
  right: 0;
  left: 0;
  bottom:49px
}
.check {
  width: 60px;
  margin-top: 8px;
}
.total {
  height: 40px;
  line-height: 40px;
  flex: 1;
  margin-left: -35px;
}
.calc {
  height: 40px;
  line-height: 40px;
  width: 80px;

  background-color: #ff8198;
  text-align: center;
}
span {
  margin-right: 20px;
}
</style>