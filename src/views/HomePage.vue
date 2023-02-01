<template>
  <div class="home-page">
    <page-header 
    headline="Welcome"
    subheadline="Your plase for awsome posts" />
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader'

export default {
  name: 'home-page',
  
  components: {
    PageHeader
  }
}
</script>
