<template>
  <div 
  id="app"
  @mousemove='onMouseMove'
  class="page h-100">
    <navigation />

    <router-view/>

    <fancy-cursor />  
  </div>
</template>

<script>
import Vue from 'vue'

import { mapActions } from 'vuex'
import { MouseObservable } from "@/observables/MouseObservable.js"

import Navigation from '@/components/Navigation'
import FancyCursor from '@/components/fancyCursor/FancyCursor'

export default {
  components: {
    Navigation,
    FancyCursor
  },

  data: () => ({
    url: "https://jsonplaceholder.typicode.com/posts"
  }),

  created() {
    Vue.prototype.MouseObservable = MouseObservable
  },

  async mounted() {
    await this.axios.get(this.url).then((response) => {
      this.setState({posts: response.data})
    })
  },

  methods: {
    ...mapActions([
        'setState'
    ]),

    onMouseMove(e)  {
        MouseObservable.oldMouseX = MouseObservable.mouseX
        MouseObservable.oldMouseY = MouseObservable.mouseY
        MouseObservable.mouseX = Math.round(e.clientX)
        MouseObservable.mouseY = Math.round(e.clientY)
    },
  },
}
</script>

<style>

@import "@/assets/css/utility.scss";
@import "@/assets/css/global.scss";
@import'~bootstrap/dist/css/bootstrap.css';

</style>
