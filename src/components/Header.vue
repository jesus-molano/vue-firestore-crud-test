<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Create</RouterLink>
        <RouterLink to="/Activities">Activities</RouterLink>
      </nav>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;

  z-index: 1;
  width: 100%;
  background-color: rgb(20, 22, 39);


  nav{
    display: flex;
    gap: 2rem;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>