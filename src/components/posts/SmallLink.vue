<template>
  <router-link 
  @mouseenter.native='MouseObservable.hovered = true'
  @mouseleave.native='MouseObservable.hovered = false'
  :to="link"
  class='small-link'>
    <div class="d-flex flex-center">
      <span v-html="title" />
    </div>
  </router-link>
</template>

<script>

export default {
  name: "small-link",

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
  padding: 2rem;
  border: 1px solid white;
  transition: background-color .4s;

  @media screen  and (min-width: 768px) {
    padding: 4rem;
  }

  @media (pointer:fine){
    &:hover {
      background-color: rgba(white, .1);
    }
  }
}
</style>