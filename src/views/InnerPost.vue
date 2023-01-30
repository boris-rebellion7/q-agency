<template>
  <div class="post-inner py-5 d-flex flex-column flex-center h-100 text-center px-4">
    <h1 
    class="display-4 text-uppercase mb-4" 
    v-if="activePost[0]"
    v-html="activePost[0].title" />

    <div 
    v-if="activePost[0]"
    v-html="activePost[0].body" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _filter from 'lodash/filter'

export default {
  name: 'post-inner',

  computed: {
    ...mapState([
      'posts'
    ]),

    activePost() {
      return _filter(this.posts, p => p.id == this.$route.params.id)
    }
  }
}
</script>
