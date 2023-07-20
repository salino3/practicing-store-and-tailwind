<template>
 <aside>
  <h3>Links</h3>
    <ul>
      <li>
        <nuxt-link to="#">Link 1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Link 2</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Link 3</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Link 4</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Link 5</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Link 6</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Link 7</nuxt-link>
      </li>
    </ul>
 </aside>
</template>

<script >
export default {
  name: "Aside"

}
</script>

<style lang="css" scope>

aside {
  border: solid 1px;
  grid-area: aside;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

aside > * {
 border: solid;
}

ul {
  height: 80%;
}
</style>
