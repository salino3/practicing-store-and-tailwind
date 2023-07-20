<template>
  <div class="root" >
    <Title title="Home" />
   <div class="container">
    <span>{{ $store.state.title }}: </span>
     <button @click="increment" >
       Increment me! <span class="spanCounter">{{ $store.state.counter }}</span>
     </button>
   </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  name: 'IndexPage',
  comments: {
    Title
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
}
</script>

<style>

.spanCounter {
  color: green
}
</style>
