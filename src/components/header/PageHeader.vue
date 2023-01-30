<template>
  <div class="page-header position-relative d-flex align-items-end justify-content-center text-center">
    <div class="overlay-gradient z-1 position-absolute t-0 l-0 w-100 h-100" />

    <img-div
    src="header-image.jpg" 
    :proportion=".66"
    :static="true"
    :absolute='true'
    alt="Awsome posts" />

    <div class="position-relative on-top w-100">
      <div class="mb-5">
        <h1 
        class="display-1" 
        v-html="headline" />

        <h6 
        class="h4" 
        v-html="subheadline" />
      </div>

      <!-- 4 RANDOM POSTS -->
      <div class="row m-0">
        <small-link
        class="col-6"
        v-for="post in randomPosts"
        :key="post.id"
        :link="`post/${post.id}`"
        :title="post.title" />
      </div>
      <!-- END :: 4 RANDOM POSTS -->
    </div>
  </div>
</template>

<script>
import ImgDiv from '@/components/img/ImgDiv'
import SmallLink from '@/components/posts/SmallLink'

import { mapState } from 'vuex'
import _sampleSize from 'lodash/sampleSize'

export default {
  name: "page-header",

  components: {
    ImgDiv,
    SmallLink
  },

  props: {
    headline: {
      type: String
    },
    subheadline: {
      type: String
    }
  },

  computed: {
    ...mapState([
      'posts'
    ]),

    randomPosts() {
      return _sampleSize(this.posts, 4)
    }
  }
};
</script>

<style lang="scss" scoped="">
.page-header {
  height: 100vh;
  min-height: 500px;

  .overlay-gradient {
    background: linear-gradient(180deg, rgba(252,19,19,0) 14%, rgba(0,0,0,0.7301514355742297) 80%);
  }
}
</style>