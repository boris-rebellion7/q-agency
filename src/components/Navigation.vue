<template>
  <div class="navigation row justify-content-between p-3">
    <!-- LOGO -->
    <div class="col d-flex">
      <router-link 
      @mouseenter.native='MouseObservable.hovered = true'
      @mouseleave.native='MouseObservable.hovered = false'
      :to="'/'">
        <h3>POSTMASTER</h3>
      </router-link>
    </div>
    <!-- END :: LOGO -->

    <!-- LINKS -->
    <div class="col d-flex justify-content-end">

      <link-line-component
      class="h4"
      :text="'Posts'"
      :url="'/posts'" />
    </div>
    <!-- END :: LINKS -->
  </div>
</template>

<script>
import LinkLineComponent from '@/components/linkLineComponent/LinkLineComponent'

export default {
  name: "vue-navigation",

  components: {
    LinkLineComponent
  }
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