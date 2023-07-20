<template>
 <main class="auth">
  <Header />
   <h6>/Authed</h6>
   <nuxt />
 </main>
</template>

<script >
import Header from '@/components/Header.vue';

export default {
 name: 'auth',
 components: {
  Header
 }
}
</script>

<style lang="css" scope>

</style>
