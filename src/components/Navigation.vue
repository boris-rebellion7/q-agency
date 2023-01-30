<template>
  <div class="navigation row justify-content-between p-3">
    <!-- LOGO -->
    <div class="col d-flex">
      <router-link :to="'/'">
        <h3>POSTMASTER</h3>
      </router-link>
    </div>
    <!-- END :: LOGO -->

    <!-- LINKS -->
    <div class="col d-flex justify-content-end">
      <router-link 
      class="h4"
      to="/posts"
      v-text="'Posts'" />
    </div>
    <!-- END :: LINKS -->
  </div>
</template>

<script>

export default {
  name: "vue-navigation",
};
</script>

<style scoped="">

.navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>