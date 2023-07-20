<template>
 <div>
  <Title :title="title" />
  <h2>{{ title }}</h2>
    <img src="/favicon.ico" alt="Icon" loading="lazy" >
  <Me />
 </div>
</template>

<script >
import Me from './me.vue';
import Title from '@/components/Title.vue';

export default {
 name: 'About',
 layout: 'auth',
 components: {
  Me,
  Title
 },
 data() {
  return {
    title: "About"
  }
 }
}
</script>

<style lang="css" scope>

</style>
