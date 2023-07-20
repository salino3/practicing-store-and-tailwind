<template>
  <main class="default">
    <Header />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
 name: 'default',
 components: {
  Header,
  Footer
 }
};
</script>

<style lang="css" scope>


</style>
