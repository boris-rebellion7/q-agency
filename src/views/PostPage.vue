<template>
  <div class="post-page text-center py-5">
    <h1 
    class="mb-5 mt-5 mt-md-0" 
    v-text="'Welcome to all of our posts'" />

    <!-- FILTERS -->
    <div class="mb-5">
      <input 
      @mouseenter='MouseObservable.hovered = true'
      @mouseleave='MouseObservable.hovered = false'
      type="text"
      placeholder="Search" 
      v-model="search">
    </div>
    <!-- END :: FILTERS -->

    <div class="row m-0">
      <small-link
      class="col-md-6"
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
