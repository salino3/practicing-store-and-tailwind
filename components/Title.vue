<template>
 <h1 class="title">
  {{ title }}
 </h1>
</template>

<script >
export default {
  name: "Title",
 props: ['title']
}
</script>

<style lang="css" scope>

.title {
 font-family: cursive;
 font-size: 32px;
 margin: 8px;
}
</style>
