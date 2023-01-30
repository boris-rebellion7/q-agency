<template>
  <div 
  id="app"
  class="page h-100">
    <navigation />

    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },

  data: () => ({
    url: "https://jsonplaceholder.typicode.com/posts"
  }),

  async mounted() {
    await this.axios.get(this.url).then((response) => {
      this.setState({posts: response.data})
    })
  },

  methods: {
    ...mapActions([
        'setState'
    ]),
  },
}
</script>

<style>

@import "@/assets/css/utility.scss";
@import "@/assets/css/global.scss";
@import'~bootstrap/dist/css/bootstrap.css'

</style>
