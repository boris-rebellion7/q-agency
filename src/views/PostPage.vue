<template>
  <div class="post-page text-center py-5">
    <h1 
    class="mb-5" 
    v-text="'Welcome to all of our posts'" />

    <div class="row m-0">
      <small-link
      class="col-6"
      v-for="post in posts"
      :key="post.id"
      :link="`post/${post.id}`"
      :title="post.title" />
    </div>
  </div>
</template>

<script>
import SmallLink from '@/components/posts/SmallLink'

import { mapState } from 'vuex'

export default {
  name: 'post-page',

  components: {
    SmallLink
  },

  computed: {
    ...mapState([
      'posts'
    ]),
  }
}
</script>
