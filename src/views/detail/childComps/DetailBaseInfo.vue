<!--  -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{ goods.title }}</div>
    <div class="base-price">
      <span class="price">{{ goods.price }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="dis">{{ goods.discount }}</span>
    </div>
    <div class="columns other">
      <div class="item">{{ goods.columns[0] }}</div>
      <div class="item center">{{ goods.columns[1] }}</div>
      <div class="item right">
        {{ goods.services[goods.services.length - 1].name }}
      </div>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {},
};
</script>
<style  scoped>
.base-info {
  margin: 15px 0 0;
  padding: 0 8px;
}
.title {
  color: #222222;
}
.base-price {
  margin: 10px 0 0;
}
.oldPrice {
  font-size: 13px;
  text-decoration: line-through;
}
.oldPrice,
.dis {
  margin: 0 0 0 5px;
}
.price,
.dis {
  color: #ff5777;
  font-size: 24px;
}
.dis {
  font-size: 13px;
  background-color: #ff5777;
  color: #f0f0f0;
  border-radius: 5px;
  padding: 2px 5px;
  position: relative;
  left: 0;
  top: -8px;
}
.columns {
  display: flex;
}
.other {
  border-bottom: 1px solid #efefef;
  margin: 15px 0 0;
}

.item {
  font-size: 13px;
  flex: 1;
  line-height: 30px;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.columns-item {
  line-height: 61px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>