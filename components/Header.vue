<template>
    <header class="header">
      <p>Welcome to my web site</p>
    <ul>
      <li>
        <nuxt-link class="link" to="/">Home page</nuxt-link>
      </li>
      <li>
        <nuxt-link class="link" to="/about">About page</nuxt-link>
      </li>
    </ul>
    <hr>
    </header>
</template>

<script  lang="js">
export default {
  name: "Header"
}
</script>

<style lang="css" scope>

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: #32324d;
  width: 100%;
  min-height: 90px;

}

li {
  list-style: circle;
};


</style>
