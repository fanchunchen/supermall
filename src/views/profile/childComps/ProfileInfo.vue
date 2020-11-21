<!--  -->
<template>
  <div class="info">
    <div class="message">
      <img src="~assets/img/profile/message.svg" alt="" /><span>我的消息</span>
    </div>
    <div class="score">积分商城</div>
    <div class="member">会员卡</div>
    <div class="border"></div>
    <div class="cart">
      <img src="~assets/img/profile/cart.svg" alt="" /><span>我的购物车</span>
    </div>
    <div class="shopping">下载购物APP</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
};
</script>
<style  scoped>
.info div {
  margin-top: 5px;
  border-bottom: 1px solid #f2f2f2;
  line-height: 30px;
  font-size: 15px;
}
.message,
.cart {
  position: relative;
}
img {
  position: relative;
  top: 4px;
  left: 20px;
  margin-right: 30px;
  width: 5%;
}
.info .member {
  border-bottom: none;
}
.border {
  background-color: #f2f2f2;
  height: 10px;
}
.score,
.member {
  margin-left: 49px;
}
.shopping {
  margin-left: 47px;
}
</style>