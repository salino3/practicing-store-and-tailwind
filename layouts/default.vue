<template>
  <main class="default">
    <Header />
    <nuxt />
  </main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
 name: 'default',
 components: {
  Header
 }
};
</script>

<style lang="css" scope></style>
