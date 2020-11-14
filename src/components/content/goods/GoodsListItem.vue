<!--  -->
<template>
  <div class="goods-list-item" @click="itemClick">
    <img @load="imageLoad" :src="showImage" alt="" />
    <p>{{ goodsItem.title }}</p>
    <span class="price">{{ goodsItem.price }}</span
    ><span class="collect">{{ goodsItem.cfav }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageLoad");
    },
    itemClick(iid) {
      this.$router.push("/detail/" +this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },

  components: {},
};
</script>
<style  scoped>
.goods-list-item {
  position: relative;
  font-size: 10px;
  height: 310px;

  width: 48%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  vertical-align: 5px;
}
p {
  padding-left: 5px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  color: var(--color-tint);
  margin-right: 20px;
  margin-left: 50px;
}
.collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>