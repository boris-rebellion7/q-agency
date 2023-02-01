<template>
  <router-link
  @mouseenter.native="onEnter"
  @mouseleave.native="onLeave"
  class="link-line-component position-relative"
  v-if="url"
  rel="noopener"
  :to="url">
    <span
    class=""
    v-html="text" />

    <span 
    ref="line"
    class="anim-line" />
  </router-link>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: "link-line-component",

  props: {
    text: {
      type: String
    },
    url: {
      type: String
    },
  },

  methods: {
    onEnter() {
      this.MouseObservable.hovered = true

      gsap.to(this.$refs.line, {
        overwrite: true,
        scaleX: 1,
        ease: "Power3.easeOut",
        transformOrigin:"left",
      })
    },

    onLeave() {
      this.MouseObservable.hovered = false

      gsap.to(this.$refs.line, {
        overwrite: true,
        scaleX: 0,
        ease: "Power3.easeOut",
        transformOrigin:"right",
        onComplete: () => {
          gsap.set(this.$refs.line, { transformOrigins: 'left' })
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped="">
.link-line-component {
  .anim-line {
    background-color: white;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    position: absolute;
    left: 0;
    top: 86%;
  }
}
</style>