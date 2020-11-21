<!--  -->
<template>
  <div><profile-nav-bar></profile-nav-bar>
  <profile-mine></profile-mine>
  <profile-info></profile-info>
  
  </div>
</template>

<script>
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfileMine from "./childComps/ProfileMine";
import ProfileInfo from "./childComps/ProfileInfo"
export default {
  name: "Profile",
  data() {
    return {};
  },

  components: { ProfileNavBar,ProfileMine,ProfileInfo },
};
</script>
<style  scoped>
</style>