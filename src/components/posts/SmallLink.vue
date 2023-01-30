<template>
  <router-link 
  :to="link"
  class='small-link'>
    <span v-html="title" />
  </router-link>
</template>

<script>

export default {
  name: "small-link",

  components: {},

  data: () => ({}),

  props: {
    link: {
      type: String
    },
    title: {
      type: String
    },
  },
};
</script>

<style lang="scss" scoped="">
.small-link {
  padding: 4rem;
  border: 1px solid white;
  transition: background-color .4s;

  @media (pointer:fine){
    &:hover {
      background-color: rgba(white, .1);
    }
  }
}
</style>