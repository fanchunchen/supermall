<<<<<<< HEAD
<!--  -->
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex == index }"
      @click="tabControlClick(index)"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return { currentIndex: 0 };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabControlClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick',index)
    },
  },

  components: {},
};
</script>
<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #f0f0f0;
  line-height: 40px;
  font-size: 15px;
}
.tab-control .tab-control-item {
  flex: 1;
}
.active span {
  border-bottom: 3px solid pink;
  padding: 5px;
}
.active {
  color: pink;
}
=======
<!--  -->
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex == index }"
      @click="tabControlClick(index)"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return { currentIndex: 0 };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabControlClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick',index)
    },
  },

  components: {},
};
</script>
<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #f0f0f0;
  line-height: 40px;
  font-size: 15px;
}
.tab-control .tab-control-item {
  flex: 1;
}
.active span {
  border-bottom: 3px solid pink;
  padding: 5px;
}
.active {
  color: pink;
}
>>>>>>> a21f46653376ec71621586f593c1baad12cf33c6
</style>