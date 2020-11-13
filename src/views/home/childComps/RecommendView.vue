<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.link">
      <a :href="item.link"
        ><img :src="item.image" alt="" />
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {},
};
</script>
 <style  scoped>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  margin-top: 10px;
}
.recommend-item {
  flex: 1;
}
img {
  width: 70px;
  margin-bottom: 10px;
}
</style>