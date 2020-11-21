<!--  -->
<template>
  <div class="nav">
    <div>
      <nav-bar class="nav-bar"><div slot="center">购物街商城</div></nav-bar>
    </div>
    <div class="info">
      <img src="~assets/img/profile/avatar.svg" alt="" />
      <div class="enter">
        <div class="log"><a href="">登录/注册</a></div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt="" /><span
            >暂无绑定手机号</span
          >
        </div>
      </div>

      <div class="right">></div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "ProfileNavBar",
  data() {
    return {};
  },

  components: { NavBar },
};
</script>
<style  scoped>
.nav {
  height: 130px;
  background-color: var(--color-tint);
}
.nav-bar {
  text-align: center;
  box-shadow: none;
}
.nav-bar div {
  font-size: 17px;
}
.info {
  position: relative;
  padding: 5px 10px;
  display: flex;
  color: #f0f0f0;
}
a {
  color: #f0f0f0;
}
img {
  width: 20%;
}
.enter {
  padding: 0 0 0 5px;
}
.log {
  margin-top: 15px;
}
.phone img {
  width: 20px;
  margin-top: 5px;
}
.phone span {
  position: absolute;
  top: 45px;
}
.right {
  position: absolute;
  top: 30px;
  right: 15px;
}
</style>