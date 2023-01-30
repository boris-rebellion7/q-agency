<template>
  <div class="post-page text-center py-5">
    <h1 
    class="mb-5" 
    v-text="'Welcome to all of our posts'" />

    <!-- FILTERS -->
    <div class="mb-3 mb-md-5">
      <input 
      type="text"
      placeholder="Search" 
      v-model="search">
    </div>
    <!-- END :: FILTERS -->

    <div class="row m-0">
      <small-link
      class="col-6"
      v-for="post in filteredPosts(posts, 'title')"
      :key="post.id"
      :link="`post/${post.id}`"
      :title="post.title" />
    </div>
  </div>
</template>

<script>
import SmallLink from '@/components/posts/SmallLink'

import FilterMixin from '../mixins/FilterMixin'

import { mapState } from 'vuex'

export default {
  name: 'post-page',

  data: () => ({
    search: ''
  }),

  watch: {
    filteredItems(f) {
      console.log("logara", f);
    }
  },

  components: {
    SmallLink
  },

  mixins: [
    FilterMixin
  ],

  computed: {
    ...mapState([
      'posts'
    ]),
  }
}
</script>
