<template>
  <div 
  v-if="src" 
  class="image-div" 
  :style="{paddingBottom: paddingBottom}"
  :class="absolute ? 'full-absolute' : ''">
    <picture>
      <img 
      class="img full-absolute" 
      :class="contain ? 'contain' : 'cover'"
      :src="imgSrc"
      :alt="alt">
    </picture>
  </div>
</template>

<script>

export default {
  name: "img-div",

  data: () => ({
    ratio: 0
  }),

  props: {
    src: {
        type: String
    },
    alt: {
      type: String,
      default: 'Postmaster'
    },
    contain: {
      type: Boolean,
      default: false
    },
    proportion: {
      type: Number,
      default: 1
    },
    static: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    paddingBottom() {
        return this.absolute ? 0 : this.proportion * 100 + "%";
    },

    imgSrc() {
      let img = this.static ? require('@/assets/img/' + this.src)
      : this.src
      return img
    }
  },
};

</script>
<style lang="scss" scoped="">
.image-div {
}
</style>
