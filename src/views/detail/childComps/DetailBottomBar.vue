<!--  -->
<template>
  <!-- <div class="bottom-bar">
    <div class="left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon sell"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="right-l" @click="addToCart">加入购物车</div>
      <div class="right-r">结算</div>
    </div>
  </div> -->
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods:{addToCart(){
    this.$emit("addCart")
    // console.log(1);
    }},
  components: {},
};
</script>
<style  scoped>
/* .bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: 59px;

  background-color: #fff;
  display: flex;
  text-align: center;
}

.left,
.right {
  flex: 1;
  display: flex;
}

.left div,
.right div {
  flex: 1;
}

.left {
  font-size: 14px;
}

.left .icon {
  display: block;
  height: 22px;
  width: 22px;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
  margin: 10px auto 5px;
}

.left .service {
  background-position: 0 -52px;
}

.left .shop {
  background-position: 0 -97px;
}

.left .sell {
  background-position: 0 2px;
}

.right {
  line-height: 59px;

  font-size: 16px;
}

.right-l {
  background-color: #ffe817;
  color: #333;
}

.right-r {
  background-color: #ff6699;
  color: #f0f0f0;
} */
.bottom-bar {
    height: 58px;
   
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
</style>